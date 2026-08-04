/**
 * Canonical clinical severity scale for AI surfaces.
 *
 * Single source of truth that maps the various ad-hoc severity / priority /
 * urgency / trend vocabularies used across the AI features onto the
 * `--clinical-*` CSS custom properties defined in
 * `src/style/scss/_variables.scss`. Because every value is a CSS `var(...)`
 * reference, foreground/background pairs stay WCAG AA compliant and respond
 * to light/dark mode automatically — no component should hardcode clinical hex.
 */

export type Severity =
  | 'critical'
  | 'urgent'
  | 'caution'
  | 'stable'
  | 'info'
  | 'neutral';

export interface SeverityVars {
  /** Foreground / text color */
  fg: string;
  /** Tinted background */
  bg: string;
  /** Border color */
  border: string;
}

export const SEVERITY_VAR: Record<Severity, SeverityVars> = {
  critical: {
    fg: 'var(--clinical-critical)',
    bg: 'var(--clinical-critical-bg)',
    border: 'var(--clinical-critical-border)',
  },
  urgent: {
    fg: 'var(--clinical-urgent)',
    bg: 'var(--clinical-urgent-bg)',
    border: 'var(--clinical-urgent-border)',
  },
  caution: {
    fg: 'var(--clinical-caution)',
    bg: 'var(--clinical-caution-bg)',
    border: 'var(--clinical-caution-border)',
  },
  stable: {
    fg: 'var(--clinical-stable)',
    bg: 'var(--clinical-stable-bg)',
    border: 'var(--clinical-stable-border)',
  },
  info: {
    fg: 'var(--clinical-info)',
    bg: 'var(--clinical-info-bg)',
    border: 'var(--clinical-info-border)',
  },
  neutral: {
    fg: 'var(--gray-500)',
    bg: 'var(--light)',
    border: 'var(--gray-200)',
  },
};

/**
 * Normalizes any of the project's severity-like strings — clinical severity,
 * triage priority, message urgency, and vitals trend direction — onto the
 * canonical {@link Severity} scale.
 *
 * Trend semantics: `improving` -> stable (good), `declining` -> critical (bad),
 * a steady/unknown trend -> neutral.
 */
export function toSeverity(value: string | null | undefined): Severity {
  switch ((value ?? '').toLowerCase().trim()) {
    case 'critical':
    case 'declining':
    case 'danger':
    case 'error':
      return 'critical';
    case 'high':
    case 'urgent':
      return 'urgent';
    case 'moderate':
    case 'medium':
    case 'warning':
    case 'caution':
      return 'caution';
    case 'stable':
    case 'improving':
    case 'normal':
    case 'success':
      return 'stable';
    case 'low':
    case 'info':
    case 'background':
      return 'info';
    case 'steady':
    case 'neutral':
    case '':
    default:
      return 'neutral';
  }
}
