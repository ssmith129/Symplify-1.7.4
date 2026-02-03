import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, Progress } from 'antd';
import type { RootState, AppDispatch } from '../../../core/redux/store';
import { updateClinicalAlerts, setAlertsConnected, fetchClinicalAlerts } from '../../../core/redux/aiSlice';
import { alertWebSocket } from '../../../core/ai/mockApi';
import type { PredictiveAlert, RiskLevel } from '../../../core/ai/types';
import ImageWithBasePath from '../../../core/imageWithBasePath';

interface ClinicalAlertWidgetProps {
  maxAlerts?: number;
  compact?: boolean;
}

const ClinicalAlertWidget: React.FC<ClinicalAlertWidgetProps> = ({
  maxAlerts = 5,
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

  const getRiskColor = (level: RiskLevel): string => ({
    critical: '#F44336',
    high: '#FF9800',
    moderate: '#FFC107',
    low: '#4CAF50'
  }[level]);

  const getRiskBgClass = (level: RiskLevel): string => ({
    critical: 'bg-danger',
    high: 'bg-warning',
    moderate: 'bg-warning-light',
    low: 'bg-success'
  }[level]);

  const getAlertTypeClass = (level: RiskLevel): 'error' | 'warning' | 'info' | 'success' => ({
    critical: 'error' as const,
    high: 'warning' as const,
    moderate: 'info' as const,
    low: 'success' as const
  }[level]);

  const filteredAlerts = alerts
    .filter(a => a.riskLevel !== 'low')
    .slice(0, maxAlerts);

  const handleDismiss = (alertId: string) => {
    const updatedAlerts = alerts.filter(a => a.id !== alertId);
    dispatch(updateClinicalAlerts(updatedAlerts));
  };

  const handleAcknowledge = (alert: PredictiveAlert) => {
    // In a real app, this would mark the alert as acknowledged
    console.log('Acknowledged alert:', alert.id);
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
                    backgroundColor: getRiskColor(alert.riskLevel)
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
    <div className="clinical-alerts-widget">
      {/* Status Header */}
      <div className="d-flex align-items-center justify-content-between mb-2 pb-2 border-bottom">
        <div className="d-flex align-items-center">
          <i className="ti ti-activity-heartbeat text-danger me-2" />
          <span className="fs-13 fw-medium">Live Monitoring</span>
        </div>
        <span className="d-flex align-items-center fs-12">
          <span
            className="rounded-circle d-inline-block me-1"
            style={{
              width: 6,
              height: 6,
              backgroundColor: connected ? '#4CAF50' : '#9e9e9e',
              animation: connected ? 'pulse 2s infinite' : 'none'
            }}
          />
          <span className={connected ? 'text-success' : 'text-muted'}>
            {connected ? 'Live' : 'Offline'}
          </span>
        </span>
      </div>

      {filteredAlerts.length === 0 ? (
        <div className="text-center py-3">
          <i className="ti ti-shield-check text-success fs-2 mb-2 d-block opacity-75" />
          <p className="text-muted mb-0 fs-13">No high-priority alerts</p>
          <span className="text-muted fs-12">AI is continuously monitoring patient data</span>
        </div>
      ) : (
        <div className="alert-timeline" style={{ maxHeight: '280px', overflowY: 'auto' }}>
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className="alert-item py-2 border-bottom"
              style={{ borderColor: '#f0f0f0' }}
            >
              {/* Patient Row */}
              <div className="d-flex align-items-center justify-content-between mb-1">
                <div className="d-flex align-items-center">
                  <span
                    className="rounded-circle me-2 flex-shrink-0"
                    style={{ width: 8, height: 8, backgroundColor: getRiskColor(alert.riskLevel) }}
                  />
                  <span className="fs-13 fw-medium">{alert.patientName}</span>
                  <span
                    className="badge ms-2 px-1 py-0 fs-10"
                    style={{ backgroundColor: `${getRiskColor(alert.riskLevel)}20`, color: getRiskColor(alert.riskLevel) }}
                  >
                    {alert.riskLevel}
                  </span>
                </div>
                <Tooltip title={`${alert.confidence}% confidence`}>
                  <span
                    className="badge px-2 py-1 fs-10 fw-medium"
                    style={{ backgroundColor: `${getRiskColor(alert.riskLevel)}15`, color: getRiskColor(alert.riskLevel) }}
                  >
                    {alert.confidence}%
                  </span>
                </Tooltip>
              </div>

              {/* Prediction */}
              <div className="fs-12 text-muted mb-1">
                <span className="text-dark">{alert.predictedEvent}</span>
                <span className="ms-1">• {alert.timeframe}</span>
              </div>

              {/* Actions */}
              <div className="d-flex gap-1">
                <button
                  className="btn btn-sm py-0 px-2 fs-11 btn-outline-primary"
                  onClick={() => handleAcknowledge(alert)}
                >
                  Acknowledge
                </button>
                <button
                  className="btn btn-sm py-0 px-2 fs-11 btn-light"
                  onClick={() => handleDismiss(alert.id)}
                >
                  Dismiss
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center pt-2">
        <span className="text-muted fs-12">
          <i className="ti ti-sparkles me-1" />
          AI predictions based on vital trends
        </span>
      </div>
    </div>
  );
};

export default ClinicalAlertWidget;
