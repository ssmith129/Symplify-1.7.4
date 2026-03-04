import React from 'react';
import type { PatientHandoff } from '../../../../core/redux/shiftHandoffSlice';

interface PriorityConfig {
  color: string;
  bgColor: string;
  label: string;
}

interface PatientHandoffCardProps {
  patient: PatientHandoff;
  onClick: () => void;
  priorityConfig: Record<string, PriorityConfig>;
  expanded?: boolean;
}

/** Map metric names to recognizable short labels and icons */
const METRIC_MAP: Record<string, { abbr: string; icon: string }> = {
  'Heart Rate': { abbr: 'HR', icon: 'ti-heartbeat' },
  'Blood Pressure': { abbr: 'BP', icon: 'ti-droplet' },
  'SpO2': { abbr: 'SpO2', icon: 'ti-lungs' },
  'Temperature': { abbr: 'Temp', icon: 'ti-temperature' },
};

/** Trend direction uses clinically-aware coloring */
const getTrendInfo = (metric: string, trend: string) => {
  // Declining SpO2 is bad; improving SpO2 is good
  // Declining Heart Rate can be good or neutral; rising can be bad
  const isInversed = metric === 'SpO2'; // for SpO2, "declining" is bad, "improving" is good
  switch (trend) {
    case 'improving':
      return { icon: '↑', color: '#166534', label: 'Improving' };
    case 'declining':
      return { icon: '↓', color: '#991B1B', label: 'Declining' };
    default:
      return { icon: '→', color: '#6B7280', label: 'Stable' };
  }
};

export const PatientHandoffCard: React.FC<PatientHandoffCardProps> = ({
  patient,
  onClick,
  priorityConfig,
  expanded = false
}) => {
  const config = priorityConfig[patient.priorityLevel];

  const criticalEvents = patient.recentEvents.filter(e => e.severity === 'critical');
  const warningEvents = patient.recentEvents.filter(e => e.severity === 'warning');
  const hasAlert = criticalEvents.length > 0 || warningEvents.length > 0;

  return (
    <div 
      className={`patient-handoff-card priority-${patient.priorityLevel}`}
      onClick={onClick}
      style={{ borderLeftColor: config.color }}
      role="button"
      tabIndex={0}
      aria-label={`${patient.patientName}, Room ${patient.room}, ${config.label} priority. Click for details.`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
    >
      {/* Header — patient name is primary, badge is smaller */}
      <div className="card-header">
        <div className="patient-info">
          <h4 className="patient-name">{patient.patientName}</h4>
          <span className="patient-details">
            Room {patient.room} · {patient.age} y/o
          </span>
        </div>
        <span 
          className="priority-tag"
          style={{ 
            backgroundColor: config.bgColor, 
            color: config.color 
          }}
        >
          {config.label}
        </span>
      </div>

      {/* Primary Diagnosis */}
      <div className="diagnosis-row">
        <i className="ti ti-building-hospital diagnosis-icon"></i>
        <span className="diagnosis-text">{patient.primaryDiagnosis}</span>
      </div>

      {/* Rec: Replace ambiguous "S:" with full "Status Note" label */}
      <div className="sbar-preview">
        <span className="sbar-label">Status Note:</span>
        <span className="sbar-text">
          {patient.sbar.situation.length > 100 
            ? `${patient.sbar.situation.slice(0, 100)}...` 
            : patient.sbar.situation}
        </span>
      </div>

      {/* Rec 4: Vitals with expanded abbreviations and icons */}
      <div className="vitals-trends">
        <div className="trends-label">Vitals Trends:</div>
        <div className="trends-badges">
          {patient.vitalsTrend.slice(0, 3).map((vital, idx) => {
            const mapped = METRIC_MAP[vital.metric] || { abbr: vital.metric.slice(0, 4), icon: 'ti-activity' };
            const trendInfo = getTrendInfo(vital.metric, vital.trend);
            return (
              <span 
                key={idx} 
                className="trend-badge"
                title={`${vital.metric}: ${trendInfo.label}`}
                aria-label={`${vital.metric} ${trendInfo.label}`}
              >
                <i className={`ti ${mapped.icon}`} aria-hidden="true" style={{ fontSize: '0.7rem', marginRight: 2 }} />
                <span>{mapped.abbr}</span>
                <span style={{ color: trendInfo.color, fontWeight: 700, marginLeft: 2 }}>{trendInfo.icon}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Pending Tasks & Medications Count */}
      <div className="quick-stats">
        <div className="stat-item">
          <i className="ti ti-clipboard-list stat-icon"></i>
          <span>{patient.pendingTasks.length} pending task{patient.pendingTasks.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="stat-item">
          <i className="ti ti-pill stat-icon"></i>
          <span>{patient.medications.length} medication{patient.medications.length !== 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Rec 3: Standardized alert area — always present, fixed height */}
      <div className={`alert-area ${hasAlert ? '' : 'no-alert'}`}>
        {criticalEvents.length > 0 ? (
          <div className="alert-banner critical">
            <i className="ti ti-alert-octagon alert-icon" aria-hidden="true" />
            <span className="alert-severity-label">IMMEDIATE:</span>
            <span className="alert-text">{criticalEvents[0].event}</span>
          </div>
        ) : warningEvents.length > 0 ? (
          <div className="alert-banner warning">
            <i className="ti ti-alert-triangle alert-icon" aria-hidden="true" />
            <span className="alert-severity-label">MONITOR:</span>
            <span className="alert-text">{warningEvents[0].event}</span>
          </div>
        ) : (
          <div className="alert-banner none">
            <i className="ti ti-circle-check alert-icon" aria-hidden="true" />
            <span className="alert-text">No active alerts</span>
          </div>
        )}
      </div>

      {/* Expanded View - Recent Events Timeline */}
      {expanded && (
        <div className="expanded-content">
          <h5 className="section-title">Recent Events</h5>
          <div className="events-timeline">
            {patient.recentEvents.slice(0, 4).map((event, idx) => (
              <div 
                key={idx} 
                className={`timeline-item severity-${event.severity}`}
              >
                <span className="event-time">{event.time}</span>
                <span className="event-text">{event.event}</span>
              </div>
            ))}
          </div>

          <h5 className="section-title">Pending Tasks</h5>
          <ul className="pending-tasks-list">
            {patient.pendingTasks.map((task, idx) => (
              <li key={idx} className="task-item">
                <i className="ti ti-square task-checkbox"></i>
                <span className="task-text">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Rec: Larger click target for "View Details" */}
      <div className="click-indicator">
        <span>View Details <i className="ti ti-arrow-right" /></span>
      </div>
    </div>
  );
};

export default PatientHandoffCard;
