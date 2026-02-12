import React, { useState, useCallback } from 'react';
import InteractionAlert from './InteractionAlert';

interface Medication {
  id: string;
  name: string;
  dosage?: string;
  frequency?: string;
}

type SeverityLevel = 'minor' | 'moderate' | 'major' | 'contraindicated';

interface DrugInteraction {
  id: string;
  drug1: string;
  drug2: string;
  severity: SeverityLevel;
  description: string;
  recommendation: string;
}

interface DrugInteractionCheckerProps {
  medications?: Medication[];
  patientId?: string;
  onInteractionsFound?: (interactions: DrugInteraction[]) => void;
}

// Mock interaction database for demonstration
const MOCK_INTERACTIONS: Record<string, DrugInteraction> = {
  'warfarin+aspirin': {
    id: 'int-1',
    drug1: 'Warfarin',
    drug2: 'Aspirin',
    severity: 'major',
    description: 'Concurrent use increases the risk of bleeding. Both drugs have anticoagulant/antiplatelet effects.',
    recommendation: 'Avoid combination unless clinically necessary. Monitor INR closely if co-prescribed.',
  },
  'metformin+contrast': {
    id: 'int-2',
    drug1: 'Metformin',
    drug2: 'IV Contrast Dye',
    severity: 'contraindicated',
    description: 'Risk of lactic acidosis when metformin is used with iodinated contrast agents.',
    recommendation: 'Discontinue metformin 48 hours before and after contrast administration.',
  },
  'lisinopril+potassium': {
    id: 'int-3',
    drug1: 'Lisinopril',
    drug2: 'Potassium Supplements',
    severity: 'moderate',
    description: 'ACE inhibitors can increase potassium levels; concurrent potassium supplementation may cause hyperkalemia.',
    recommendation: 'Monitor serum potassium levels regularly.',
  },
};

const DrugInteractionChecker: React.FC<DrugInteractionCheckerProps> = ({
  medications = [],
  patientId,
  onInteractionsFound,
}) => {
  const [medList, setMedList] = useState<Medication[]>(medications);
  const [newMedName, setNewMedName] = useState('');
  const [newMedDosage, setNewMedDosage] = useState('');
  const [interactions, setInteractions] = useState<DrugInteraction[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [dismissedIds, setDismissedIds] = useState<Set<string>>(new Set());

  const handleAddMedication = useCallback(() => {
    if (!newMedName.trim()) return;
    const med: Medication = {
      id: `med-${Date.now()}`,
      name: newMedName.trim(),
      dosage: newMedDosage.trim() || undefined,
    };
    setMedList((prev) => [...prev, med]);
    setNewMedName('');
    setNewMedDosage('');
    setHasChecked(false);
  }, [newMedName, newMedDosage]);

  const handleRemoveMedication = useCallback((id: string) => {
    setMedList((prev) => prev.filter((m) => m.id !== id));
    setHasChecked(false);
  }, []);

  const handleCheckInteractions = useCallback(() => {
    setIsChecking(true);
    setDismissedIds(new Set());
    // Simulate API call
    setTimeout(() => {
      const found: DrugInteraction[] = [];
      for (let i = 0; i < medList.length; i++) {
        for (let j = i + 1; j < medList.length; j++) {
          const key1 = `${medList[i].name.toLowerCase()}+${medList[j].name.toLowerCase()}`;
          const key2 = `${medList[j].name.toLowerCase()}+${medList[i].name.toLowerCase()}`;
          const match = MOCK_INTERACTIONS[key1] || MOCK_INTERACTIONS[key2];
          if (match) {
            found.push(match);
          }
        }
      }
      // Add a demo interaction if 2+ meds and none found
      if (found.length === 0 && medList.length >= 2) {
        found.push({
          id: 'int-demo',
          drug1: medList[0].name,
          drug2: medList[1].name,
          severity: 'minor',
          description: 'No significant interactions detected in database. Always verify with clinical pharmacist.',
          recommendation: 'Continue monitoring. Report any adverse effects.',
        });
      }
      setInteractions(found);
      setIsChecking(false);
      setHasChecked(true);
      onInteractionsFound?.(found);
    }, 1200);
  }, [medList, onInteractionsFound]);

  const handleDismiss = useCallback((id: string) => {
    setDismissedIds((prev) => new Set(prev).add(id));
  }, []);

  const visibleInteractions = interactions.filter((i) => !dismissedIds.has(i.id));

  return (
    <div className="drug-interaction-checker" role="region" aria-label="Drug Interaction Checker">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h3 className="mb-0">
          <i className="ti ti-pill me-2" aria-hidden="true" />
          Drug Interaction Checker
        </h3>
        {patientId && (
          <span className="badge bg-light text-dark fs-12" style={{ fontFamily: "var(--font-family-mono, 'JetBrains Mono', monospace)" }}>
            Patient: {patientId}
          </span>
        )}
      </div>

      {/* Add Medication Form */}
      <div className="p-3 rounded-2 mb-3" style={{ backgroundColor: 'var(--light, #F5F6F8)' }}>
        <label className="fs-13 fw-medium mb-2 d-block" htmlFor="med-name-input">
          Add Medication
        </label>
        <div className="d-flex gap-2">
          <input
            id="med-name-input"
            type="text"
            className="form-control form-control-sm"
            placeholder="Medication name"
            value={newMedName}
            onChange={(e) => setNewMedName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddMedication()}
            aria-label="Medication name"
          />
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Dosage (optional)"
            value={newMedDosage}
            onChange={(e) => setNewMedDosage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddMedication()}
            aria-label="Medication dosage"
            style={{ maxWidth: 150 }}
          />
          <button
            className="btn btn-sm btn-primary d-flex align-items-center gap-1"
            onClick={handleAddMedication}
            disabled={!newMedName.trim()}
            aria-label="Add medication to list"
          >
            <i className="ti ti-plus fs-14" aria-hidden="true" />
            Add
          </button>
        </div>
      </div>

      {/* Medication List */}
      <div className="medication-list mb-3">
        <h4 className="d-flex align-items-center gap-1">
          <i className="ti ti-list-check" aria-hidden="true" />
          Current Medications ({medList.length})
        </h4>
        {medList.length === 0 ? (
          <div className="text-center py-4" style={{ color: 'var(--gray-400, #858D9C)' }}>
            <i className="ti ti-pill-off d-block mb-2" style={{ fontSize: 28, opacity: 0.5 }} aria-hidden="true" />
            <p className="mb-0 fs-13">No medications added yet</p>
            <p className="mb-0 fs-12">Add medications above to check for interactions</p>
          </div>
        ) : (
          <ul role="list" aria-label="Medication list">
            {medList.map((med) => (
              <li key={med.id} role="listitem">
                <div className="d-flex align-items-center gap-2">
                  <i className="ti ti-pill fs-14" aria-hidden="true" style={{ color: 'var(--primary, #2E37A4)' }} />
                  <span className="fw-medium">{med.name}</span>
                  {med.dosage && (
                    <span className="text-muted fs-12">({med.dosage})</span>
                  )}
                </div>
                <button
                  className="btn btn-sm btn-link text-danger p-0"
                  onClick={() => handleRemoveMedication(med.id)}
                  aria-label={`Remove ${med.name} from list`}
                >
                  <i className="ti ti-x fs-14" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Check Button */}
      <div className="checker-actions mb-3">
        <button
          className="btn-check-interactions"
          onClick={handleCheckInteractions}
          disabled={medList.length < 2 || isChecking}
          aria-label={isChecking ? 'Checking for interactions...' : 'Check for drug interactions'}
          aria-busy={isChecking}
        >
          {isChecking ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
              Checking...
            </>
          ) : (
            <>
              <i className="ti ti-search me-1" aria-hidden="true" />
              Check Interactions
            </>
          )}
        </button>
        {medList.length < 2 && medList.length > 0 && (
          <p className="fs-12 text-muted mt-2 mb-0">
            Add at least 2 medications to check for interactions
          </p>
        )}
      </div>

      {/* Interaction Results */}
      {hasChecked && (
        <div role="region" aria-live="polite" aria-label="Interaction results">
          {visibleInteractions.length === 0 && interactions.length === 0 ? (
            <div
              className="text-center p-4 rounded-2"
              style={{
                backgroundColor: 'var(--clinical-stable-bg, #F0FDF4)',
                border: '1px solid var(--clinical-stable-border, #BBF7D0)',
              }}
            >
              <i
                className="ti ti-shield-check d-block mb-2"
                style={{ fontSize: 32, color: 'var(--clinical-stable, #16A34A)' }}
                aria-hidden="true"
              />
              <p className="fw-medium mb-1" style={{ color: 'var(--clinical-stable, #16A34A)' }}>
                No Interactions Detected
              </p>
              <p className="fs-12 text-muted mb-0">
                Always verify with a clinical pharmacist for complete safety assessment
              </p>
            </div>
          ) : (
            visibleInteractions.map((interaction) => (
              <InteractionAlert
                key={interaction.id}
                drug1={interaction.drug1}
                drug2={interaction.drug2}
                severity={interaction.severity}
                description={interaction.description}
                recommendation={interaction.recommendation}
                onDismiss={() => handleDismiss(interaction.id)}
                onViewDetails={() => console.log('View details:', interaction.id)}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default DrugInteractionChecker;
