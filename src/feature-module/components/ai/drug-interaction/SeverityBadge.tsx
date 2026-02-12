import React from 'react';

type SeverityLevel = 'minor' | 'moderate' | 'major' | 'contraindicated';

interface SeverityBadgeProps {
  severity: SeverityLevel;
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const SEVERITY_CONFIG: Record<SeverityLevel, { label: string; icon: string; className: string }> = {
  minor: { label: 'Minor', icon: 'ti-info-circle', className: 'severity-minor' },
  moderate: { label: 'Moderate', icon: 'ti-alert-circle', className: 'severity-moderate' },
  major: { label: 'Major', icon: 'ti-alert-triangle', className: 'severity-major' },
  contraindicated: { label: 'Contraindicated', icon: 'ti-urgent', className: 'severity-contraindicated' },
};

const SeverityBadge: React.FC<SeverityBadgeProps> = ({
  severity,
  showLabel = true,
  size = 'medium',
}) => {
  const config = SEVERITY_CONFIG[severity] || { label: 'Unknown', icon: 'ti-help', className: 'severity-unknown' };

  return (
    <span
      className={`severity-badge ${config.className} size-${size}`}
      role="status"
      aria-label={`Severity: ${config.label}`}
    >
      <i className={`ti ${config.icon} me-1`} aria-hidden="true" />
      {showLabel && config.label}
    </span>
  );
};

export default SeverityBadge;
