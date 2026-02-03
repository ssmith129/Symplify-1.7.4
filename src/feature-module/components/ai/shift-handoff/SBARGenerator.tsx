import React, { useState } from 'react';
import type { PatientHandoff } from '../../../../core/redux/shiftHandoffSlice';

interface SBARGeneratorProps {
  patient: PatientHandoff;
}

export const SBARGenerator: React.FC<SBARGeneratorProps> = ({ patient }) => {
  const [activeTab, setActiveTab] = useState<'sbar' | 'vitals' | 'meds' | 'tasks' | 'events'>('sbar');

  const sbarSections = [
    { 
      key: 'situation', 
      title: 'Situation', 
      icon: '🚨',
      content: patient.sbar.situation,
      color: '#F44336'
    },
    { 
      key: 'background', 
      title: 'Background', 
      icon: '📋',
      content: patient.sbar.background,
      color: '#2196F3'
    },
    { 
      key: 'assessment', 
      title: 'Assessment', 
      icon: '🔍',
      content: patient.sbar.assessment,
      color: '#FF9800'
    },
    { 
      key: 'recommendation', 
      title: 'Recommendation', 
      icon: '💡',
      content: patient.sbar.recommendation,
      color: '#4CAF50'
    }
  ];

  const getTrendInfo = (trend: string) => {
    switch (trend) {
      case 'improving': return { label: 'Improving', color: '#4CAF50', icon: '↑' };
      case 'declining': return { label: 'Declining', color: '#F44336', icon: '↓' };
      default: return { label: 'Stable', color: '#9E9E9E', icon: '→' };
    }
  };

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="sbar-generator">
      {/* Patient Info Header */}
      <div className="patient-detail-header">
        <div className="patient-meta">
          <span className="meta-item">
            <strong>Age:</strong> {patient.age} years old
          </span>
          <span className="meta-item">
            <strong>Admitted:</strong> {new Date(patient.admissionDate).toLocaleDateString()}
          </span>
          <span className="meta-item">
            <strong>Diagnosis:</strong> {patient.primaryDiagnosis}
          </span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sbar-tabs">
        <button 
          className={`sbar-tab ${activeTab === 'sbar' ? 'active' : ''}`}
          onClick={() => setActiveTab('sbar')}
        >
          📝 SBAR Report
        </button>
        <button 
          className={`sbar-tab ${activeTab === 'vitals' ? 'active' : ''}`}
          onClick={() => setActiveTab('vitals')}
        >
          💓 Vitals Trend
        </button>
        <button 
          className={`sbar-tab ${activeTab === 'meds' ? 'active' : ''}`}
          onClick={() => setActiveTab('meds')}
        >
          💊 Medications
        </button>
        <button 
          className={`sbar-tab ${activeTab === 'tasks' ? 'active' : ''}`}
          onClick={() => setActiveTab('tasks')}
        >
          ✓ Pending Tasks
        </button>
        <button 
          className={`sbar-tab ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          📅 Events
        </button>
      </div>

      {/* Tab Content */}
      <div className="sbar-tab-content">
        {/* SBAR Report Tab */}
        {activeTab === 'sbar' && (
          <div className="sbar-sections">
            {sbarSections.map((section) => (
              <div 
                key={section.key} 
                className="sbar-section"
                style={{ borderLeftColor: section.color }}
              >
                <div className="section-header">
                  <span className="section-icon">{section.icon}</span>
                  <h4 className="section-title" style={{ color: section.color }}>
                    {section.title}
                  </h4>
                </div>
                <p className="section-content">{section.content}</p>
              </div>
            ))}
          </div>
        )}

        {/* Vitals Trend Tab */}
        {activeTab === 'vitals' && (
          <div className="vitals-content">
            <h4 className="content-title">12-Hour Vitals Trend</h4>
            <div className="vitals-grid">
              {patient.vitalsTrend.map((vital, idx) => {
                const trendInfo = getTrendInfo(vital.trend);
                const latestValue = vital.values[vital.values.length - 1];
                const previousValue = vital.values[vital.values.length - 2] || latestValue;
                const change = latestValue - previousValue;
                
                return (
                  <div key={idx} className="vital-card">
                    <div className="vital-header">
                      <span className="vital-name">{vital.metric}</span>
                      <span 
                        className="vital-trend"
                        style={{ color: trendInfo.color }}
                      >
                        {trendInfo.icon} {trendInfo.label}
                      </span>
                    </div>
                    <div className="vital-value">
                      {typeof latestValue === 'number' 
                        ? latestValue.toFixed(vital.metric === 'Temperature' ? 1 : 0)
                        : latestValue}
                      {vital.metric === 'Temperature' && '°F'}
                      {vital.metric === 'SpO2' && '%'}
                      {vital.metric === 'Heart Rate' && ' bpm'}
                      {vital.metric === 'Blood Pressure' && ' mmHg'}
                    </div>
                    <div className="vital-change" style={{ color: change >= 0 ? '#4CAF50' : '#F44336' }}>
                      {change >= 0 ? '+' : ''}{change.toFixed(vital.metric === 'Temperature' ? 1 : 0)} from last reading
                    </div>
                    <div className="vital-history">
                      <span className="history-label">Last 6 readings:</span>
                      <div className="history-values">
                        {vital.values.map((val, i) => (
                          <span key={i} className="history-value">
                            {typeof val === 'number' ? val.toFixed(vital.metric === 'Temperature' ? 1 : 0) : val}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Medications Tab */}
        {activeTab === 'meds' && (
          <div className="medications-content">
            <h4 className="content-title">Current Medications</h4>
            <div className="medications-list">
              {patient.medications.map((med, idx) => (
                <div key={idx} className="medication-item">
                  <div className="med-icon">💊</div>
                  <div className="med-details">
                    <div className="med-name">{med.name}</div>
                    <div className="med-info">
                      <span className="med-dose">Dose: {med.dose}</span>
                      <span className="med-due">Next Due: {med.nextDue}</span>
                    </div>
                    {med.notes && (
                      <div className="med-notes">
                        <span className="notes-icon">⚠️</span>
                        {med.notes}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pending Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="tasks-content">
            <h4 className="content-title">Pending Tasks</h4>
            <div className="tasks-list">
              {patient.pendingTasks.map((task, idx) => (
                <div key={idx} className="task-item">
                  <span className="task-checkbox">☐</span>
                  <span className="task-text">{task}</span>
                </div>
              ))}
            </div>
            {patient.pendingTasks.length === 0 && (
              <div className="no-tasks">
                <span className="check-icon">✓</span>
                <span>All tasks completed for this patient</span>
              </div>
            )}
          </div>
        )}

        {/* Events Timeline Tab */}
        {activeTab === 'events' && (
          <div className="events-content">
            <h4 className="content-title">Recent Events</h4>
            <div className="events-timeline">
              {patient.recentEvents.map((event, idx) => (
                <div 
                  key={idx} 
                  className={`event-item severity-${event.severity}`}
                >
                  <div className="event-time">{event.time}</div>
                  <div className="event-indicator">
                    <span className={`indicator-dot ${event.severity}`}></span>
                    {idx < patient.recentEvents.length - 1 && (
                      <span className="indicator-line"></span>
                    )}
                  </div>
                  <div className="event-content">
                    <span className="event-text">{event.event}</span>
                    <span className={`event-severity-badge ${event.severity}`}>
                      {event.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* AI Confidence Indicator */}
      <div className="ai-confidence">
        <span className="confidence-label">🤖 AI Confidence:</span>
        <div className="confidence-bar">
          <div className="confidence-fill" style={{ width: '92%' }}></div>
        </div>
        <span className="confidence-value">92%</span>
      </div>
    </div>
  );
};

export default SBARGenerator;
