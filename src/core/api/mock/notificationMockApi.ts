// src/core/api/mock/notificationMockApi.ts
// Mock API for Symplify Platform AI-Enhanced Notification System

import { 
  NotificationData, 
  AnalyzedNotification, 
  NotificationCriticality,
  NotificationCategory,
  NotificationAction 
} from '../../ai/notificationTypes';

// Healthcare-specific keyword arrays for NLP analysis
const CRITICAL_KEYWORDS = [
  'code blue', 'cardiac arrest', 'respiratory failure', 'sepsis', 'stroke',
  'anaphylaxis', 'hemorrhage', 'trauma', 'seizure', 'unresponsive',
  'critical', 'emergency', 'stat', 'immediate', 'life-threatening'
];

const HIGH_PRIORITY_KEYWORDS = [
  'urgent', 'abnormal lab', 'medication error', 'drug interaction', 
  'fall risk', 'deteriorating', 'concerning', 'escalation', 
  'priority', 'asap', 'time-sensitive'
];

const MEDIUM_PRIORITY_KEYWORDS = [
  'follow-up', 'review needed', 'pending', 'awaiting', 'scheduled',
  'reminder', 'upcoming', 'attention needed'
];

const LOW_PRIORITY_KEYWORDS = [
  'fyi', 'information', 'update', 'completed', 'processed',
  'routine', 'standard', 'normal'
];

// Source-based priority modifiers
const SOURCE_PRIORITY_MODIFIERS: Record<string, number> = {
  lab: 1.2,
  pharmacy: 1.1,
  patient: 1.0,
  doctor: 1.0,
  nurse: 0.9,
  admin: 0.7,
  system: 0.5
};

// Analyze notification content using NLP patterns
export const analyzeNotification = (notification: NotificationData): AnalyzedNotification => {
  const contentLower = `${notification.title} ${notification.message}`.toLowerCase();
  const foundKeywords: string[] = [];
  let baseScore = 0;

  // Check for critical keywords (highest priority)
  CRITICAL_KEYWORDS.forEach(keyword => {
    if (contentLower.includes(keyword)) {
      foundKeywords.push(keyword);
      baseScore += 100;
    }
  });

  // Check for high priority keywords
  HIGH_PRIORITY_KEYWORDS.forEach(keyword => {
    if (contentLower.includes(keyword)) {
      foundKeywords.push(keyword);
      baseScore += 50;
    }
  });

  // Check for medium priority keywords
  MEDIUM_PRIORITY_KEYWORDS.forEach(keyword => {
    if (contentLower.includes(keyword)) {
      foundKeywords.push(keyword);
      baseScore += 20;
    }
  });

  // Check for low priority keywords
  LOW_PRIORITY_KEYWORDS.forEach(keyword => {
    if (contentLower.includes(keyword)) {
      foundKeywords.push(keyword);
      baseScore += 5;
    }
  });

  // Apply source modifier
  const sourceModifier = SOURCE_PRIORITY_MODIFIERS[notification.source.type] || 1.0;
  const adjustedScore = baseScore * sourceModifier;

  // Calculate time context
  const minutesAgo = Math.floor(
    (Date.now() - new Date(notification.timestamp).getTime()) / 60000
  );
  const urgencyMultiplier = minutesAgo < 5 ? 1.5 : minutesAgo < 15 ? 1.2 : 1.0;

  // Determine criticality based on final score
  let criticality: NotificationCriticality;
  let confidence: number;

  if (adjustedScore >= 80) {
    criticality = 'critical';
    confidence = Math.min(98, 85 + (adjustedScore - 80) / 10);
  } else if (adjustedScore >= 40) {
    criticality = 'high';
    confidence = Math.min(95, 75 + (adjustedScore - 40) / 8);
  } else if (adjustedScore >= 15) {
    criticality = 'medium';
    confidence = Math.min(90, 65 + (adjustedScore - 15) / 5);
  } else if (adjustedScore >= 5) {
    criticality = 'low';
    confidence = Math.min(85, 55 + adjustedScore * 2);
  } else {
    criticality = 'info';
    confidence = 70;
  }

  // Determine category
  const category = determineCategory(notification, contentLower, criticality);

  // Generate suggested actions
  const suggestedActions = generateSuggestedActions(notification, criticality, category);

  return {
    ...notification,
    criticality,
    category,
    confidence: Math.round(confidence),
    keywords: foundKeywords,
    suggestedActions,
    timeContext: {
      isRecent: minutesAgo < 30,
      minutesAgo,
      urgencyMultiplier
    },
    requiresResponse: criticality === 'critical' || criticality === 'high'
  };
};

const determineCategory = (
  notification: NotificationData, 
  content: string,
  criticality: NotificationCriticality
): NotificationCategory => {
  const source = notification.source.type;
  
  if (['lab', 'pharmacy'].includes(source)) {
    if (criticality === 'critical') return 'clinical-emergency';
    if (criticality === 'high') return 'clinical-urgent';
    return 'clinical-routine';
  }
  
  if (['patient', 'doctor', 'nurse'].includes(source)) {
    if (criticality === 'critical') return 'clinical-emergency';
    if (criticality === 'high') return 'clinical-urgent';
    if (content.includes('appointment') || content.includes('schedule')) {
      return 'administrative-routine';
    }
    return 'clinical-routine';
  }
  
  if (source === 'admin') {
    if (criticality === 'high') return 'administrative-urgent';
    return 'administrative-routine';
  }
  
  if (source === 'system') return 'system';
  
  return 'communication';
};

const generateSuggestedActions = (
  notification: NotificationData,
  criticality: NotificationCriticality,
  _category: NotificationCategory
): NotificationAction[] => {
  const actions: NotificationAction[] = [];

  // Critical notifications get immediate action options
  if (criticality === 'critical') {
    actions.push({
      id: 'respond-now',
      label: 'Respond Now',
      type: 'navigate',
      url: notification.relatedPatientId ? `/patient/${notification.relatedPatientId}` : '/patients',
      priority: 'danger'
    });
    actions.push({
      id: 'acknowledge',
      label: 'Acknowledge',
      type: 'acknowledge',
      priority: 'primary'
    });
  }

  // High priority gets review option
  if (criticality === 'high') {
    actions.push({
      id: 'review',
      label: 'Review Details',
      type: 'navigate',
      url: notification.relatedPatientId 
        ? `/patient/${notification.relatedPatientId}` 
        : '/notifications',
      priority: 'primary'
    });
  }

  // All notifications can be dismissed
  actions.push({
    id: 'dismiss',
    label: 'Dismiss',
    type: 'dismiss',
    priority: 'secondary'
  });

  return actions;
};

// Mock notification data
export const getMockNotifications = (): NotificationData[] => [
  {
    id: 'notif-001',
    title: 'CODE BLUE - Room 412',
    message: 'Patient John Smith experiencing cardiac arrest. Immediate response required.',
    timestamp: new Date(Date.now() - 2 * 60000).toISOString(),
    read: false,
    source: { type: 'nurse', id: 'nurse-001', name: 'Sarah Johnson', department: 'ICU' },
    relatedPatientId: 'patient-001',
    relatedPatientName: 'John Smith'
  },
  {
    id: 'notif-002',
    title: 'Critical Lab Results - Potassium 6.8 mEq/L',
    message: 'Patient Maria Garcia has critically elevated potassium. Review and treat immediately.',
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    read: false,
    source: { type: 'lab', id: 'lab-001', name: 'Clinical Laboratory' },
    relatedPatientId: 'patient-002',
    relatedPatientName: 'Maria Garcia'
  },
  {
    id: 'notif-003',
    title: 'Drug Interaction Alert',
    message: 'Potential severe interaction detected: Warfarin + Aspirin for patient Robert Chen.',
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    read: false,
    source: { type: 'pharmacy', id: 'pharm-001', name: 'Central Pharmacy' },
    relatedPatientId: 'patient-003',
    relatedPatientName: 'Robert Chen'
  },
  {
    id: 'notif-004',
    title: 'Abnormal Lab Results',
    message: 'Patient Emily Davis has elevated liver enzymes. AST: 156, ALT: 189. Review needed.',
    timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
    read: false,
    source: { type: 'lab', id: 'lab-001', name: 'Clinical Laboratory' },
    relatedPatientId: 'patient-004',
    relatedPatientName: 'Emily Davis'
  },
  {
    id: 'notif-005',
    title: 'Appointment Reminder',
    message: 'Dr. Williams has 3 upcoming appointments in the next hour.',
    timestamp: new Date(Date.now() - 60 * 60000).toISOString(),
    read: true,
    source: { type: 'system', id: 'sys-001', name: 'Scheduling System' }
  },
  {
    id: 'notif-006',
    title: 'New Message from Dr. Patel',
    message: 'Regarding patient discharge summary for room 305.',
    timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
    read: false,
    source: { type: 'doctor', id: 'doc-001', name: 'Dr. Patel', department: 'Internal Medicine' }
  },
  {
    id: 'notif-007',
    title: 'Staff Meeting Reminder',
    message: 'Weekly department meeting at 2:00 PM in Conference Room A.',
    timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    read: true,
    source: { type: 'admin', id: 'admin-001', name: 'HR Department' }
  },
  {
    id: 'notif-008',
    title: 'System Maintenance Notice',
    message: 'Scheduled maintenance tonight 2-4 AM. Brief interruptions expected.',
    timestamp: new Date(Date.now() - 180 * 60000).toISOString(),
    read: true,
    source: { type: 'system', id: 'sys-001', name: 'IT Department' }
  }
];

// Fetch and analyze all notifications
export const fetchAnalyzedNotifications = async (): Promise<AnalyzedNotification[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const rawNotifications = getMockNotifications();
  return rawNotifications.map(analyzeNotification);
};
