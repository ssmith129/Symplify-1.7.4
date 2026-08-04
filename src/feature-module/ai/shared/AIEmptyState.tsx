import React from 'react';

interface AIEmptyStateProps {
  /** Tabler icon class suffix, e.g. "shield-check" -> ti-shield-check */
  icon?: string;
  /** Short headline describing the empty condition */
  title: string;
  /** Actionable guidance telling the user what to do or what happens next */
  guidance?: string;
  /** Optional call-to-action button */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Visual density; "compact" trims padding for inline/widget contexts */
  size?: 'compact' | 'default';
  /** Tone of the leading icon */
  tone?: 'neutral' | 'positive';
  className?: string;
}

/**
 * Shared, accessible empty-state for AI list/feed surfaces.
 *
 * Modeled on the a11y rigor of ConfidenceIndicator: the region is announced
 * via role="status" + aria-live="polite" so assistive tech hears the empty
 * condition, decorative iconography is aria-hidden, and the guidance copy is
 * always rendered (never icon-only) so the state is self-explanatory.
 */
const AIEmptyState: React.FC<AIEmptyStateProps> = ({
  icon = 'inbox',
  title,
  guidance,
  action,
  size = 'default',
  tone = 'neutral',
  className = '',
}) => {
  const pad = size === 'compact' ? 'py-3' : 'py-5';
  const iconTone = tone === 'positive' ? 'text-success' : 'text-muted';

  return (
    <div
      className={`ai-empty-state text-center ${pad} ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      <i className={`ti ti-${icon} fs-1 d-block mb-2 opacity-75 ${iconTone}`} aria-hidden="true" />
      <p className="mb-1 fw-medium text-body">{title}</p>
      {guidance && <span className="text-muted fs-13 d-block">{guidance}</span>}
      {action && (
        <button type="button" className="btn btn-sm btn-outline-primary mt-3" onClick={action.onClick}>
          {action.label}
        </button>
      )}
    </div>
  );
};

export default AIEmptyState;
