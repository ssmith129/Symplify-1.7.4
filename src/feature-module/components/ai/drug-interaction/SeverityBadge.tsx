import React from 'react';

type SeverityLevel = 'minor' | 'moderate' | 'major' | 'contraindicated';

interface SeverityBadgeProps {
  severity: SeverityLevel;
  showLabel?: boolean;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Feature 10: Severity Badge
 * Visual indicator for drug interaction severity levels
 */
const SeverityBadge: React.FC<SeverityBadgeProps> = ({
  severity,
  showLabel = true,
  size = 'medium',
}) => {
  const getSeverityConfig = (level: SeverityLevel) => {
    switch (level) {
      case 'minor':
        return { label: 'Minor', className: 'severity-minor' };
      case 'moderate':
        return { label: 'Moderate', className: 'severity-moderate' };
      case 'major':
        return { label: 'Major', className: 'severity-major' };
      case 'contraindicated':
        return { label: 'Contraindicated', className: 'severity-contraindicated' };
      default:
        return { label: 'Unknown', className: 'severity-unknown' };
    }
  };

  const config = getSeverityConfig(severity);

  return (
    <span
      className={`severity-badge ${config.className} size-${size}`}
    >
      {showLabel && config.label}
    </span>
  );
};

export default SeverityBadge;
