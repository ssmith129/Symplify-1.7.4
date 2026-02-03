/* eslint-disable */
// src/feature-module/components/ai/EmailPriorityBadge.tsx
// Email Priority Badge for Symplify Platform AI-Enhanced Communication

import React from 'react';
import { EmailPriority, EmailAnalysis } from '../../../core/ai/emailTypes';

interface PriorityConfig {
  color: string;
  bgColor: string;
  icon: string;
  label: string;
}

const PRIORITY_CONFIG: Record<EmailPriority, PriorityConfig> = {
  critical: { color: '#DC2626', bgColor: '#FEE2E2', icon: 'ti-alert-octagon', label: 'Critical' },
  high: { color: '#F97316', bgColor: '#FFEDD5', icon: 'ti-alert-triangle', label: 'High' },
  medium: { color: '#EAB308', bgColor: '#FEF9C3', icon: 'ti-clock', label: 'Medium' },
  low: { color: '#22C55E', bgColor: '#DCFCE7', icon: 'ti-check-circle', label: 'Low' }
};

interface EmailPriorityBadgeProps {
  analysis: EmailAnalysis;
  showDetails?: boolean;
  showLabel?: boolean;
}

export const EmailPriorityBadge: React.FC<EmailPriorityBadgeProps> = ({ 
  analysis, 
  showDetails = false,
  showLabel = true
}) => {
  const config = PRIORITY_CONFIG[analysis.priority];

  return (
    <div 
      className={`email-priority-badge ${analysis.priority}`}
      title={`${config.label} Priority - ${analysis.confidence}% confidence\nResponse Time: ${analysis.estimatedResponseTime}${analysis.urgencyIndicators.length > 0 ? `\nIndicators: ${analysis.urgencyIndicators.join(', ')}` : ''}`}
      style={{ 
        backgroundColor: config.bgColor, 
        color: config.color,
      }}
    >
      <i className={`ti ${config.icon}`} style={{ fontSize: '12px' }} />
      {showLabel && <span className="ms-1">{config.label}</span>}
      {showDetails && (
        <span className="ms-1 opacity-75">({analysis.confidence}%)</span>
      )}
    </div>
  );
};

export default EmailPriorityBadge;
