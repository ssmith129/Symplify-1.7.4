/* eslint-disable */
// src/feature-module/components/ai/MessageUrgencyIndicator.tsx
// Message Urgency Indicator for Symplify Platform AI-Enhanced Communication

import React, { useMemo } from 'react';

type UrgencyLevel = 'critical' | 'high' | 'normal' | 'low';

interface UrgencyConfig {
  color: string;
  bgColor: string;
  label: string;
  icon: string;
}

const URGENCY_CONFIG: Record<UrgencyLevel, UrgencyConfig> = {
  critical: { color: '#DC2626', bgColor: '#FEE2E2', label: 'Critical', icon: 'ti-alert-octagon' },
  high: { color: '#F97316', bgColor: '#FFEDD5', label: 'Urgent', icon: 'ti-alert-triangle' },
  normal: { color: '#6B7280', bgColor: '#F3F4F6', label: 'Normal', icon: 'ti-message' },
  low: { color: '#22C55E', bgColor: '#DCFCE7', label: 'FYI', icon: 'ti-info-circle' }
};

const URGENCY_KEYWORDS: Record<UrgencyLevel, string[]> = {
  critical: ['stat', 'emergency', 'code', 'critical', 'immediate', 'now', 'life threatening', 'code blue'],
  high: ['urgent', 'asap', 'priority', 'important', 'quickly', 'soon'],
  normal: [],
  low: ['fyi', 'when you can', 'no rush', 'whenever', 'low priority']
};

// Quick response templates based on urgency level
export const QUICK_RESPONSES: Record<UrgencyLevel, string[]> = {
  critical: [
    "On my way now",
    "Acknowledged - taking immediate action",
    "What room number?",
    "Calling for backup"
  ],
  high: [
    "I'll handle this right away",
    "Can you provide more details?",
    "On it - will update shortly",
    "Who else needs to know?"
  ],
  normal: [
    "Got it, thanks!",
    "I'll take a look",
    "Will follow up soon"
  ],
  low: [
    "Thanks for the update",
    "Noted",
    "Good to know"
  ]
};

interface MessageUrgencyIndicatorProps {
  message: string;
  showLabel?: boolean;
  showQuickResponses?: boolean;
  onQuickResponse?: (response: string) => void;
}

export const MessageUrgencyIndicator: React.FC<MessageUrgencyIndicatorProps> = ({ 
  message, 
  showLabel = true,
  showQuickResponses = false,
  onQuickResponse
}) => {
  const analysis = useMemo(() => {
    const lowerMessage = message.toLowerCase();
    const foundKeywords: string[] = [];
    let urgency: UrgencyLevel = 'normal';

    // Check critical first
    for (const keyword of URGENCY_KEYWORDS.critical) {
      if (lowerMessage.includes(keyword)) {
        foundKeywords.push(keyword);
        urgency = 'critical';
      }
    }

    // Check high if not critical
    if (urgency === 'normal') {
      for (const keyword of URGENCY_KEYWORDS.high) {
        if (lowerMessage.includes(keyword)) {
          foundKeywords.push(keyword);
          urgency = 'high';
        }
      }
    }

    // Check low
    if (urgency === 'normal') {
      for (const keyword of URGENCY_KEYWORDS.low) {
        if (lowerMessage.includes(keyword)) {
          foundKeywords.push(keyword);
          urgency = 'low';
        }
      }
    }

    return { urgency, keywords: foundKeywords };
  }, [message]);

  // Don't show indicator for normal messages unless showing quick responses
  if (analysis.urgency === 'normal' && !showQuickResponses) return null;

  const config = URGENCY_CONFIG[analysis.urgency];

  return (
    <div className="message-urgency-wrapper">
      {analysis.urgency !== 'normal' && (
        <span
          className={`message-urgency-indicator ${analysis.urgency}`}
          title={`Detected keywords: ${analysis.keywords.join(', ')}`}
          style={{
            backgroundColor: config.bgColor,
            color: config.color,
          }}
        >
          <i className={`ti ${config.icon}`} style={{ fontSize: '11px' }} />
          {showLabel && <span className="ms-1">{config.label}</span>}
        </span>
      )}
      
      {showQuickResponses && onQuickResponse && (
        <div className="quick-responses">
          {QUICK_RESPONSES[analysis.urgency].map((response, index) => (
            <button
              key={index}
              className="quick-response-btn"
              onClick={() => onQuickResponse(response)}
            >
              {response}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageUrgencyIndicator;
