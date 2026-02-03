import React from 'react';

type SeverityLevel = 'minor' | 'moderate' | 'major' | 'contraindicated';

interface InteractionAlertProps {
  drug1: string;
  drug2: string;
  severity: SeverityLevel;
  description?: string;
  recommendation?: string;
  onDismiss?: () => void;
  onViewDetails?: () => void;
}

/**
 * Feature 10: Drug Interaction Alert
 * Displays an alert for detected drug interactions
 */
const InteractionAlert: React.FC<InteractionAlertProps> = ({
  drug1,
  drug2,
  severity,
  description,
  recommendation,
  onDismiss,
  onViewDetails,
}) => {
  // TODO: Implement interaction alert logic
  return (
    <div className={`interaction-alert severity-${severity}`}>
      <div className="alert-header">
        <span className="alert-icon">⚠️</span>
        <h4>Drug Interaction Detected</h4>
      </div>
      <div className="alert-content">
        <p className="drug-pair">
          <strong>{drug1}</strong> + <strong>{drug2}</strong>
        </p>
        <p className="severity-label">Severity: {severity}</p>
        {description && <p className="description">{description}</p>}
        {recommendation && (
          <p className="recommendation">
            <strong>Recommendation:</strong> {recommendation}
          </p>
        )}
      </div>
      <div className="alert-actions">
        <button onClick={onViewDetails}>View Details</button>
        <button onClick={onDismiss}>Dismiss</button>
      </div>
    </div>
  );
};

export default InteractionAlert;
