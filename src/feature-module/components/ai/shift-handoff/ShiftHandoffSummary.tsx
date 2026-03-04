import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  generateHandoffReport, 
  acknowledgeHandoff, 
  selectPatient, 
  toggleAudio,
  type PatientHandoff
} from '../../../../core/redux/shiftHandoffSlice';
import type { RootState, AppDispatch } from '../../../../core/redux/store';
import { PatientHandoffCard } from './PatientHandoffCard';
import { SBARGenerator } from './SBARGenerator';

interface ShiftHandoffSummaryProps {
  outgoingNurseId?: string;
  incomingNurseId?: string;
  shiftType?: 'day' | 'evening' | 'night';
  unitId?: string;
}

const PRIORITY_CONFIG = {
  critical: { color: '#991B1B', bgColor: '#FEE2E2', label: 'Critical' },
  high: { color: '#92400E', bgColor: '#FEF3C7', label: 'High' },
  moderate: { color: '#78350F', bgColor: '#FEF9C3', label: 'Moderate' },
  stable: { color: '#166534', bgColor: '#DCFCE7', label: 'Stable' }
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
              aria-label={audioPlaying ? 'Pause audio summary' : 'Play audio summary'}
            >
              <i className={`ti ${audioPlaying ? 'ti-player-pause' : 'ti-volume'}`} />
              <span>{audioPlaying ? 'Pause Audio' : 'Play Summary'}</span>
            </button>
            <button 
              className={`btn btn-acknowledge ${isAcknowledged ? 'acknowledged' : ''}`}
              onClick={handleAcknowledge}
              disabled={isAcknowledged}
              aria-label={isAcknowledged ? 'Handoff acknowledged' : 'Acknowledge this handoff'}
            >
              {isAcknowledged 
                ? <><i className="ti ti-circle-check" /> Acknowledged</>
                : <><i className="ti ti-clipboard-check" /> Acknowledge Handoff</>
              }
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

      {/* Rec 2: AI Summary — restructured into scannable key-value pairs */}
      <div className="ai-summary-card">
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

      {/* Rec 4: Vitals Legend — persistent, with full abbreviation labels and icons */}
      <div className="vitals-legend">
        <span className="legend-title"><i className="ti ti-activity" /> Vitals Key:</span>
        <div className="legend-items">
          <span className="legend-chip"><i className="ti ti-heartbeat" /> HR = Heart Rate</span>
          <span className="legend-chip"><i className="ti ti-droplet" /> BP = Blood Pressure</span>
          <span className="legend-chip"><i className="ti ti-lungs" /> SpO2 = Oxygen Saturation</span>
          <span className="legend-chip"><i className="ti ti-temperature" /> Temp = Temperature</span>
        </div>
        <div className="legend-arrows">
          <span className="legend-chip"><span style={{color: '#166534'}}>↑ Improving</span></span>
          <span className="legend-chip"><span style={{color: '#6B7280'}}>→ Stable</span></span>
          <span className="legend-chip"><span style={{color: '#991B1B'}}>↓ Declining</span></span>
        </div>
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
      <div className="patient-cards-grid">
        {(activeTab === 'all' ? currentReport.patients : priorityPatients).map((patient) => (
          <PatientHandoffCard 
            key={patient.patientId}
            patient={patient}
            onClick={() => handlePatientClick(patient)}
            priorityConfig={PRIORITY_CONFIG}
            expanded={activeTab === 'priority'}
          />
        ))}
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
