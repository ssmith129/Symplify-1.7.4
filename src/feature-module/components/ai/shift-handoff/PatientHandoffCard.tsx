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

export const PatientHandoffCard: React.FC<PatientHandoffCardProps> = ({
  patient,
  onClick,
  priorityConfig,
  expanded = false
}) => {
  const config = priorityConfig[patient.priorityLevel];
  
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return { icon: '↑', color: '#4CAF50', label: 'Improving' };
      case 'declining': return { icon: '↓', color: '#F44336', label: 'Declining' };
      default: return { icon: '→', color: '#9E9E9E', label: 'Stable' };
    }
  };

  const criticalEvents = patient.recentEvents.filter(e => e.severity === 'critical');
  const warningEvents = patient.recentEvents.filter(e => e.severity === 'warning');

  return (
    <div 
      className={`patient-handoff-card priority-${patient.priorityLevel}`}
      onClick={onClick}
      style={{ borderLeftColor: config.color }}
    >
      {/* Header */}
      <div className="card-header">
        <div className="patient-info">
          <h4 className="patient-name">{patient.patientName}</h4>
          <span className="patient-details">
            Room {patient.room} • {patient.age} y/o
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

      {/* Quick SBAR Preview */}
      <div className="sbar-preview">
        <span className="sbar-label">S:</span>
        <span className="sbar-text">
          {patient.sbar.situation.length > 100 
            ? `${patient.sbar.situation.slice(0, 100)}...` 
            : patient.sbar.situation}
        </span>
      </div>

      {/* Vitals Trend Indicators */}
      <div className="vitals-trends">
        <div className="trends-label">Vitals Trends:</div>
        <div className="trends-badges">
          {patient.vitalsTrend.slice(0, 3).map((vital, idx) => {
            const trendInfo = getTrendIcon(vital.trend);
            return (
              <span 
                key={idx} 
                className="trend-badge"
                title={`${vital.metric}: ${trendInfo.label}`}
                style={{ color: trendInfo.color }}
              >
                {vital.metric.slice(0, 2)} {trendInfo.icon}
              </span>
            );
          })}
        </div>
      </div>

      {/* Pending Tasks & Medications Count */}
      <div className="quick-stats">
        <div className="stat-item">
          <i className="ti ti-clipboard-list stat-icon"></i>
          <span>{patient.pendingTasks.length} pending task(s)</span>
        </div>
        <div className="stat-item">
          <i className="ti ti-pill stat-icon"></i>
          <span>{patient.medications.length} medications</span>
        </div>
      </div>

      {/* Critical/Warning Events Alert */}
      {criticalEvents.length > 0 && (
        <div className="alert-banner critical">
          <i className="ti ti-alert-octagon alert-icon"></i>
          <span className="alert-text">{criticalEvents[0].event}</span>
        </div>
      )}
      {criticalEvents.length === 0 && warningEvents.length > 0 && (
        <div className="alert-banner warning">
          <i className="ti ti-alert-triangle alert-icon"></i>
          <span className="alert-text">{warningEvents[0].event}</span>
        </div>
      )}

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

      {/* Click indicator */}
      <div className="click-indicator">
        <span>View Details →</span>
      </div>
    </div>
  );
};

export default PatientHandoffCard;
