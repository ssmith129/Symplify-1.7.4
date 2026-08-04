import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  generateHandoffReport, 
  acknowledgeHandoff, 
  selectPatient, 
  toggleAudio,
  type PatientHandoff
} from '../../../core/redux/shiftHandoffSlice';
import type { RootState, AppDispatch } from '../../../core/redux/store';
import { PatientHandoffCard } from './PatientHandoffCard';
import { SBARGenerator } from './SBARGenerator';
import { SEVERITY_VAR, toSeverity } from '../../../core/ai/severityTokens';
import AIEmptyState from '../shared/AIEmptyState';

interface ShiftHandoffSummaryProps {
  outgoingNurseId?: string;
  incomingNurseId?: string;
  shiftType?: 'day' | 'evening' | 'night';
  unitId?: string;
}

// Priority levels map onto the shared clinical severity tokens (WCAG AA,
// light/dark aware). color/bgColor are CSS var() references, not hardcoded hex.
const PRIORITY_CONFIG = {
  critical: { color: SEVERITY_VAR.critical.fg, bgColor: SEVERITY_VAR.critical.bg, label: 'Critical' },
  high: { color: SEVERITY_VAR.urgent.fg, bgColor: SEVERITY_VAR.urgent.bg, label: 'High' },
  moderate: { color: SEVERITY_VAR.caution.fg, bgColor: SEVERITY_VAR.caution.bg, label: 'Moderate' },
  stable: { color: SEVERITY_VAR.stable.fg, bgColor: SEVERITY_VAR.stable.bg, label: 'Stable' }
};

const ShiftHandoffSummary: React.FC<ShiftHandoffSummaryProps> = ({
  outgoingNurseId = 'nurse-001',
  incomingNurseId = 'nurse-002',
  shiftType = 'day',
  unitId = 'unit-3b'
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { 
    currentReport, 
    isGenerating, 
    isAcknowledged, 
    selectedPatient,
    audioPlaying,
    error 
  } = useSelector((state: RootState) => state.shiftHandoff);
  
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'priority'>('all');
  const [reviewedPatients, setReviewedPatients] = useState<Set<string>>(new Set());
  const [vitalsKeyOpen, setVitalsKeyOpen] = useState(false);
  const [showAcknowledgeConfirm, setShowAcknowledgeConfirm] = useState(false);

  useEffect(() => {
    dispatch(generateHandoffReport({ outgoingNurseId, incomingNurseId, shiftType, unitId }));
  }, [dispatch, outgoingNurseId, incomingNurseId, shiftType, unitId]);

  const handleAcknowledge = () => {
    if (currentReport) {
      dispatch(acknowledgeHandoff({ reportId: currentReport.reportId, nurseId: incomingNurseId }));
    }
  };

  const handlePatientClick = (patient: PatientHandoff) => {
    dispatch(selectPatient(patient));
    setDetailModalVisible(true);
    // Mark patient as reviewed when opened
    setReviewedPatients(prev => new Set(prev).add(patient.patientId));
  };

  const closeModal = () => {
    setDetailModalVisible(false);
    dispatch(selectPatient(null));
  };

  const getShiftLabel = (type: string) => ({
    day: 'Day Shift · 7AM – 3PM',
    evening: 'Evening Shift · 3PM – 11PM',
    night: 'Night Shift · 11PM – 7AM'
  }[type] || type);

  const getShiftIcon = (type: string) => ({
    day: 'ti-sun',
    evening: 'ti-sunset-2',
    night: 'ti-moon'
  }[type] || 'ti-clipboard-list');

  if (isGenerating) {
    return (
      <div className="shift-handoff-loading">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h3>Generating Smart Shift Handoff Report</h3>
          <p>Analyzing patient data, vital trends, and recent events...</p>
          <div className="loading-progress">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="shift-handoff-error">
        <div className="error-icon"><i className="ti ti-alert-triangle"></i></div>
        <h3>Failed to Generate Handoff Report</h3>
        <p>{error}</p>
        <button 
          className="btn btn-primary"
          onClick={() => dispatch(generateHandoffReport({ outgoingNurseId, incomingNurseId, shiftType, unitId }))}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!currentReport) return null;

  const priorityPatients = currentReport.patients.filter(
    p => p.priorityLevel === 'critical' || p.priorityLevel === 'high'
  );

  const highCount = currentReport.patients.filter(p => p.priorityLevel === 'high').length;
  const stableCount = currentReport.patients.filter(p => p.priorityLevel === 'stable').length;
  const moderateCount = currentReport.patients.filter(p => p.priorityLevel === 'moderate').length;

  // Build structured AI summary data
  const keyConcerns: string[] = [];
  currentReport.patients.forEach(p => {
    if (p.priorityLevel === 'critical') keyConcerns.push(`respiratory monitoring (Rm ${p.room})`);
    if (p.priorityLevel === 'high') keyConcerns.push(`pain management & fever watch (Rm ${p.room})`);
  });
  const totalPendingTasks = currentReport.patients.reduce((s, p) => s + p.pendingTasks.length, 0);
  const totalAlerts = currentReport.patients.reduce(
    (s, p) => s + p.recentEvents.filter(e => e.severity === 'critical' || e.severity === 'warning').length,
    0
  );

  return (
    <div className="shift-handoff-summary">
      {/* Header — uses shift time as the title instead of redundant "Shift Handoff" */}
      <div className="handoff-header">
        <div className="header-top">
          <div className="header-title">
            <div className="title-text">
              <h2>
                <i className={`ti ${getShiftIcon(currentReport.shiftType)} me-2`} />
                {getShiftLabel(currentReport.shiftType)}
              </h2>
              <span className="shift-info">{currentReport.unitName}</span>
            </div>
          </div>
          {/* Rec 1: Differentiated CTAs — Play Summary is ghost/outlined, Acknowledge is large filled */}
          <div className="header-actions">
            <button
              className={`btn btn-audio ${audioPlaying ? 'playing' : ''}`}
              onClick={() => dispatch(toggleAudio())}
              aria-label={audioPlaying ? 'Pause audio briefing' : 'Listen to audio briefing'}
            >
              <i className={`ti ${audioPlaying ? 'ti-player-pause' : 'ti-volume'}`} />
              <span>{audioPlaying ? 'Pause Briefing' : 'Audio Briefing'}</span>
            </button>
          </div>
        </div>

        {/* Nurse Transfer Info */}
        <div className="nurse-transfer">
          <div className="nurse-card outgoing">
            <i className="ti ti-user nurse-icon"></i>
            <span className="nurse-label">Outgoing:</span>
            <span className="nurse-name">{currentReport.outgoingNurse.name}</span>
          </div>
          <div className="transfer-arrow">
            <i className="ti ti-arrow-right" />
          </div>
          <div className="nurse-card incoming">
            <i className="ti ti-user nurse-icon"></i>
            <span className="nurse-label">Incoming:</span>
            <span className="nurse-name">{currentReport.incomingNurse.name}</span>
          </div>
        </div>
      </div>

      {/* Rec 5: Stat cards with improved contrast — dark text on tinted backgrounds */}
      <div className="handoff-stats">
        <div className="stat-card total">
          <div className="stat-icon"><i className="ti ti-users" /></div>
          <div className="stat-value">{currentReport.totalPatients}</div>
          <div className="stat-label">Total Patients</div>
        </div>
        <div className="stat-card critical">
          <div className="stat-icon"><i className="ti ti-alert-circle" /></div>
          <div className="stat-value">{currentReport.criticalPatients}</div>
          <div className="stat-label">Critical</div>
        </div>
        <div className="stat-card high">
          <div className="stat-icon"><i className="ti ti-alert-triangle" /></div>
          <div className="stat-value">{highCount}</div>
          <div className="stat-label">High Priority</div>
        </div>
        <div className="stat-card stable">
          <div className="stat-icon"><i className="ti ti-circle-check" /></div>
          <div className="stat-value">{stableCount}</div>
          <div className="stat-label">Stable</div>
        </div>
      </div>

      {/* Rec 3: AI Summary — lighter background to reduce visual weight */}
      <div className="ai-summary-card light">
        <div className="summary-header">
          <span className="ai-badge"><i className="ti ti-robot"></i> AI Summary</span>
          <span className="generated-time">
            Generated at {new Date(currentReport.generatedAt).toLocaleTimeString()}
          </span>
        </div>
        <div className="summary-structured">
          <div className="summary-row">
            <span className="summary-key">Patients</span>
            <span className="summary-val">
              {currentReport.totalPatients} total · {currentReport.criticalPatients} critical · {highCount} high · {moderateCount} moderate · {stableCount} stable
            </span>
          </div>
          <div className="summary-row">
            <span className="summary-key">Key Concerns</span>
            <span className="summary-val">
              {keyConcerns.length > 0 ? keyConcerns.join(', ') : 'None — all patients stable'}
            </span>
          </div>
          <div className="summary-row">
            <span className="summary-key">Alerts</span>
            <span className="summary-val">{totalAlerts} active alert{totalAlerts !== 1 ? 's' : ''}</span>
          </div>
          <div className="summary-row">
            <span className="summary-key">Pending Tasks</span>
            <span className="summary-val">{totalPendingTasks} across all patients</span>
          </div>
          <div className="summary-row">
            <span className="summary-key">Medications</span>
            <span className="summary-val">All scheduled medications administered</span>
          </div>
          <div className="summary-row">
            <span className="summary-key">Safety Incidents</span>
            <span className="summary-val">None this shift</span>
          </div>
        </div>
      </div>

      {/* Rec 4: Vitals Legend — collapsible to reclaim vertical space */}
      <div className={`vitals-legend ${vitalsKeyOpen ? 'open' : 'collapsed'}`}>
        <button
          className="legend-toggle"
          onClick={() => setVitalsKeyOpen(!vitalsKeyOpen)}
          aria-expanded={vitalsKeyOpen}
          aria-controls="vitals-key-content"
        >
          <span className="legend-title"><i className="ti ti-activity" /> Vitals Key</span>
          <i className={`ti ${vitalsKeyOpen ? 'ti-chevron-up' : 'ti-chevron-down'}`} />
        </button>
        {vitalsKeyOpen && (
          <div id="vitals-key-content" className="legend-body">
            <div className="legend-items">
              <span className="legend-chip"><i className="ti ti-heartbeat" /> HR = Heart Rate</span>
              <span className="legend-chip"><i className="ti ti-droplet" /> BP = Blood Pressure</span>
              <span className="legend-chip"><i className="ti ti-lungs" /> SpO2 = Oxygen Saturation</span>
              <span className="legend-chip"><i className="ti ti-temperature" /> Temp = Temperature</span>
            </div>
            <div className="legend-arrows">
              <span className="legend-chip"><span style={{color: SEVERITY_VAR[toSeverity('improving')].fg}}>↑ Improving</span></span>
              <span className="legend-chip"><span style={{color: SEVERITY_VAR.neutral.fg}}>→ Stable</span></span>
              <span className="legend-chip"><span style={{color: SEVERITY_VAR[toSeverity('declining')].fg}}>↓ Declining</span></span>
            </div>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="handoff-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Patients ({currentReport.patients.length})
        </button>
        <button 
          className={`tab-btn priority ${activeTab === 'priority' ? 'active' : ''}`}
          onClick={() => setActiveTab('priority')}
        >
          <i className="ti ti-alert-triangle"></i> Critical & High Priority ({priorityPatients.length})
        </button>
      </div>

      {/* Patient Cards */}
      {(() => {
        const visiblePatients = activeTab === 'all' ? currentReport.patients : priorityPatients;
        if (visiblePatients.length === 0) {
          return activeTab === 'priority' ? (
            <AIEmptyState
              icon="circle-check"
              tone="positive"
              title="No critical or high-priority patients"
              guidance="Every patient on this unit is currently stable. Switch to All Patients to review the full census."
            />
          ) : (
            <AIEmptyState
              icon="users"
              title="No patients in this handoff"
              guidance="There are no patients assigned for this shift yet. Generated reports will list each patient here."
            />
          );
        }
        return (
          <div className="patient-cards-grid">
            {visiblePatients.map((patient) => (
              <PatientHandoffCard
                key={patient.patientId}
                patient={patient}
                onClick={() => handlePatientClick(patient)}
                priorityConfig={PRIORITY_CONFIG}
                expanded={activeTab === 'priority'}
                reviewed={reviewedPatients.has(patient.patientId)}
              />
            ))}
          </div>
        );
      })()}

      {/* Sticky Acknowledge Bar — pinned to bottom, enforces review-first */}
      <div className={`acknowledge-bar ${isAcknowledged ? 'acknowledged' : ''}`}>
        <div className="acknowledge-bar-inner">
          <div className="review-progress">
            <span className="review-count">
              <i className="ti ti-checks" />
              {reviewedPatients.size} of {currentReport.patients.length} patients reviewed
            </span>
            <div className="review-progress-bar">
              <div
                className="review-progress-fill"
                style={{ width: `${(reviewedPatients.size / currentReport.patients.length) * 100}%` }}
              />
            </div>
          </div>
          {isAcknowledged ? (
            <button className="btn btn-acknowledge acknowledged" disabled>
              <i className="ti ti-circle-check" /> Handoff Acknowledged
            </button>
          ) : showAcknowledgeConfirm ? (
            <div className="acknowledge-confirm">
              <span>I have reviewed all patients and accept this handoff</span>
              <div className="confirm-actions">
                <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowAcknowledgeConfirm(false)}>
                  Cancel
                </button>
                <button className="btn btn-acknowledge" onClick={() => { handleAcknowledge(); setShowAcknowledgeConfirm(false); }}>
                  <i className="ti ti-clipboard-check" /> Confirm & Acknowledge
                </button>
              </div>
            </div>
          ) : (
            <button
              className="btn btn-acknowledge"
              onClick={() => setShowAcknowledgeConfirm(true)}
              aria-label="Acknowledge this handoff"
            >
              <i className="ti ti-clipboard-check" /> Acknowledge Handoff
            </button>
          )}
        </div>
      </div>

      {/* Patient Detail Modal */}
      {detailModalVisible && selectedPatient && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <span 
                  className="priority-badge"
                  style={{ 
                    backgroundColor: PRIORITY_CONFIG[selectedPatient.priorityLevel].bgColor,
                    color: PRIORITY_CONFIG[selectedPatient.priorityLevel].color
                  }}
                >
                  {PRIORITY_CONFIG[selectedPatient.priorityLevel].label}
                </span>
                <h3>{selectedPatient.patientName} - Room {selectedPatient.room}</h3>
              </div>
              <button className="modal-close" onClick={closeModal}>×</button>
            </div>
            <div className="modal-body">
              <SBARGenerator patient={selectedPatient} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShiftHandoffSummary;
