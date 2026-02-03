/**
 * Feature 7: AI-Powered Shift Handoff - Dashboard Widget
 * Compact preview widget for Admin and Doctor dashboards
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import type { RootState, AppDispatch } from '../../../../core/redux/store';
import { generateHandoffReport, selectPatient, clearReport } from '../../../../core/redux/shiftHandoffSlice';
import type { PatientHandoff } from '../../../../core/api/mock/shiftHandoffMockApi';
import { all_routes } from '../../../routes/all_routes';

// Priority configuration for color coding
const PRIORITY_CONFIG: Record<string, { color: string; bgColor: string; label: string }> = {
  critical: { color: '#F44336', bgColor: '#FFEBEE', label: 'Critical' },
  high: { color: '#FF9800', bgColor: '#FFF3E0', label: 'High' },
  moderate: { color: '#FFC107', bgColor: '#FFF8E1', label: 'Moderate' },
  stable: { color: '#4CAF50', bgColor: '#E8F5E9', label: 'Stable' },
};

interface ShiftHandoffWidgetProps {
  expanded?: boolean;
  onToggleExpand?: () => void;
}

const ShiftHandoffWidget: React.FC<ShiftHandoffWidgetProps> = ({
  expanded = true,
  onToggleExpand
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { currentReport, isGenerating } = useSelector((state: RootState) => state.shiftHandoff);
  const [isWidgetExpanded, setIsWidgetExpanded] = useState(expanded);

  useEffect(() => {
    // Load handoff data when widget mounts if not already loaded
    if (!currentReport && !isGenerating) {
      dispatch(generateHandoffReport({
        outgoingNurseId: 'nurse-001',
        incomingNurseId: 'nurse-002',
        shiftType: 'day',
        unitId: 'unit-3b'
      }));
    }
  }, [dispatch, currentReport, isGenerating]);

  const handleToggleExpand = () => {
    setIsWidgetExpanded(!isWidgetExpanded);
    onToggleExpand?.();
  };

  const handleViewFullReport = () => {
    navigate(all_routes.shiftHandoff);
  };

  const handlePatientClick = (patient: PatientHandoff) => {
    dispatch(selectPatient(patient));
    navigate(all_routes.shiftHandoff);
  };

  // Get priority patients (critical and high)
  const priorityPatients = currentReport?.patients.filter(
    p => p.priorityLevel === 'critical' || p.priorityLevel === 'high'
  ).slice(0, 3) || [];

  // Count by priority
  const priorityCounts = currentReport?.patients.reduce((acc, p) => {
    acc[p.priorityLevel] = (acc[p.priorityLevel] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) || {};

  if (isGenerating) {
    return (
      <div className="card shadow-sm h-100 shift-handoff-widget">
        <div className="card-header d-flex align-items-center justify-content-between py-2">
          <div className="d-flex align-items-center">
            <h5 className="fw-bold mb-0">Shift Handoff</h5>
          </div>
        </div>
        <div className="card-body d-flex align-items-center justify-content-center py-5">
          <div className="text-center">
            <div className="spinner-border text-primary mb-2" role="status" style={{ width: 24, height: 24 }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mb-0 text-muted fs-13">Generating handoff report...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm h-100 shift-handoff-widget">
      {/* Header */}
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h5 className="fw-bold mb-0">Shift Handoff</h5>
        </div>
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-sm btn-light border-0 p-1"
            onClick={handleToggleExpand}
          >
            <i className={`ti ti-chevron-${isWidgetExpanded ? 'up' : 'down'} fs-14`} />
          </button>
        </div>
      </div>

      {isWidgetExpanded && currentReport && (
        <div className="card-body pt-3 pb-3">
          {/* Priority Stats Row */}
          <div className="row g-2 mb-3">
            <div className="col-6 col-md-3">
              <div
                className="text-center p-2 rounded-2 border"
                style={{ backgroundColor: '#f8f9fa' }}
              >
                <h5 className="fw-bold mb-0 text-primary">{currentReport.totalPatients}</h5>
                <span className="fs-11 text-muted">Total</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div
                className="text-center p-2 rounded-2 border"
                style={{ backgroundColor: PRIORITY_CONFIG.critical.bgColor }}
              >
                <h5 className="fw-bold mb-0" style={{ color: PRIORITY_CONFIG.critical.color }}>
                  {priorityCounts.critical || 0}
                </h5>
                <span className="fs-11 text-muted">Critical</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div
                className="text-center p-2 rounded-2 border"
                style={{ backgroundColor: PRIORITY_CONFIG.high.bgColor }}
              >
                <h5 className="fw-bold mb-0" style={{ color: PRIORITY_CONFIG.high.color }}>
                  {priorityCounts.high || 0}
                </h5>
                <span className="fs-11 text-muted">High</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div
                className="text-center p-2 rounded-2 border"
                style={{ backgroundColor: PRIORITY_CONFIG.stable.bgColor }}
              >
                <h5 className="fw-bold mb-0" style={{ color: PRIORITY_CONFIG.stable.color }}>
                  {priorityCounts.stable || 0}
                </h5>
                <span className="fs-11 text-muted">Stable</span>
              </div>
            </div>
          </div>

          {/* Shift Overview Stats Row */}
          <div className="row g-2 mb-3">
            <div className="col-6 col-md-3">
              <div className="border rounded-2 p-2 text-center" style={{ backgroundColor: '#EEF2FF' }}>
                <h5 className="fw-bold mb-0 text-primary">12</h5>
                <p className="mb-0 fs-11 text-muted">Staff On Duty</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="border rounded-2 p-2 text-center" style={{ backgroundColor: '#ECFDF5' }}>
                <h5 className="fw-bold mb-0 text-success">85%</h5>
                <p className="mb-0 fs-11 text-muted">Bed Occupancy</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="border rounded-2 p-2 text-center" style={{ backgroundColor: '#FFFBEB' }}>
                <h5 className="fw-bold mb-0 text-warning">2.5h</h5>
                <p className="mb-0 fs-11 text-muted">Avg Wait Time</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="border rounded-2 p-2 text-center" style={{ backgroundColor: '#EFF6FF' }}>
                <h5 className="fw-bold mb-0 text-info">28</h5>
                <p className="mb-0 fs-11 text-muted">Pending Consults</p>
              </div>
            </div>
          </div>

          {/* Shift Info */}
          <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom">
            <div className="d-flex align-items-center">
              <span className="avatar avatar-sm bg-soft-primary text-primary rounded-circle me-2">
                <i className="ti ti-sun fs-14" />
              </span>
              <div>
                <span className="fs-12 text-muted d-block">{currentReport.shiftType.charAt(0).toUpperCase() + currentReport.shiftType.slice(1)} Shift</span>
                <span className="fs-13 fw-medium">{currentReport.unitName}</span>
              </div>
            </div>
            <div className="text-end">
              <span className="fs-12 text-muted d-block">Transfer</span>
              <span className="fs-12 fw-medium text-truncate d-block" style={{ maxWidth: 150 }}>
                {currentReport.outgoingNurse.name.split(' ')[0]} → {currentReport.incomingNurse.name.split(' ')[0]}
              </span>
            </div>
          </div>

          {/* Priority Patients List */}
          {priorityPatients.length > 0 && (
            <div className="priority-patients-list">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="fs-12 fw-semibold text-dark">Priority Patients</span>
                <span className="badge bg-soft-danger text-danger fs-10">{priorityPatients.length} Need Attention</span>
              </div>
              
              {priorityPatients.map((patient) => {
                const config = PRIORITY_CONFIG[patient.priorityLevel];
                const criticalEvent = patient.recentEvents.find(e => e.severity === 'critical' || e.severity === 'warning');
                
                return (
                  <div
                    key={patient.patientId}
                    className="d-flex align-items-center justify-content-between py-2 border-bottom cursor-pointer patient-row"
                    onClick={() => handlePatientClick(patient)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center flex-grow-1" style={{ minWidth: 0 }}>
                      <span
                        className="flex-shrink-0 rounded-circle me-2"
                        style={{ 
                          width: 8, 
                          height: 8, 
                          backgroundColor: config.color 
                        }}
                      />
                      <div className="flex-grow-1" style={{ minWidth: 0 }}>
                        <div className="d-flex align-items-center gap-2">
                          <span className="fs-13 fw-medium text-truncate">{patient.patientName}</span>
                          <span className="fs-11 text-muted flex-shrink-0">Rm {patient.room}</span>
                        </div>
                        <span className="fs-11 text-muted text-truncate d-block">
                          {criticalEvent?.event || patient.primaryDiagnosis}
                        </span>
                      </div>
                    </div>
                    <span
                      className="badge flex-shrink-0 ms-2"
                      style={{ 
                        backgroundColor: config.bgColor, 
                        color: config.color,
                        fontSize: '10px'
                      }}
                    >
                      {config.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* AI Summary Preview */}
          {currentReport.summaryNarrative && (
            <div className="ai-summary-preview mt-3 p-2 rounded-2" style={{ backgroundColor: '#F3E5F5' }}>
              <div className="d-flex align-items-start">
                <i className="ti ti-sparkles text-purple me-2 mt-1 flex-shrink-0" style={{ color: '#7B1FA2' }} />
                <p className="mb-0 fs-12 text-dark" style={{ 
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {currentReport.summaryNarrative}
                </p>
              </div>
            </div>
          )}

          {/* Vitals Trends Preview */}
          <div className="vitals-trends-preview mt-3">
            <div className="d-flex align-items-center gap-3 flex-wrap">
              {currentReport.patients.slice(0, 4).map((patient, idx) => {
                const hrTrend = patient.vitalsTrend.find(v => v.metric === 'HR');
                const trendIcon = hrTrend?.trend === 'improving' ? 'ti-trending-up' :
                                  hrTrend?.trend === 'declining' ? 'ti-trending-down' : 'ti-minus';
                const trendColor = hrTrend?.trend === 'improving' ? '#4CAF50' :
                                   hrTrend?.trend === 'declining' ? '#F44336' : '#9E9E9E';

                return (
                  <div key={idx} className="d-flex align-items-center">
                    <span className="fs-11 text-muted me-1">{patient.patientName.split(' ')[1]?.charAt(0) || patient.patientName.charAt(0)}</span>
                    <i className={`ti ${trendIcon} fs-12`} style={{ color: trendColor }} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Open Shift Handoff Dashboard Button */}
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary mt-3 d-flex align-items-center justify-content-center"
              onClick={handleViewFullReport}
              style={{ maxWidth: '280px' }}
            >
              <i className="ti ti-report-medical me-2" />
              Open Shift Handoff Dashboard
            </button>
          </div>

        </div>
      )}

      {!isWidgetExpanded && (
        <div className="card-body py-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <span className="d-flex align-items-center">
                <span 
                  className="rounded-circle me-1"
                  style={{ width: 8, height: 8, backgroundColor: PRIORITY_CONFIG.critical.color }}
                />
                <span className="fs-12 fw-medium">{priorityCounts.critical || 0}</span>
              </span>
              <span className="d-flex align-items-center">
                <span 
                  className="rounded-circle me-1"
                  style={{ width: 8, height: 8, backgroundColor: PRIORITY_CONFIG.high.color }}
                />
                <span className="fs-12 fw-medium">{priorityCounts.high || 0}</span>
              </span>
              <span className="fs-12 text-muted">{currentReport?.totalPatients || 0} patients</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShiftHandoffWidget;
