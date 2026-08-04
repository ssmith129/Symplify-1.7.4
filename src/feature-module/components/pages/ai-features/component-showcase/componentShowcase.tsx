import React from 'react';
import PageHeader from '../../../../../core/common/page-header/PageHeader';
import SeverityBadge from '../../../../ai/drug-interaction/SeverityBadge';
import { MessageUrgencyIndicator } from '../../../../ai/MessageUrgencyIndicator';
import ConfidenceIndicator from '../../../../ai/assistant/ConfidenceIndicator';

/* ────────────────────────────────────────────────────────────
   TRIAGE BADGE (re-creation of TriagePriorityBadge — standalone, no Redux)
   ──────────────────────────────────────────────────────────── */

type TriagePriority = 1 | 2 | 3 | 4 | 5;

const TRIAGE_CONFIG: Record<TriagePriority, { color: string; bg: string; label: string; icon: string }> = {
  1: { color: 'var(--clinical-critical)', bg: 'var(--clinical-critical-bg)', label: 'Critical',    icon: 'ti-alert-triangle' },
  2: { color: 'var(--clinical-urgent)',   bg: 'var(--clinical-urgent-bg)',   label: 'Urgent',      icon: 'ti-alert-circle' },
  3: { color: 'var(--clinical-caution)',  bg: 'var(--clinical-caution-bg)',  label: 'Semi-Urgent', icon: 'ti-clock' },
  4: { color: 'var(--clinical-stable)',   bg: 'var(--clinical-stable-bg)',   label: 'Standard',    icon: 'ti-check' },
  5: { color: 'var(--clinical-info)',     bg: 'var(--clinical-info-bg)',     label: 'Non-Urgent',  icon: 'ti-info-circle' },
};

interface TriageBadgeProps {
  priority: TriagePriority;
  size?: 'small' | 'default' | 'large';
  confidence?: number;
}

const TriageBadge: React.FC<TriageBadgeProps> = ({ priority, size = 'default', confidence }) => {
  const cfg = TRIAGE_CONFIG[priority];
  const sizeCls = size === 'small' ? 'fs-12 px-2 py-1' : size === 'large' ? 'fs-14 px-3 py-2' : 'fs-13 px-2 py-1';
  return (
    <span
      role="status"
      aria-label={`Triage priority: ${cfg.label}${confidence ? `, confidence ${confidence}%` : ''}`}
      className={`badge ${sizeCls} d-inline-flex align-items-center`}
      style={{ backgroundColor: cfg.bg, color: cfg.color }}
    >
      <i className={`ti ${cfg.icon} me-1`} aria-hidden="true" />
      {cfg.label}
      {confidence !== undefined && <span className="ms-1 opacity-75">({confidence}%)</span>}
    </span>
  );
};

/* ────────────────────────────────────────────────────────────
   CONFIDENCE INDICATOR — SVG VARIANTS
   ──────────────────────────────────────────────────────────── */

const confidenceColor = (v: number) =>
  v >= 80 ? '#16A34A' : v >= 60 ? '#F59E0B' : '#DC2626';

/** Radial gauge */
const ConfidenceGaugeSvg: React.FC<{ value: number; size?: number }> = ({ value, size = 88 }) => {
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(value, 100) / 100) * c;
  const color = confidenceColor(value);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img"
      aria-label={`Confidence ${value}%`}>
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#E5E7EB" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        stroke={color} strokeWidth={stroke} fill="none"
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: 'stroke-dashoffset .4s ease' }}
      />
      <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central"
        fontSize={size * 0.22} fontWeight={700} fill={color}>{value}%</text>
    </svg>
  );
};

/** Segmented arc (5 wedges, fills by tier) */
const ConfidenceArcSvg: React.FC<{ value: number; width?: number }> = ({ value, width = 140 }) => {
  const segments = 5;
  const filled = Math.round((Math.min(value, 100) / 100) * segments);
  const color = confidenceColor(value);
  const height = width / 2 + 8;
  const cx = width / 2;
  const cy = width / 2;
  const r = width / 2 - 6;
  const arcFor = (i: number) => {
    const a0 = Math.PI + (i / segments) * Math.PI;
    const a1 = Math.PI + ((i + 1) / segments) * Math.PI;
    const gap = 0.04;
    const x0 = cx + r * Math.cos(a0 + gap);
    const y0 = cy + r * Math.sin(a0 + gap);
    const x1 = cx + r * Math.cos(a1 - gap);
    const y1 = cy + r * Math.sin(a1 - gap);
    return `M ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1}`;
  };
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img"
      aria-label={`Confidence ${value}%`}>
      {Array.from({ length: segments }).map((_, i) => (
        <path key={i} d={arcFor(i)} fill="none" strokeWidth={10} strokeLinecap="round"
          stroke={i < filled ? color : '#E5E7EB'} />
      ))}
      <text x="50%" y={cy + 4} textAnchor="middle" fontSize={16} fontWeight={700} fill={color}>{value}%</text>
    </svg>
  );
};

/** Linear bar */
const ConfidenceBarSvg: React.FC<{ value: number; width?: number }> = ({ value, width = 180 }) => {
  const height = 22;
  const color = confidenceColor(value);
  const fill = (Math.min(value, 100) / 100) * (width - 50);
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} role="img"
      aria-label={`Confidence ${value}%`}>
      <rect x={0} y={6} width={width - 50} height={10} rx={5} fill="#E5E7EB" />
      <rect x={0} y={6} width={fill} height={10} rx={5} fill={color} />
      <text x={width - 2} y={16} textAnchor="end" fontSize={12} fontWeight={700} fill={color}>{value}%</text>
    </svg>
  );
};

/** 5-dot meter (SVG) */
const ConfidenceDotsSvg: React.FC<{ value: number }> = ({ value }) => {
  const dots = 5;
  const filled = Math.round((Math.min(value, 100) / 100) * dots);
  const color = confidenceColor(value);
  return (
    <svg width={dots * 14} height={12} viewBox={`0 0 ${dots * 14} 12`} role="img"
      aria-label={`Confidence ${value}%`}>
      {Array.from({ length: dots }).map((_, i) => (
        <circle key={i} cx={6 + i * 14} cy={6} r={5} fill={i < filled ? color : '#E5E7EB'} />
      ))}
    </svg>
  );
};

/* ────────────────────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────────────────────── */

const Section: React.FC<{ title: string; subtitle: string; children: React.ReactNode }> = ({ title, subtitle, children }) => (
  <div className="card mb-3">
    <div className="card-header d-flex flex-column align-items-start">
      <h3 className="fw-bold mb-1 fs-16">{title}</h3>
      <p className="text-muted mb-0 fs-13">{subtitle}</p>
    </div>
    <div className="card-body">{children}</div>
  </div>
);

const Cell: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="d-flex flex-column align-items-start gap-2 p-3 border rounded-3" style={{ minWidth: 180 }}>
    <span className="text-muted fs-12 text-uppercase fw-medium">{label}</span>
    <div className="d-flex align-items-center" style={{ minHeight: 36 }}>{children}</div>
  </div>
);

const ComponentShowcase: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <PageHeader title="AI Component Showcase" showBreadcrumb={false} />

        {/* TRIAGE BADGE */}
        <Section
          title="Triage Badge"
          subtitle="TriagePriorityBadge — clinical triage priority pill with icon and optional confidence."
        >
          <p className="text-muted fs-13 mb-3">Priorities (default size)</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            {([1, 2, 3, 4, 5] as TriagePriority[]).map(p => (
              <Cell key={p} label={`Priority ${p}`}><TriageBadge priority={p} /></Cell>
            ))}
          </div>
          <p className="text-muted fs-13 mb-3">Sizes</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <Cell label="Small"><TriageBadge priority={1} size="small" /></Cell>
            <Cell label="Default"><TriageBadge priority={1} size="default" /></Cell>
            <Cell label="Large"><TriageBadge priority={1} size="large" /></Cell>
          </div>
          <p className="text-muted fs-13 mb-3">With confidence</p>
          <div className="d-flex flex-wrap gap-3">
            <Cell label="Priority 1 — 94%"><TriageBadge priority={1} confidence={94} /></Cell>
            <Cell label="Priority 2 — 81%"><TriageBadge priority={2} confidence={81} /></Cell>
            <Cell label="Priority 3 — 67%"><TriageBadge priority={3} confidence={67} /></Cell>
          </div>
        </Section>

        {/* SEVERITY BADGE */}
        <Section
          title="Severity Badge"
          subtitle="drug-interaction/SeverityBadge — pill with icon + size variants."
        >
          <p className="text-muted fs-13 mb-3">Levels (medium size)</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <Cell label="Minor"><SeverityBadge severity="minor" /></Cell>
            <Cell label="Moderate"><SeverityBadge severity="moderate" /></Cell>
            <Cell label="Major"><SeverityBadge severity="major" /></Cell>
            <Cell label="Contraindicated"><SeverityBadge severity="contraindicated" /></Cell>
          </div>
          <p className="text-muted fs-13 mb-3">Sizes</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <Cell label="Small"><SeverityBadge severity="major" size="small" /></Cell>
            <Cell label="Medium"><SeverityBadge severity="major" size="medium" /></Cell>
            <Cell label="Large"><SeverityBadge severity="major" size="large" /></Cell>
          </div>
          <p className="text-muted fs-13 mb-3">Icon-only</p>
          <div className="d-flex flex-wrap gap-3">
            <Cell label="Major"><SeverityBadge severity="major" showLabel={false} /></Cell>
            <Cell label="Contraindicated"><SeverityBadge severity="contraindicated" showLabel={false} /></Cell>
          </div>
        </Section>

        {/* URGENCY INDICATOR */}
        <Section
          title="Urgency Indicator"
          subtitle="MessageUrgencyIndicator — keyword-detected message urgency. Driven by sample message text."
        >
          <p className="text-muted fs-13 mb-3">Detected from sample messages</p>
          <div className="d-flex flex-wrap gap-3">
            <Cell label="Critical">
              <MessageUrgencyIndicator message="Code blue in room 412 — immediate response needed" />
            </Cell>
            <Cell label="High / Urgent">
              <MessageUrgencyIndicator message="Urgent: lab results need review ASAP" />
            </Cell>
            <Cell label="Low / FYI">
              <MessageUrgencyIndicator message="FYI — no rush, just an update on the schedule" />
            </Cell>
            <Cell label="Normal (hidden by default)">
              <MessageUrgencyIndicator message="Patient stable, routine check complete." showQuickResponses />
            </Cell>
          </div>
        </Section>

        {/* CONFIDENCE INDICATOR */}
        <Section
          title="Confidence Indicator"
          subtitle="assistant/ConfidenceIndicator — standard meter + new SVG variants (gauge, arc, bar, dots)."
        >
          <p className="text-muted fs-13 mb-3">Standard component (label + 4px progress bar)</p>
          <div className="d-flex flex-column gap-3 mb-4" style={{ maxWidth: 320 }}>
            <ConfidenceIndicator confidence={92} label="High" />
            <ConfidenceIndicator confidence={74} label="Moderate" />
            <ConfidenceIndicator confidence={48} label="Low" />
          </div>

          <p className="text-muted fs-13 mb-3">SVG: Radial gauge</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <Cell label="92%"><ConfidenceGaugeSvg value={92} /></Cell>
            <Cell label="74%"><ConfidenceGaugeSvg value={74} /></Cell>
            <Cell label="48%"><ConfidenceGaugeSvg value={48} /></Cell>
          </div>

          <p className="text-muted fs-13 mb-3">SVG: Segmented arc</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <Cell label="92%"><ConfidenceArcSvg value={92} /></Cell>
            <Cell label="74%"><ConfidenceArcSvg value={74} /></Cell>
            <Cell label="48%"><ConfidenceArcSvg value={48} /></Cell>
          </div>

          <p className="text-muted fs-13 mb-3">SVG: Linear bar</p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <Cell label="92%"><ConfidenceBarSvg value={92} /></Cell>
            <Cell label="74%"><ConfidenceBarSvg value={74} /></Cell>
            <Cell label="48%"><ConfidenceBarSvg value={48} /></Cell>
          </div>

          <p className="text-muted fs-13 mb-3">SVG: 5-dot meter</p>
          <div className="d-flex flex-wrap gap-3">
            <Cell label="92%"><ConfidenceDotsSvg value={92} /></Cell>
            <Cell label="74%"><ConfidenceDotsSvg value={74} /></Cell>
            <Cell label="48%"><ConfidenceDotsSvg value={48} /></Cell>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default ComponentShowcase;
