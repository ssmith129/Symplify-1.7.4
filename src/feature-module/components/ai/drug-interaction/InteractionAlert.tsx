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

const SEVERITY_CONFIG: Record<SeverityLevel, { icon: string; label: string; ariaLabel: string }> = {
  minor: { icon: 'ti-info-circle', label: 'Minor', ariaLabel: 'Minor interaction' },
  moderate: { icon: 'ti-alert-circle', label: 'Moderate', ariaLabel: 'Moderate interaction - use caution' },
  major: { icon: 'ti-alert-triangle', label: 'Major', ariaLabel: 'Major interaction - clinical review required' },
  contraindicated: { icon: 'ti-urgent', label: 'Contraindicated', ariaLabel: 'Contraindicated - do not combine' },
};

const InteractionAlert: React.FC<InteractionAlertProps> = ({
  drug1,
  drug2,
  severity,
  description,
  recommendation,
  onDismiss,
  onViewDetails,
}) => {
  const config = SEVERITY_CONFIG[severity];

  return (
    <div
      className={`interaction-alert severity-${severity}`}
      role="alert"
      aria-label={`${config.ariaLabel}: ${drug1} and ${drug2}`}
    >
      <div className="alert-header">
        <span className="alert-icon" aria-hidden="true">
          <i className={`ti ${config.icon}`} />
        </span>
        <h4>Drug Interaction Detected</h4>
        <span
          className={`severity-badge severity-${severity} size-small ms-auto`}
          role="status"
        >
          <i className={`ti ${config.icon} me-1`} aria-hidden="true" />
          {config.label}
        </span>
      </div>
      <div className="alert-content">
        <p className="drug-pair">
          <strong>{drug1}</strong> + <strong>{drug2}</strong>
        </p>
        {description && <p className="description">{description}</p>}
        {recommendation && (
          <p className="recommendation">
            <strong>Recommendation:</strong> {recommendation}
          </p>
        )}
      </div>
      <div className="alert-actions">
        <button
          onClick={onViewDetails}
          className="btn btn-sm btn-outline-primary"
          aria-label={`View details for ${drug1} and ${drug2} interaction`}
        >
          <i className="ti ti-eye me-1" aria-hidden="true" />
          View Details
        </button>
        <button
          onClick={onDismiss}
          className="btn btn-sm btn-outline-secondary"
          aria-label={`Dismiss ${config.label} interaction alert for ${drug1} and ${drug2}`}
        >
          <i className="ti ti-x" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};

export default InteractionAlert;
