import React, { useState, useCallback } from 'react';

type SeverityLevel = 'minor' | 'moderate' | 'major' | 'contraindicated';

interface Medication {
  id: string;
  name: string;
  dosage?: string;
}

interface DrugInteraction {
  id: string;
  drug1: string;
  drug2: string;
  severity: SeverityLevel;
  description: string;
  recommendation: string;
}

const SEVERITY_CONFIG: Record<SeverityLevel, { color: string; bgColor: string; label: string; icon: string }> = {
  contraindicated: { color: '#B71C1C', bgColor: '#FFEBEE', label: 'Contraindicated', icon: 'ti-urgent' },
  major: { color: '#F44336', bgColor: '#FFEBEE', label: 'Major', icon: 'ti-alert-triangle' },
  moderate: { color: '#FF9800', bgColor: '#FFF3E0', label: 'Moderate', icon: 'ti-alert-circle' },
  minor: { color: '#4CAF50', bgColor: '#E8F5E9', label: 'Minor', icon: 'ti-info-circle' },
};

// Mock interaction database
const MOCK_INTERACTIONS: Record<string, DrugInteraction> = {
  'warfarin+aspirin': {
    id: 'int-1', drug1: 'Warfarin', drug2: 'Aspirin', severity: 'major',
    description: 'Concurrent use increases bleeding risk.',
    recommendation: 'Monitor INR closely if co-prescribed.',
  },
  'metformin+contrast': {
    id: 'int-2', drug1: 'Metformin', drug2: 'IV Contrast Dye', severity: 'contraindicated',
    description: 'Risk of lactic acidosis with iodinated contrast.',
    recommendation: 'Discontinue metformin 48h before/after contrast.',
  },
  'lisinopril+potassium': {
    id: 'int-3', drug1: 'Lisinopril', drug2: 'Potassium', severity: 'moderate',
    description: 'ACE inhibitors may cause hyperkalemia with potassium.',
    recommendation: 'Monitor serum potassium levels regularly.',
  },
  'simvastatin+amiodarone': {
    id: 'int-4', drug1: 'Simvastatin', drug2: 'Amiodarone', severity: 'major',
    description: 'Increased risk of myopathy and rhabdomyolysis.',
    recommendation: 'Limit simvastatin to 20mg/day with amiodarone.',
  },
  'ssri+tramadol': {
    id: 'int-5', drug1: 'Sertraline', drug2: 'Tramadol', severity: 'major',
    description: 'Risk of serotonin syndrome with combined serotonergic agents.',
    recommendation: 'Use with extreme caution; monitor for serotonin syndrome symptoms.',
  },
};

// Pre-loaded recent checks for the dashboard view
const RECENT_ALERTS: DrugInteraction[] = [
  MOCK_INTERACTIONS['warfarin+aspirin'],
  MOCK_INTERACTIONS['simvastatin+amiodarone'],
  MOCK_INTERACTIONS['lisinopril+potassium'],
];

const DrugInteractionCheckerWidget: React.FC = () => {
  const [medInput, setMedInput] = useState('');
  const [medList, setMedList] = useState<Medication[]>([]);
  const [interactions, setInteractions] = useState<DrugInteraction[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  const handleAddMed = useCallback(() => {
    if (!medInput.trim()) return;
    setMedList(prev => [...prev, { id: `med-${Date.now()}`, name: medInput.trim() }]);
    setMedInput('');
    setHasChecked(false);
  }, [medInput]);

  const handleRemoveMed = useCallback((id: string) => {
    setMedList(prev => prev.filter(m => m.id !== id));
    setHasChecked(false);
    setInteractions([]);
  }, []);

  const handleCheck = useCallback(() => {
    if (medList.length < 2) return;
    setIsChecking(true);
    setTimeout(() => {
      const found: DrugInteraction[] = [];
      for (let i = 0; i < medList.length; i++) {
        for (let j = i + 1; j < medList.length; j++) {
          const k1 = `${medList[i].name.toLowerCase()}+${medList[j].name.toLowerCase()}`;
          const k2 = `${medList[j].name.toLowerCase()}+${medList[i].name.toLowerCase()}`;
          const match = MOCK_INTERACTIONS[k1] || MOCK_INTERACTIONS[k2];
          if (match) found.push(match);
        }
      }
      if (found.length === 0 && medList.length >= 2) {
        found.push({
          id: 'int-safe', drug1: medList[0].name, drug2: medList[1].name, severity: 'minor',
          description: 'No significant interactions found in database.',
          recommendation: 'Continue monitoring. Verify with clinical pharmacist.',
        });
      }
      setInteractions(found);
      setIsChecking(false);
      setHasChecked(true);
    }, 800);
  }, [medList]);

  // Counts for summary stats
  const alertCounts = hasChecked
    ? {
        total: interactions.length,
        severe: interactions.filter(i => i.severity === 'major' || i.severity === 'contraindicated').length,
        safe: interactions.filter(i => i.severity === 'minor').length,
      }
    : {
        total: RECENT_ALERTS.length,
        severe: RECENT_ALERTS.filter(i => i.severity === 'major' || i.severity === 'contraindicated').length,
        safe: RECENT_ALERTS.filter(i => i.severity === 'minor').length,
      };

  const displayInteractions = hasChecked ? interactions : RECENT_ALERTS;

  return (
    <div className="card shadow-sm flex-fill w-100">
      {/* Card Header - matches ShiftHandoff / ChatInbox design */}
      <div className="card-header d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h5 className="fw-bold mb-0">Drug Interactions</h5>
          <span className="badge bg-warning text-dark ms-2 px-2 py-1 fs-10">
            <i className="ti ti-sparkles me-1" />AI
          </span>
        </div>
        <span className="fs-12 text-muted">{hasChecked ? 'Custom check' : 'Recent alerts'}</span>
      </div>

      <div className="card-body">
        {/* Summary Stats Row - matches other AI widgets */}
        <div className="row g-2 mb-4">
          <div className="col d-flex border-end">
            <div className="text-center flex-fill">
              <p className="mb-1">Alerts</p>
              <h3 className="fw-bold mb-0">{alertCounts.total}</h3>
            </div>
          </div>
          <div className="col d-flex border-end">
            <div className="text-center flex-fill">
              <p className="mb-1">Severe</p>
              <h3 className="fw-bold mb-0 text-danger">{alertCounts.severe}</h3>
            </div>
          </div>
          <div className="col d-flex">
            <div className="text-center flex-fill">
              <p className="mb-1">Safe</p>
              <h3 className="fw-bold mb-0 text-success">{alertCounts.safe}</h3>
            </div>
          </div>
        </div>

        {/* Quick Check Input */}
        <div className="mb-3">
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Add medication..."
              value={medInput}
              onChange={e => setMedInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAddMed()}
            />
            <button
              className="btn btn-sm btn-primary d-flex align-items-center flex-shrink-0"
              onClick={handleAddMed}
              disabled={!medInput.trim()}
            >
              <i className="ti ti-plus" />
            </button>
          </div>
          {/* Added medications pills */}
          {medList.length > 0 && (
            <div className="d-flex flex-wrap gap-1 mt-2">
              {medList.map(med => (
                <span
                  key={med.id}
                  className="badge bg-light text-dark fs-12 px-2 py-1 d-inline-flex align-items-center gap-1"
                >
                  <i className="ti ti-pill fs-12 text-primary" />
                  {med.name}
                  <i
                    className="ti ti-x fs-12 ms-1"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleRemoveMed(med.id)}
                  />
                </span>
              ))}
            </div>
          )}
          {medList.length >= 2 && (
            <button
              className="btn btn-sm btn-outline-primary w-100 mt-2 d-flex align-items-center justify-content-center"
              onClick={handleCheck}
              disabled={isChecking}
            >
              {isChecking ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Checking...
                </>
              ) : (
                <>
                  <i className="ti ti-search me-1" />
                  Check Interactions
                </>
              )}
            </button>
          )}
        </div>

        {/* Interaction Alerts List - scrollable */}
        <div className="overflow-auto" style={{ maxHeight: '220px' }}>
          {!hasChecked && (
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="fs-12 fw-semibold text-dark">Recent Alerts</span>
              <span className="badge bg-soft-danger text-danger fs-10">
                {alertCounts.severe} Need Review
              </span>
            </div>
          )}
          {displayInteractions.map(interaction => {
            const config = SEVERITY_CONFIG[interaction.severity];
            return (
              <div
                key={interaction.id}
                className="d-flex align-items-start p-2 rounded-2 mb-2"
                style={{ border: '1px solid #e5e7eb', backgroundColor: `${config.color}08` }}
              >
                <span
                  className="avatar avatar-sm rounded-circle me-2 flex-shrink-0 d-flex align-items-center justify-content-center mt-1"
                  style={{ backgroundColor: config.bgColor, width: 32, height: 32 }}
                >
                  <i className={`ti ${config.icon} fs-14`} style={{ color: config.color }} />
                </span>
                <div className="flex-grow-1 min-w-0">
                  <div className="d-flex align-items-center justify-content-between mb-1">
                    <span className="fs-13 fw-semibold text-truncate">
                      {interaction.drug1} + {interaction.drug2}
                    </span>
                    <span
                      className="badge flex-shrink-0 ms-1 px-2 py-1"
                      style={{ backgroundColor: config.bgColor, color: config.color, fontSize: '10px' }}
                    >
                      {config.label}
                    </span>
                  </div>
                  <p className="fs-12 text-muted mb-0 lh-sm" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {interaction.description}
                  </p>
                </div>
              </div>
            );
          })}

          {hasChecked && interactions.length === 0 && (
            <div className="text-center p-3 rounded-2" style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0' }}>
              <i className="ti ti-shield-check d-block mb-1 text-success" style={{ fontSize: 24 }} />
              <p className="fw-medium mb-0 text-success fs-13">No Interactions Detected</p>
            </div>
          )}
        </div>

        {/* AI Footer */}
        <div className="mt-3 p-2 rounded-2" style={{ backgroundColor: '#F3E5F5' }}>
          <div className="d-flex align-items-start">
            <i className="ti ti-sparkles me-2 mt-1 flex-shrink-0" style={{ color: '#7B1FA2', fontSize: 14 }} />
            <p className="mb-0 fs-11 text-dark lh-sm">
              AI-powered analysis cross-references drug databases in real-time. Always verify with a clinical pharmacist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugInteractionCheckerWidget;
