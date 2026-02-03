import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip, Spin } from 'antd';
import type { RootState, AppDispatch } from '../../../core/redux/store';
import { assessPatientTriage } from '../../../core/redux/aiSlice';
import type { VitalsData, TriagePriority } from '../../../core/ai/types';

interface TriagePriorityBadgeProps {
  patientId: string;
  patientName?: string;
  symptoms?: string[];
  vitals?: VitalsData;
  waitTime?: number;
  size?: 'small' | 'default' | 'large';
  showFactors?: boolean;
}

const PRIORITY_CONFIG: Record<TriagePriority, { color: string; bgClass: string; label: string; icon: string }> = {
  1: { color: '#F44336', bgClass: 'bg-danger', label: 'Critical', icon: 'ti-alert-triangle' },
  2: { color: '#FF9800', bgClass: 'bg-warning', label: 'Urgent', icon: 'ti-alert-circle' },
  3: { color: '#FFC107', bgClass: 'bg-warning-light', label: 'Semi-Urgent', icon: 'ti-clock' },
  4: { color: '#4CAF50', bgClass: 'bg-success', label: 'Standard', icon: 'ti-check' },
  5: { color: '#2196F3', bgClass: 'bg-info', label: 'Non-Urgent', icon: 'ti-info-circle' }
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

  // If no symptoms provided, use mock assessment
  useEffect(() => {
    if (!acuityScore && symptoms.length === 0) {
      // Generate a random priority for demo purposes
      const mockSymptoms = ['general checkup'];
      dispatch(assessPatientTriage({ patientId, symptoms: mockSymptoms, vitals, waitTime }));
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

  return (
    <Tooltip title={tooltipContent} placement="top">
      <span
        className={`badge ${sizeClasses[size]} d-inline-flex align-items-center`}
        style={{ backgroundColor: config.color, color: '#fff', cursor: 'help' }}
      >
        <i className={`ti ${config.icon} me-1`} />
        {config.label}
        {showFactors && confidence > 0 && (
          <span className="ms-1 opacity-75">({confidence}%)</span>
        )}
      </span>
    </Tooltip>
  );
};

export default TriagePriorityBadge;
