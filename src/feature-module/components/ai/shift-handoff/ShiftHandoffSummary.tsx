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
  critical: { color: '#F44336', bgColor: '#FFEBEE', label: 'Critical' },
  high: { color: '#FF9800', bgColor: '#FFF3E0', label: 'High' },
  moderate: { color: '#FFC107', bgColor: '#FFFDE7', label: 'Moderate' },
  stable: { color: '#4CAF50', bgColor: '#E8F5E9', label: 'Stable' }
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
    day: 'Day Shift (7AM - 3PM)',
    evening: 'Evening Shift (3PM - 11PM)',
    night: 'Night Shift (11PM - 7AM)'
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

  return (
    <div className="shift-handoff-summary">
      {/* Header Section */}
      <div className="handoff-header">
        <div className="header-top">
          <div className="header-title">
            <div className="title-text">
              <h2>Shift Handoff</h2>
              <span className="shift-info">
                {getShiftLabel(currentReport.shiftType)} • {currentReport.unitName}
              </span>
            </div>
          </div>
          <div className="header-actions">
            <button 
              className={`btn btn-audio ${audioPlaying ? 'playing' : ''}`}
              onClick={() => dispatch(toggleAudio())}
            >
              {audioPlaying ? <><i className="ti ti-player-pause"></i> Pause Audio</> : <><i className="ti ti-volume"></i> Play Summary</>}
            </button>
            <button 
              className={`btn btn-acknowledge ${isAcknowledged ? 'acknowledged' : ''}`}
              onClick={handleAcknowledge}
              disabled={isAcknowledged}
            >
              {isAcknowledged ? <><i className="ti ti-check"></i> Acknowledged</> : 'Acknowledge Handoff'}
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
          <div className="transfer-arrow">→</div>
          <div className="nurse-card incoming">
            <i className="ti ti-user nurse-icon"></i>
            <span className="nurse-label">Incoming:</span>
            <span className="nurse-name">{currentReport.incomingNurse.name}</span>
          </div>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="handoff-stats">
        <div className="stat-card total">
          <div className="stat-value">{currentReport.totalPatients}</div>
          <div className="stat-label">Total Patients</div>
        </div>
        <div className="stat-card critical">
          <div className="stat-value">{currentReport.criticalPatients}</div>
          <div className="stat-label">Critical</div>
        </div>
        <div className="stat-card high">
          <div className="stat-value">
            {currentReport.patients.filter(p => p.priorityLevel === 'high').length}
          </div>
          <div className="stat-label">High Priority</div>
        </div>
        <div className="stat-card stable">
          <div className="stat-value">
            {currentReport.patients.filter(p => p.priorityLevel === 'stable').length}
          </div>
          <div className="stat-label">Stable</div>
        </div>
      </div>

      {/* AI Summary Narrative */}
      <div className="ai-summary-card">
        <div className="summary-header">
          <span className="ai-badge"><i className="ti ti-robot"></i> AI Summary</span>
          <span className="generated-time">
            Generated at {new Date(currentReport.generatedAt).toLocaleTimeString()}
          </span>
        </div>
        <p className="summary-text">{currentReport.summaryNarrative}</p>
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
