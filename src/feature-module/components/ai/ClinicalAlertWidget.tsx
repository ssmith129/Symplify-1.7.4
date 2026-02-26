import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'antd';
import type { RootState, AppDispatch } from '../../../core/redux/store';
import { updateClinicalAlerts, setAlertsConnected, fetchClinicalAlerts } from '../../../core/redux/aiSlice';
import { alertWebSocket } from '../../../core/ai/mockApi';
import type { PredictiveAlert, RiskLevel } from '../../../core/ai/types';

interface ClinicalAlertWidgetProps {
  maxAlerts?: number;
  compact?: boolean;
}

// Risk level configuration with colors and labels
const RISK_CONFIG: Record<RiskLevel, { color: string; bgColor: string; label: string; icon: string }> = {
  critical: { color: '#F44336', bgColor: '#FFEBEE', label: 'Critical', icon: 'ti-urgent' },
  high: { color: '#FF9800', bgColor: '#FFF3E0', label: 'High', icon: 'ti-alert-triangle' },
  moderate: { color: '#FFC107', bgColor: '#FFF8E1', label: 'Moderate', icon: 'ti-info-circle' },
  low: { color: '#4CAF50', bgColor: '#E8F5E9', label: 'Low', icon: 'ti-circle-check' },
};

// Trend indicators for ML-based predictions
const TREND_INDICATORS = {
  worsening: { icon: 'ti-trending-up', color: '#F44336', label: 'Worsening' },
  stable: { icon: 'ti-minus', color: '#9E9E9E', label: 'Stable' },
  improving: { icon: 'ti-trending-down', color: '#4CAF50', label: 'Improving' },
};

const ClinicalAlertWidget: React.FC<ClinicalAlertWidgetProps> = ({
  maxAlerts = 8,
  compact = false
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { alerts, connected, lastUpdated } = useSelector((state: RootState) => state.ai.clinicalAlerts);

  // Connect to mock WebSocket for real-time alerts
  useEffect(() => {
    const disconnect = alertWebSocket.connect((newAlerts) => {
      dispatch(updateClinicalAlerts(newAlerts));
      dispatch(setAlertsConnected(true));
    });

    dispatch(setAlertsConnected(true));

    return () => {
      disconnect();
      dispatch(setAlertsConnected(false));
    };
  }, [dispatch]);

  // Initial fetch
  useEffect(() => {
    dispatch(fetchClinicalAlerts());
  }, [dispatch]);

  // Filter and sort alerts by risk level
  const filteredAlerts = alerts
    .filter(a => a.riskLevel !== 'low')
    .sort((a, b) => {
      const order: Record<RiskLevel, number> = { critical: 0, high: 1, moderate: 2, low: 3 };
      return order[a.riskLevel] - order[b.riskLevel];
    })
    .slice(0, maxAlerts);

  // Calculate statistics
  const criticalCount = alerts.filter(a => a.riskLevel === 'critical').length;
  const highCount = alerts.filter(a => a.riskLevel === 'high').length;
  const moderateCount = alerts.filter(a => a.riskLevel === 'moderate').length;
  const totalActiveAlerts = criticalCount + highCount + moderateCount;

  const handleDismiss = (alertId: string) => {
    const updatedAlerts = alerts.filter(a => a.id !== alertId);
    dispatch(updateClinicalAlerts(updatedAlerts));
  };

  const handleAcknowledge = (alert: PredictiveAlert) => {
    console.log('Acknowledged alert:', alert.id);
  };

  // Get trend based on confidence (mock logic)
  const getTrend = (confidence: number): 'worsening' | 'stable' | 'improving' => {
    if (confidence >= 80) return 'worsening';
    if (confidence >= 60) return 'stable';
    return 'improving';
  };

  if (compact) {
    return (
      <div className="clinical-alerts-compact">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="fw-bold small">
            <i className="ti ti-alert-triangle text-danger me-1" />
            Active Alerts
          </span>
          <span className={`badge ${connected ? 'bg-success' : 'bg-secondary'}`}>
            {connected ? 'Live' : 'Offline'}
          </span>
        </div>
        {filteredAlerts.length === 0 ? (
          <div className="text-center py-2 text-muted small">
            <i className="ti ti-check-circle text-success me-1" />
            No critical alerts
          </div>
        ) : (
          <div className="alert-list-compact">
            {filteredAlerts.slice(0, 3).map((alert) => (
              <div
                key={alert.id}
                className="d-flex align-items-center py-1 border-bottom"
              >
                <span
                  className="rounded-circle me-2"
                  style={{
                    width: 8,
                    height: 8,
                    backgroundColor: RISK_CONFIG[alert.riskLevel].color
                  }}
                />
                <span className="small flex-grow-1 text-truncate">{alert.patientName}</span>
                <span className="badge bg-light text-dark small">{alert.timeframe}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="clinical-alerts-widget d-flex flex-column h-100" role="region" aria-label="Clinical Alerts">
      {/* Summary Stats Row - matches Patient Acuity pattern */}
      <div className="row g-3 mb-4 flex-shrink-0" aria-live="polite" aria-atomic="true">
        <div className="col-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: 'var(--clinical-critical-bg, #FEF2F2)' }}>
            <h4 className="fw-bold mb-1" style={{ color: 'var(--clinical-critical, #DC2626)' }}>{criticalCount}</h4>
            <p className="mb-0 fs-12 text-muted"><i className="ti ti-urgent me-1" aria-hidden="true" /><span>Critical</span></p>
            <span className="visually-hidden">{criticalCount} critical alerts</span>
          </div>
        </div>
        <div className="col-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: 'var(--clinical-caution-bg, #FEFCE8)' }}>
            <h4 className="fw-bold mb-1" style={{ color: 'var(--clinical-urgent, #EA580C)' }}>{highCount}</h4>
            <p className="mb-0 fs-12 text-muted"><i className="ti ti-alert-triangle me-1" aria-hidden="true" /><span>High Risk</span></p>
            <span className="visually-hidden">{highCount} high risk alerts</span>
          </div>
        </div>
        <div className="col-4">
          <div className="border rounded-2 p-3 text-center" style={{ backgroundColor: 'var(--clinical-info-bg, #EFF6FF)' }}>
            <h4 className="fw-bold mb-1 text-primary">{totalActiveAlerts}</h4>
            <p className="mb-0 fs-12 text-muted"><i className="ti ti-activity me-1" aria-hidden="true" /><span>Total Active</span></p>
            <span className="visually-hidden">{totalActiveAlerts} total active alerts</span>
          </div>
        </div>
      </div>

      {/* Live Monitoring Status Header */}
      <div className="d-flex align-items-center justify-content-between mb-3 p-2 rounded-2 flex-shrink-0" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="d-flex align-items-center">
          <span
            className="rounded-circle d-inline-block me-2"
            style={{
              width: 10,
              height: 10,
              backgroundColor: connected ? '#4CAF50' : '#9e9e9e',
              animation: connected ? 'pulse 2s infinite' : 'none',
              boxShadow: connected ? '0 0 0 3px rgba(76, 175, 80, 0.2)' : 'none'
            }}
          />
          <span className="fs-13 fw-medium">
            {connected ? 'Live Monitoring Active' : 'Connection Lost'}
          </span>
        </div>
        <span className="fs-11 text-muted">
          <i className="ti ti-refresh me-1" />
          Updated {lastUpdated ? 'just now' : '—'}
        </span>
      </div>

      {filteredAlerts.length === 0 ? (
        <div className="text-center py-4">
          <i className="ti ti-shield-check text-success fs-1 mb-2 d-block opacity-75" />
          <p className="text-muted mb-0 fs-14 fw-medium">No High-Priority Alerts</p>
          <span className="text-muted fs-12">AI is continuously monitoring all patient vitals</span>
        </div>
      ) : (
        /* Alert List - Scrollable, fills remaining space */
        <div className="overflow-auto flex-grow-1" style={{ minHeight: 0 }} role="list" aria-live="assertive" aria-label="Clinical alert list">
          {filteredAlerts.map((alert, index) => {
            const config = RISK_CONFIG[alert.riskLevel];
            const trend = getTrend(alert.confidence);
            const trendConfig = TREND_INDICATORS[trend];

            return (
              <div
                key={alert.id}
                role="listitem"
                aria-label={`${config.label} alert for ${alert.patientName}: ${alert.predictedEvent}`}
                className={`p-3 rounded-2 ${index < filteredAlerts.length - 1 ? 'mb-2' : ''}`}
                style={{
                  border: `1px solid ${config.color}30`,
                  backgroundColor: `${config.color}08`
                }}
              >
                {/* Top Row: Patient Name, Risk Badge, Confidence */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <span
                      className="rounded-circle me-2 flex-shrink-0"
                      style={{ width: 10, height: 10, backgroundColor: config.color }}
                    />
                    <span className="fs-14 fw-semibold">{alert.patientName}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    {/* ML Trend Indicator */}
                    <Tooltip title={`Trend: ${trendConfig.label}`}>
                      <span 
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        style={{ 
                          width: 24, 
                          height: 24, 
                          backgroundColor: `${trendConfig.color}15`
                        }}
                      >
                        <i className={`ti ${trendConfig.icon} fs-12`} style={{ color: trendConfig.color }} />
                      </span>
                    </Tooltip>
                    {/* Confidence Score */}
                    <Tooltip title={`AI Confidence: ${alert.confidence}%`}>
                      <span
                        className="badge px-2 py-1 fs-11 fw-bold"
                        style={{ backgroundColor: config.bgColor, color: config.color }}
                      >
                        {alert.confidence}%
                      </span>
                    </Tooltip>
                  </div>
                </div>

                {/* Middle Row: Risk Level Badge and Prediction */}
                <div className="d-flex align-items-center mb-2">
                  <span
                    className="badge me-2 px-2 py-1 fs-10 fw-medium"
                    style={{ backgroundColor: config.color, color: '#fff' }}
                    role="status"
                  >
                    <i className={`ti ${config.icon} me-1 fs-10`} aria-hidden="true" />
                    {config.label}
                  </span>
                  <span className="fs-12 text-muted">
                    <i className="ti ti-clock me-1" />
                    {alert.timeframe}
                  </span>
                </div>

                {/* Prediction Text */}
                <p className="fs-13 text-dark mb-3" style={{ lineHeight: '1.4' }}>
                  {alert.predictedEvent}
                </p>

                {/* Action Buttons - Left aligned with consistent styling */}
                <div className="d-flex justify-content-start gap-2">
                  <button
                    className="btn btn-sm py-1 px-3 fs-12 btn-outline-primary alert-action-btn"
                    onClick={() => handleAcknowledge(alert)}
                    aria-label={`Acknowledge ${config.label} alert for ${alert.patientName}`}
                    style={{
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(46, 55, 164, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <i className="ti ti-circle-check fs-14" />
                  </button>
                  <button
                    className="btn btn-sm py-1 px-3 fs-12 btn-light alert-action-btn"
                    onClick={() => handleDismiss(alert.id)}
                    aria-label={`Dismiss alert for ${alert.patientName}`}
                    style={{
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.backgroundColor = '#e9ecef';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.backgroundColor = '';
                    }}
                  >
                    <i className="ti ti-x fs-14" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default ClinicalAlertWidget;
