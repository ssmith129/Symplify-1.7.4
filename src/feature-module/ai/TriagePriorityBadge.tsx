import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, Spin } from 'antd';
import type { RootState, AppDispatch } from '../../core/redux/store';
import { assessPatientTriage } from '../../core/redux/aiSlice';
import type { VitalsData, TriagePriority } from '../../core/ai/types';
import { SEVERITY_VAR } from '../../core/ai/severityTokens';

interface TriagePriorityBadgeProps {
  patientId: string;
  patientName?: string;
  symptoms?: string[];
  vitals?: VitalsData;
  waitTime?: number;
  size?: 'small' | 'default' | 'large';
  showFactors?: boolean;
}

const PRIORITY_CONFIG: Record<TriagePriority, { colorVar: string; bgVar: string; label: string; icon: string }> = {
  1: { colorVar: 'var(--clinical-critical)', bgVar: 'var(--clinical-critical-bg)', label: 'Critical', icon: 'ti-alert-triangle' },
  2: { colorVar: 'var(--clinical-urgent)', bgVar: 'var(--clinical-urgent-bg)', label: 'Urgent', icon: 'ti-alert-circle' },
  3: { colorVar: 'var(--clinical-caution)', bgVar: 'var(--clinical-caution-bg)', label: 'Semi-Urgent', icon: 'ti-clock' },
  4: { colorVar: 'var(--clinical-stable)', bgVar: 'var(--clinical-stable-bg)', label: 'Standard', icon: 'ti-check' },
  5: { colorVar: 'var(--clinical-info)', bgVar: 'var(--clinical-info-bg)', label: 'Non-Urgent', icon: 'ti-info-circle' }
};

const TriagePriorityBadge: React.FC<TriagePriorityBadgeProps> = ({
  patientId,
  patientName,
  symptoms = [],
  vitals,
  waitTime = 0,
  size = 'default',
  showFactors = false
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { acuityScores, loading } = useSelector((state: RootState) => state.ai.triage);
  const acuityScore = acuityScores[patientId];

  useEffect(() => {
    if (!acuityScore && symptoms.length > 0) {
      dispatch(assessPatientTriage({ patientId, symptoms, vitals, waitTime }));
    }
  }, [patientId, symptoms, vitals, waitTime, acuityScore, dispatch]);

  // Demo-only fallback: when no symptoms are supplied we can synthesize a
  // placeholder assessment so the badge has something to show in showcases.
  // This is OFF by default and never runs in production — a patient with no
  // assessment must surface as "Not assessed", not as fabricated triage data.
  useEffect(() => {
    if (
      import.meta.env.VITE_DEMO_TRIAGE === 'true' &&
      !acuityScore &&
      symptoms.length === 0
    ) {
      dispatch(assessPatientTriage({ patientId, symptoms: ['general checkup'], vitals, waitTime }));
    }
  }, [patientId, acuityScore, dispatch, symptoms.length, vitals, waitTime]);

  const priority = acuityScore?.priority || 4;
  const config = PRIORITY_CONFIG[priority];
  const confidence = acuityScore?.confidence || 0;
  const factors = acuityScore?.factors || [];

  const sizeClasses = {
    small: 'fs-12 px-2 py-1',
    default: 'fs-13 px-2 py-1',
    large: 'fs-14 px-3 py-2'
  };

  const tooltipContent = (
    <div className="p-1">
      <div className="fw-bold mb-1">{config.label} Priority</div>
      <div className="mb-1">Confidence: {confidence}%</div>
      {factors.length > 0 && showFactors && (
        <div>
          <div className="fw-medium">Factors:</div>
          <ul className="mb-0 ps-3">
            {factors.map((factor, idx) => (
              <li key={idx}>{factor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  if (loading && !acuityScore) {
    return (
      <span className={`badge ${sizeClasses[size]} bg-light text-dark`}>
        <Spin size="small" className="me-1" />
        Analyzing...
      </span>
    );
  }

  // No real acuity score yet — show an honest neutral state rather than a
  // fabricated priority. (patientName kept available for callers/labelling.)
  if (!acuityScore) {
    return (
      <span
        role="status"
        aria-label={`Triage priority${patientName ? ` for ${patientName}` : ''}: not assessed`}
        className={`badge ${sizeClasses[size]} d-inline-flex align-items-center`}
        style={{ backgroundColor: SEVERITY_VAR.neutral.bg, color: SEVERITY_VAR.neutral.fg }}
      >
        <i className="ti ti-help-circle me-1" aria-hidden="true" />
        Not assessed
      </span>
    );
  }

  return (
    <Tooltip title={tooltipContent} placement="top">
      <span
        role="status"
        aria-label={`Triage priority: ${config.label}${confidence > 0 ? `. Confidence ${confidence}%` : ''}`}
        className={`badge ${sizeClasses[size]} d-inline-flex align-items-center`}
        style={{ backgroundColor: config.bgVar, color: config.colorVar, cursor: 'help' }}
      >
        <i className={`ti ${config.icon} me-1`} aria-hidden="true" />
        {config.label}
        {showFactors && confidence > 0 && (
          <span className="ms-1 opacity-75">({confidence}%)</span>
        )}
      </span>
    </Tooltip>
  );
};

export default TriagePriorityBadge;
