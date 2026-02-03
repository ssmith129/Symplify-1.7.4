# Symplify Platform
## AI-Enhanced Communication & Notification Implementation Guide
### *Technical Specifications for Email, Messaging & Notification Prioritization*

---

**Platform:** Symplify Healthcare Management v1.7.4  
**Date:** February 2026  
**Focus:** Communication Tools & Notification Criticality Systems

---

## Executive Summary

This implementation guide details 6 AI-powered features specifically designed to enhance Symplify's communication and notification systems. The features prioritize:

- **Notification criticality sorting** for both dropdown and full-page views
- **Email priority detection** with smart inbox organization  
- **Message urgency analysis** for real-time chat communication
- **Healthcare-specific keyword detection** for clinical urgency

### Top 3 Priority Features

| Rank | Feature | Score | Timeline |
|------|---------|-------|----------|
| 1 | Smart Notification Criticality Engine | 25 | 1-2 weeks |
| 2 | AI-Enhanced Notification Dropdown | 25 | 1 week |
| 3 | Intelligent Email Priority Detection | 20 | 2 weeks |

---

## Feature Rankings

> **Scoring Formula:** Feasibility (1-5) × Impact (1-5)

| # | Feature | Primary Users | Feasibility | Impact | Score |
|---|---------|---------------|-------------|--------|-------|
| 1 | 🟢 Smart Notification Criticality Engine | All Staff | 5 | 5 | **25** |
| 2 | 🟢 AI-Enhanced Notification Dropdown | All Staff | 5 | 5 | **25** |
| 3 | 🟢 Intelligent Email Priority Detection | Admin, Clinical | 4 | 5 | **20** |
| 4 | 🟢 Smart Message Urgency Analyzer | All Staff | 4 | 5 | **20** |
| 5 | AI Notification Grouping & Actions | All Staff | 4 | 4 | **16** |
| 6 | Email Smart Categorization | Admin | 4 | 4 | **16** |

---

## Feature 1: Smart Notification Criticality Engine

### Problem Statement

The current notification system in Symplify displays all notifications with equal visual weight. Critical clinical alerts (CODE BLUE, abnormal lab results, drug interactions) appear alongside routine administrative messages, making it difficult for healthcare staff to quickly identify and respond to urgent situations.

### AI Solution

Implement an NLP-based content analysis engine that automatically classifies notification criticality using healthcare-specific keyword detection, source-based priority modifiers, and confidence scoring.

### Technical Requirements

**Type Definitions:** `src/core/ai/notificationTypes.ts`
**Mock API:** `src/core/api/mock/notificationMockApi.ts`  
**Redux Slice:** `src/core/redux/notificationSlice.ts`
**Integration:** Header dropdown, Notifications page

---

### Implementation: Type Definitions

```typescript
// src/core/ai/notificationTypes.ts

export type NotificationCriticality = 'critical' | 'high' | 'medium' | 'low' | 'info';

export type NotificationCategory = 
  | 'clinical-emergency'
  | 'clinical-urgent'
  | 'clinical-routine'
  | 'administrative-urgent'
  | 'administrative-routine'
  | 'system'
  | 'communication';

export interface NotificationSource {
  type: 'patient' | 'doctor' | 'nurse' | 'admin' | 'system' | 'lab' | 'pharmacy';
  id: string;
  name: string;
  department?: string;
}

export interface NotificationAction {
  id: string;
  label: string;
  type: 'navigate' | 'acknowledge' | 'dismiss' | 'delegate' | 'respond';
  url?: string;
  priority: 'primary' | 'secondary' | 'danger';
}

export interface NotificationData {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  source: NotificationSource;
  relatedPatientId?: string;
  relatedPatientName?: string;
}

export interface AnalyzedNotification extends NotificationData {
  criticality: NotificationCriticality;
  category: NotificationCategory;
  confidence: number;
  keywords: string[];
  suggestedActions: NotificationAction[];
  timeContext: {
    isRecent: boolean;
    minutesAgo: number;
    urgencyMultiplier: number;
  };
  requiresResponse: boolean;
}

export interface NotificationFilters {
  criticality?: NotificationCriticality[];
  category?: NotificationCategory[];
  read?: boolean;
  dateRange?: { start: string; end: string };
}

export interface NotificationState {
  notifications: AnalyzedNotification[];
  unreadCount: number;
  criticalCount: number;
  loading: boolean;
  error: string | null;
  filters: NotificationFilters;
}
```

---

### Implementation: Mock API

```typescript
// src/core/api/mock/notificationMockApi.ts

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
  category: NotificationCategory
): NotificationAction[] => {
  const actions: NotificationAction[] = [];

  // Critical notifications get immediate action options
  if (criticality === 'critical') {
    actions.push({
      id: 'respond-now',
      label: 'Respond Now',
      type: 'navigate',
      url: `/patient/${notification.relatedPatientId}`,
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
```

---

### Implementation: Redux Slice

```typescript
// src/core/redux/notificationSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { 
  NotificationState, 
  AnalyzedNotification, 
  NotificationFilters,
  NotificationCriticality 
} from '../ai/notificationTypes';
import { fetchAnalyzedNotifications } from '../api/mock/notificationMockApi';

const CRITICALITY_ORDER: Record<NotificationCriticality, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
  info: 4
};

const initialState: NotificationState = {
  notifications: [],
  unreadCount: 0,
  criticalCount: 0,
  loading: false,
  error: null,
  filters: {}
};

// Async thunk to fetch notifications
export const fetchNotifications = createAsyncThunk(
  'notifications/fetch',
  async () => {
    const notifications = await fetchAnalyzedNotifications();
    
    // Sort by criticality first, then by timestamp (most recent first)
    return notifications.sort((a, b) => {
      const criticalityDiff = CRITICALITY_ORDER[a.criticality] - CRITICALITY_ORDER[b.criticality];
      if (criticalityDiff !== 0) return criticalityDiff;
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification && !notification.read) {
        notification.read = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
        if (notification.criticality === 'critical') {
          state.criticalCount = Math.max(0, state.criticalCount - 1);
        }
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach(n => { n.read = true; });
      state.unreadCount = 0;
      state.criticalCount = 0;
    },
    dismissNotification: (state, action: PayloadAction<string>) => {
      const index = state.notifications.findIndex(n => n.id === action.payload);
      if (index !== -1) {
        const notification = state.notifications[index];
        if (!notification.read) {
          state.unreadCount = Math.max(0, state.unreadCount - 1);
          if (notification.criticality === 'critical') {
            state.criticalCount = Math.max(0, state.criticalCount - 1);
          }
        }
        state.notifications.splice(index, 1);
      }
    },
    setFilter: (state, action: PayloadAction<NotificationFilters>) => {
      state.filters = action.payload;
    },
    acknowledgeNotification: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification) {
        notification.read = true;
        // Could add acknowledged timestamp, etc.
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
        state.unreadCount = action.payload.filter(n => !n.read).length;
        state.criticalCount = action.payload.filter(
          n => !n.read && n.criticality === 'critical'
        ).length;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch notifications';
      });
  }
});

export const { 
  markAsRead, 
  markAllAsRead, 
  dismissNotification, 
  setFilter,
  acknowledgeNotification 
} = notificationSlice.actions;

export default notificationSlice.reducer;
```

---

### Success Metrics

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Critical notification response time | 80% reduction | Time from notification to acknowledgment |
| Criticality classification accuracy | 95%+ | Comparison with clinician assessment |
| Missed critical alerts | 40% reduction | Audit of unacknowledged critical notifications |
| User satisfaction | 85%+ | Post-implementation survey |

---

## Feature 2: AI-Enhanced Notification Dropdown

### Problem Statement

The header notification dropdown currently displays notifications in a flat list without visual urgency indicators. Healthcare staff must scan through all items to identify critical alerts, wasting valuable response time.

### AI Solution

Replace the existing notification dropdown with an AI-enhanced version that groups notifications by criticality, provides visual urgency indicators with pulsing animations for critical items, and offers quick-action buttons.

### Technical Requirements

**Component:** `src/feature-module/components/ai/NotificationDropdownAI.tsx`  
**SCSS:** `src/style/scss/pages/_notification-ai.scss`  
**Integration Point:** `src/core/common/header/header.tsx`

---

### Implementation: React Component

```tsx
// src/feature-module/components/ai/NotificationDropdownAI.tsx

import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Badge, Dropdown, Spin, Button, Empty, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import { 
  fetchNotifications, 
  markAsRead, 
  dismissNotification,
  acknowledgeNotification 
} from '../../../core/redux/notificationSlice';
import { 
  AnalyzedNotification, 
  NotificationCriticality 
} from '../../../core/ai/notificationTypes';
import { RootState, AppDispatch } from '../../../core/redux/store';

interface CriticalityConfig {
  color: string;
  bgColor: string;
  icon: string;
  label: string;
  pulse: boolean;
}

const CRITICALITY_CONFIG: Record<NotificationCriticality, CriticalityConfig> = {
  critical: {
    color: '#DC2626',
    bgColor: '#FEE2E2',
    icon: 'ti-alert-octagon',
    label: 'Critical',
    pulse: true
  },
  high: {
    color: '#F97316',
    bgColor: '#FFEDD5',
    icon: 'ti-alert-triangle',
    label: 'High',
    pulse: false
  },
  medium: {
    color: '#EAB308',
    bgColor: '#FEF9C3',
    icon: 'ti-alert-circle',
    label: 'Medium',
    pulse: false
  },
  low: {
    color: '#22C55E',
    bgColor: '#DCFCE7',
    icon: 'ti-info-circle',
    label: 'Low',
    pulse: false
  },
  info: {
    color: '#3B82F6',
    bgColor: '#DBEAFE',
    icon: 'ti-bell',
    label: 'Info',
    pulse: false
  }
};

// Format relative time
const formatTimeAgo = (timestamp: string): string => {
  const minutes = Math.floor((Date.now() - new Date(timestamp).getTime()) / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
};

interface NotificationItemProps {
  notification: AnalyzedNotification;
  onRead: (id: string) => void;
  onDismiss: (id: string) => void;
  onAcknowledge: (id: string) => void;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onRead,
  onDismiss,
  onAcknowledge
}) => {
  const config = CRITICALITY_CONFIG[notification.criticality];
  
  return (
    <div 
      className={`notification-item ${notification.read ? 'read' : 'unread'} ${config.pulse ? 'pulse' : ''}`}
      style={{ borderLeftColor: config.color }}
      onClick={() => onRead(notification.id)}
    >
      <div className="notification-indicator" style={{ backgroundColor: config.color }}>
        <i className={`ti ${config.icon}`} />
      </div>
      
      <div className="notification-content">
        <div className="notification-header">
          <span className="notification-title">{notification.title}</span>
          <Badge 
            className="criticality-badge"
            style={{ backgroundColor: config.bgColor, color: config.color }}
            count={config.label}
          />
        </div>
        
        <p className="notification-message">{notification.message}</p>
        
        <div className="notification-meta">
          <span className="notification-source">
            <i className="ti ti-user me-1" />
            {notification.source.name}
          </span>
          <span className="notification-time">
            {formatTimeAgo(notification.timestamp)}
          </span>
        </div>
        
        {notification.criticality === 'critical' && !notification.read && (
          <div className="notification-actions">
            <Button 
              type="primary" 
              danger 
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onAcknowledge(notification.id);
              }}
            >
              <i className="ti ti-check me-1" />
              Acknowledge
            </Button>
            {notification.relatedPatientId && (
              <Link 
                to={`/patient/${notification.relatedPatientId}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Button size="small" type="default">
                  View Patient
                </Button>
              </Link>
            )}
          </div>
        )}
      </div>
      
      <Tooltip title="Dismiss">
        <button 
          className="notification-dismiss"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss(notification.id);
          }}
        >
          <i className="ti ti-x" />
        </button>
      </Tooltip>
    </div>
  );
};

export const NotificationDropdownAI: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, unreadCount, criticalCount, loading } = useSelector(
    (state: RootState) => state.notifications
  );

  useEffect(() => {
    dispatch(fetchNotifications());
    
    // Poll for new notifications every 30 seconds
    const interval = setInterval(() => {
      dispatch(fetchNotifications());
    }, 30000);
    
    return () => clearInterval(interval);
  }, [dispatch]);

  // Group notifications by criticality
  const groupedNotifications = useMemo(() => {
    const critical = notifications.filter(n => n.criticality === 'critical' && !n.read);
    const others = notifications.filter(n => n.criticality !== 'critical' || n.read);
    return { critical, others };
  }, [notifications]);

  const handleRead = (id: string) => dispatch(markAsRead(id));
  const handleDismiss = (id: string) => dispatch(dismissNotification(id));
  const handleAcknowledge = (id: string) => dispatch(acknowledgeNotification(id));

  const dropdownContent = (
    <div className="notification-dropdown-ai">
      <div className="notification-dropdown-header">
        <h6 className="mb-0">
          <i className="ti ti-bell me-2" />
          Notifications
        </h6>
        {unreadCount > 0 && (
          <Badge count={unreadCount} style={{ backgroundColor: '#6366F1' }} />
        )}
      </div>

      {loading && notifications.length === 0 ? (
        <div className="notification-loading">
          <Spin />
        </div>
      ) : notifications.length === 0 ? (
        <Empty 
          description="No notifications" 
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      ) : (
        <div className="notification-list">
          {/* Critical Section */}
          {groupedNotifications.critical.length > 0 && (
            <div className="notification-section critical-section">
              <div className="section-header">
                <i className="ti ti-alert-octagon me-1" />
                Critical Alerts ({groupedNotifications.critical.length})
              </div>
              {groupedNotifications.critical.map(notification => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onRead={handleRead}
                  onDismiss={handleDismiss}
                  onAcknowledge={handleAcknowledge}
                />
              ))}
            </div>
          )}

          {/* Other Notifications */}
          {groupedNotifications.others.slice(0, 5).map(notification => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onRead={handleRead}
              onDismiss={handleDismiss}
              onAcknowledge={handleAcknowledge}
            />
          ))}
        </div>
      )}

      <div className="notification-dropdown-footer">
        <Link to="/notifications" className="view-all-link">
          View All Notifications
          <i className="ti ti-arrow-right ms-1" />
        </Link>
      </div>
    </div>
  );

  return (
    <Dropdown 
      dropdownRender={() => dropdownContent}
      trigger={['click']}
      placement="bottomRight"
    >
      <div className="notification-trigger">
        <Badge 
          count={criticalCount > 0 ? criticalCount : unreadCount} 
          style={{ 
            backgroundColor: criticalCount > 0 ? '#DC2626' : '#6366F1'
          }}
          className={criticalCount > 0 ? 'pulse-badge' : ''}
        >
          <i className="ti ti-bell fs-5" />
        </Badge>
      </div>
    </Dropdown>
  );
};

export default NotificationDropdownAI;
```

---

### Implementation: SCSS Styles

```scss
// src/style/scss/pages/_notification-ai.scss

// Criticality color variables
$criticality-critical: #DC2626;
$criticality-high: #F97316;
$criticality-medium: #FCD34D;
$criticality-low: #22C55E;
$criticality-info: #3B82F6;

// Pulse animation for critical notifications
@keyframes pulse-critical {
  0% {
    box-shadow: 0 0 0 0 rgba($criticality-critical, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba($criticality-critical, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba($criticality-critical, 0);
  }
}

@keyframes pulse-badge {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

// Notification dropdown container
.notification-dropdown-ai {
  width: 400px;
  max-height: 520px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  .notification-dropdown-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #E5E7EB;
    background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);

    h6 {
      font-weight: 600;
      color: #1F2937;
      display: flex;
      align-items: center;
    }
  }

  .notification-loading {
    padding: 40px;
    text-align: center;
  }

  .notification-list {
    max-height: 380px;
    overflow-y: auto;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #D1D5DB;
      border-radius: 3px;
    }
  }

  .notification-section {
    &.critical-section {
      background: rgba($criticality-critical, 0.05);
      border-bottom: 2px solid rgba($criticality-critical, 0.2);

      .section-header {
        padding: 10px 16px;
        font-size: 12px;
        font-weight: 600;
        color: $criticality-critical;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        background: rgba($criticality-critical, 0.1);
      }
    }
  }

  .notification-item {
    display: flex;
    align-items: flex-start;
    padding: 14px 16px;
    border-bottom: 1px solid #F3F4F6;
    border-left: 4px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
      background: #F9FAFB;
    }

    &.unread {
      background: #FAFBFF;
    }

    &.read {
      opacity: 0.7;
    }

    &.pulse {
      animation: pulse-critical 2s infinite;
    }

    .notification-indicator {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      flex-shrink: 0;

      i {
        color: #fff;
        font-size: 16px;
      }
    }

    .notification-content {
      flex: 1;
      min-width: 0;

      .notification-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;

        .notification-title {
          font-weight: 600;
          font-size: 13px;
          color: #1F2937;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }

        .criticality-badge {
          font-size: 10px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 12px;
        }
      }

      .notification-message {
        font-size: 12px;
        color: #6B7280;
        margin-bottom: 6px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .notification-meta {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 11px;
        color: #9CA3AF;

        .notification-source {
          display: flex;
          align-items: center;
        }
      }

      .notification-actions {
        display: flex;
        gap: 8px;
        margin-top: 10px;
      }
    }

    .notification-dismiss {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 24px;
      height: 24px;
      border: none;
      background: transparent;
      color: #9CA3AF;
      cursor: pointer;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.2s;

      &:hover {
        background: #F3F4F6;
        color: #6B7280;
      }
    }

    &:hover .notification-dismiss {
      opacity: 1;
    }
  }

  .notification-dropdown-footer {
    padding: 12px 16px;
    border-top: 1px solid #E5E7EB;
    text-align: center;
    background: #F9FAFB;

    .view-all-link {
      color: #6366F1;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: #4F46E5;
      }
    }
  }
}

// Badge pulse animation
.pulse-badge {
  .ant-badge-count {
    animation: pulse-badge 1s ease-in-out infinite;
  }
}

// Notification trigger styling
.notification-trigger {
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: #F3F4F6;
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .notification-dropdown-ai {
    width: 100%;
    max-width: 360px;
  }
}
```

---

### Header Integration

Update `src/core/common/header/header.tsx`:

```tsx
// Add import
import { NotificationDropdownAI } from '../../feature-module/components/ai/NotificationDropdownAI';

// Replace existing notification dropdown with:
<NotificationDropdownAI />
```

---

### Success Metrics

| Metric | Target |
|--------|--------|
| Time to identify critical notifications | 70% reduction |
| User adoption rate | 90%+ |
| Missed critical alerts | 50% decrease |

---

## Feature 3: Intelligent Email Priority Detection

### Problem Statement

Healthcare professionals receive hundreds of emails daily. Critical clinical communications (STAT lab results, urgent pre-authorizations, adverse event reports) get buried alongside routine newsletters and administrative messages.

### AI Solution

Implement AI-powered email analysis that automatically detects priority level based on content, sender trust scores, and healthcare-specific urgency indicators.

### Technical Requirements

**Type Definitions:** `src/core/ai/emailTypes.ts`  
**Mock API:** `src/core/api/mock/emailMockApi.ts`  
**Components:** `EmailPriorityBadge.tsx`, `EmailInboxAI.tsx`

---

### Implementation: Type Definitions

```typescript
// src/core/ai/emailTypes.ts

export type EmailPriority = 'critical' | 'high' | 'medium' | 'low';

export type EmailCategory = 
  | 'clinical-urgent'
  | 'clinical-routine'
  | 'lab-results'
  | 'referral'
  | 'insurance'
  | 'appointment'
  | 'administrative'
  | 'newsletter';

export interface EmailSender {
  email: string;
  name: string;
  department?: string;
  isInternal: boolean;
  trustScore: number; // 0-100
}

export interface EmailAnalysis {
  priority: EmailPriority;
  category: EmailCategory;
  confidence: number;
  urgencyIndicators: string[];
  estimatedResponseTime: string;
  requiresAction: boolean;
}

export interface AnalyzedEmail {
  id: string;
  subject: string;
  preview: string;
  sender: EmailSender;
  timestamp: string;
  read: boolean;
  starred: boolean;
  hasAttachments: boolean;
  analysis: EmailAnalysis;
}
```

---

### Implementation: Mock API

```typescript
// src/core/api/mock/emailMockApi.ts

import { AnalyzedEmail, EmailPriority, EmailCategory, EmailSender } from '../../ai/emailTypes';

const CRITICAL_KEYWORDS = [
  'stat', 'emergency', 'urgent', 'critical', 'immediate attention',
  'code blue', 'life threatening', 'adverse reaction', 'anaphylaxis',
  'cardiac arrest', 'stroke alert', 'trauma', 'sepsis', 'critical lab'
];

const HIGH_PRIORITY_KEYWORDS = [
  'priority', 'asap', 'important', 'time-sensitive', 'abnormal results',
  'escalation', 'concerning', 'review needed', 'authorization needed',
  'pre-auth', 'denied', 'appeal'
];

const SENDER_TRUST_SCORES: Record<string, number> = {
  lab: 95,
  pharmacy: 90,
  radiology: 90,
  emergency: 100,
  doctor: 85,
  nurse: 80,
  admin: 70,
  external: 50
};

const detectSenderType = (email: string, name: string): string => {
  const combined = `${email} ${name}`.toLowerCase();
  if (combined.includes('lab')) return 'lab';
  if (combined.includes('pharm')) return 'pharmacy';
  if (combined.includes('radiology') || combined.includes('imaging')) return 'radiology';
  if (combined.includes('emergency') || combined.includes('ed')) return 'emergency';
  if (combined.includes('dr.') || combined.includes('md')) return 'doctor';
  if (combined.includes('rn') || combined.includes('nurse')) return 'nurse';
  if (combined.includes('admin') || combined.includes('hr')) return 'admin';
  return 'external';
};

export const analyzeEmail = (
  subject: string, 
  preview: string, 
  sender: EmailSender
): { priority: EmailPriority; category: EmailCategory; confidence: number; indicators: string[] } => {
  const content = `${subject} ${preview}`.toLowerCase();
  const indicators: string[] = [];
  let score = 0;

  // Check critical keywords
  CRITICAL_KEYWORDS.forEach(keyword => {
    if (content.includes(keyword)) {
      indicators.push(keyword);
      score += 100;
    }
  });

  // Check high priority keywords
  HIGH_PRIORITY_KEYWORDS.forEach(keyword => {
    if (content.includes(keyword)) {
      indicators.push(keyword);
      score += 40;
    }
  });

  // Apply sender trust modifier
  const senderType = detectSenderType(sender.email, sender.name);
  const trustModifier = (SENDER_TRUST_SCORES[senderType] || 50) / 100;
  score = score * trustModifier;

  // Determine priority
  let priority: EmailPriority;
  let confidence: number;

  if (score >= 70) {
    priority = 'critical';
    confidence = Math.min(98, 80 + score / 10);
  } else if (score >= 30) {
    priority = 'high';
    confidence = Math.min(95, 70 + score / 5);
  } else if (score >= 10) {
    priority = 'medium';
    confidence = Math.min(90, 60 + score);
  } else {
    priority = 'low';
    confidence = 75;
  }

  // Determine category
  let category: EmailCategory = 'administrative';
  if (content.includes('lab') || content.includes('result')) category = 'lab-results';
  else if (content.includes('referral')) category = 'referral';
  else if (content.includes('insurance') || content.includes('auth')) category = 'insurance';
  else if (content.includes('appointment')) category = 'appointment';
  else if (content.includes('newsletter') || content.includes('update')) category = 'newsletter';
  else if (indicators.length > 0) category = 'clinical-urgent';

  return { priority, category, confidence: Math.round(confidence), indicators };
};

export const getMockEmails = (): AnalyzedEmail[] => {
  const emails = [
    {
      id: 'email-001',
      subject: 'STAT: Critical Lab Results - Potassium 7.2',
      preview: 'Immediate attention required. Patient James Wilson has critically elevated potassium...',
      sender: { email: 'lab@hospital.org', name: 'Clinical Laboratory', isInternal: true, trustScore: 95 },
      timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
      read: false,
      starred: true,
      hasAttachments: true
    },
    {
      id: 'email-002',
      subject: 'URGENT: Pre-Authorization Denied - Patient needs surgery',
      preview: 'Insurance has denied pre-authorization for scheduled cardiac procedure. Appeal deadline...',
      sender: { email: 'insurance@hospital.org', name: 'Insurance Coordinator', isInternal: true, trustScore: 80 },
      timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
      read: false,
      starred: false,
      hasAttachments: true
    },
    {
      id: 'email-003',
      subject: 'New Referral: Cardiology Consultation',
      preview: 'New patient referral from Dr. Martinez for cardiac evaluation...',
      sender: { email: 'referrals@clinic.org', name: 'Referral Coordinator', isInternal: true, trustScore: 75 },
      timestamp: new Date(Date.now() - 2 * 3600000).toISOString(),
      read: false,
      starred: false,
      hasAttachments: false
    },
    {
      id: 'email-004',
      subject: 'Weekly Staff Newsletter',
      preview: 'This week in hospital news: New parking policy, cafeteria menu updates...',
      sender: { email: 'newsletter@hospital.org', name: 'Communications', isInternal: true, trustScore: 60 },
      timestamp: new Date(Date.now() - 24 * 3600000).toISOString(),
      read: true,
      starred: false,
      hasAttachments: false
    }
  ];

  return emails.map(email => {
    const { priority, category, confidence, indicators } = analyzeEmail(
      email.subject, 
      email.preview, 
      email.sender as EmailSender
    );
    
    return {
      ...email,
      sender: email.sender as EmailSender,
      analysis: {
        priority,
        category,
        confidence,
        urgencyIndicators: indicators,
        estimatedResponseTime: priority === 'critical' ? 'Immediate' : 
                               priority === 'high' ? '< 2 hours' : 
                               priority === 'medium' ? '< 24 hours' : 'When available',
        requiresAction: priority === 'critical' || priority === 'high'
      }
    };
  });
};
```

---

### Implementation: Email Priority Badge

```tsx
// src/feature-module/components/ai/EmailPriorityBadge.tsx

import React from 'react';
import { Badge, Tooltip } from 'antd';
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
}

export const EmailPriorityBadge: React.FC<EmailPriorityBadgeProps> = ({ 
  analysis, 
  showDetails = false 
}) => {
  const config = PRIORITY_CONFIG[analysis.priority];

  const tooltipContent = (
    <div className="priority-tooltip">
      <div className="tooltip-header">
        <strong>{config.label} Priority</strong>
        <span className="confidence">{analysis.confidence}% confidence</span>
      </div>
      <div className="tooltip-body">
        <p><strong>Response Time:</strong> {analysis.estimatedResponseTime}</p>
        {analysis.urgencyIndicators.length > 0 && (
          <p><strong>Indicators:</strong> {analysis.urgencyIndicators.join(', ')}</p>
        )}
      </div>
    </div>
  );

  return (
    <Tooltip title={tooltipContent} placement="top">
      <Badge
        className="email-priority-badge"
        style={{ 
          backgroundColor: config.bgColor, 
          color: config.color,
          fontWeight: 600,
          fontSize: '11px',
          padding: '2px 8px',
          borderRadius: '4px'
        }}
        count={
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <i className={`ti ${config.icon}`} style={{ fontSize: '12px' }} />
            {showDetails && config.label}
          </span>
        }
      />
    </Tooltip>
  );
};

export default EmailPriorityBadge;
```

---

### Success Metrics

| Metric | Target |
|--------|--------|
| Email response time (critical) | 55% reduction |
| Priority classification accuracy | 80%+ |
| Missed urgent communications | 65% reduction |

---

## Feature 4: Smart Message Urgency Analyzer

### Problem Statement

Real-time chat messages in healthcare settings often contain time-sensitive clinical information. Without urgency indicators, critical messages like "Patient in Room 302 needs immediate assistance" appear identical to routine messages.

### AI Solution

Implement real-time message analysis that detects urgency keywords, displays visual urgency indicators, and provides AI-suggested quick responses based on message context.

---

### Implementation: Message Urgency Indicator

```tsx
// src/feature-module/components/ai/MessageUrgencyIndicator.tsx

import React, { useMemo } from 'react';
import { Tag, Tooltip } from 'antd';

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
  critical: ['stat', 'emergency', 'code', 'critical', 'immediate', 'now', 'life threatening'],
  high: ['urgent', 'asap', 'priority', 'important', 'quickly', 'soon'],
  normal: [],
  low: ['fyi', 'when you can', 'no rush', 'whenever', 'low priority']
};

interface MessageUrgencyIndicatorProps {
  message: string;
  showLabel?: boolean;
}

export const MessageUrgencyIndicator: React.FC<MessageUrgencyIndicatorProps> = ({ 
  message, 
  showLabel = true 
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

  // Don't show indicator for normal messages
  if (analysis.urgency === 'normal') return null;

  const config = URGENCY_CONFIG[analysis.urgency];

  return (
    <Tooltip title={`Detected: ${analysis.keywords.join(', ')}`}>
      <Tag
        style={{
          backgroundColor: config.bgColor,
          color: config.color,
          border: 'none',
          fontWeight: 600,
          fontSize: '10px'
        }}
      >
        <i className={`ti ${config.icon} me-1`} style={{ fontSize: '11px' }} />
        {showLabel && config.label}
      </Tag>
    </Tooltip>
  );
};

export default MessageUrgencyIndicator;
```

---

### Implementation: Quick Response Suggestions

```typescript
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
```

---

### Success Metrics

| Metric | Target |
|--------|--------|
| Response time to urgent messages | 50% faster |
| Urgency detection accuracy | 85%+ |
| Quick response feature adoption | 60%+ |

---

## Feature 5: AI Notification Grouping & Actions

### Problem Statement

The full notifications page displays items in a flat chronological list. Healthcare staff must manually scan through all notifications to find related items, making it difficult to batch-process similar alerts or understand notification patterns.

### AI Solution

Implement intelligent grouping that organizes notifications by category, patient, or criticality level, with bulk action capabilities and a visual timeline view.

---

### Implementation: Notification Page Component

```tsx
// src/feature-module/components/ai/NotificationPageAI.tsx

import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Collapse, Badge, Button, Segmented, Timeline, Empty, Spin, Statistic, Row, Col } from 'antd';
import { 
  fetchNotifications, 
  markAsRead,
  markAllAsRead,
  dismissNotification 
} from '../../../core/redux/notificationSlice';
import { 
  AnalyzedNotification, 
  NotificationCategory,
  NotificationCriticality 
} from '../../../core/ai/notificationTypes';
import { RootState, AppDispatch } from '../../../core/redux/store';

const CATEGORY_LABELS: Record<NotificationCategory, { label: string; icon: string }> = {
  'clinical-emergency': { label: '🚨 Clinical Emergency', icon: 'ti-alert-octagon' },
  'clinical-urgent': { label: '⚠️ Clinical Urgent', icon: 'ti-alert-triangle' },
  'clinical-routine': { label: '🏥 Clinical Routine', icon: 'ti-stethoscope' },
  'administrative-urgent': { label: '📋 Admin Urgent', icon: 'ti-file-alert' },
  'administrative-routine': { label: '📝 Admin Routine', icon: 'ti-file-text' },
  'system': { label: '⚙️ System', icon: 'ti-settings' },
  'communication': { label: '💬 Communication', icon: 'ti-message' }
};

const CRITICALITY_COLORS: Record<NotificationCriticality, string> = {
  critical: '#DC2626',
  high: '#F97316',
  medium: '#EAB308',
  low: '#22C55E',
  info: '#3B82F6'
};

type ViewMode = 'grouped' | 'timeline';

export const NotificationPageAI: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifications, unreadCount, criticalCount, loading } = useSelector(
    (state: RootState) => state.notifications
  );
  const [viewMode, setViewMode] = useState<ViewMode>('grouped');

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  // Group notifications by category
  const groupedByCategory = useMemo(() => {
    const groups: Record<NotificationCategory, AnalyzedNotification[]> = {} as any;
    
    notifications.forEach(notification => {
      if (!groups[notification.category]) {
        groups[notification.category] = [];
      }
      groups[notification.category].push(notification);
    });

    return groups;
  }, [notifications]);

  // Statistics
  const stats = useMemo(() => ({
    total: notifications.length,
    unread: unreadCount,
    critical: criticalCount,
    high: notifications.filter(n => n.criticality === 'high' && !n.read).length
  }), [notifications, unreadCount, criticalCount]);

  const handleMarkAllRead = (category?: NotificationCategory) => {
    if (category) {
      groupedByCategory[category]?.forEach(n => dispatch(markAsRead(n.id)));
    } else {
      dispatch(markAllAsRead());
    }
  };

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffMins < 1440) return `${Math.floor(diffMins / 60)}h ago`;
    return date.toLocaleDateString();
  };

  if (loading && notifications.length === 0) {
    return (
      <div className="page-wrapper">
        <div className="content d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
          <Spin size="large" />
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="content">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1">
              <i className="ti ti-bell me-2" />
              Notifications
            </h4>
            <p className="text-muted mb-0">AI-organized by priority and category</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <Segmented
              options={[
                { label: 'Grouped', value: 'grouped', icon: <i className="ti ti-layout-grid me-1" /> },
                { label: 'Timeline', value: 'timeline', icon: <i className="ti ti-timeline me-1" /> }
              ]}
              value={viewMode}
              onChange={(value) => setViewMode(value as ViewMode)}
            />
            <Button onClick={() => handleMarkAllRead()}>
              Mark All Read
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <Row gutter={16} className="mb-4">
          <Col span={6}>
            <Card>
              <Statistic 
                title="Total" 
                value={stats.total} 
                prefix={<i className="ti ti-bell" />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ borderLeft: `4px solid ${CRITICALITY_COLORS.critical}` }}>
              <Statistic 
                title="Critical" 
                value={stats.critical} 
                valueStyle={{ color: CRITICALITY_COLORS.critical }}
                prefix={<i className="ti ti-alert-octagon" />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ borderLeft: `4px solid ${CRITICALITY_COLORS.high}` }}>
              <Statistic 
                title="High Priority" 
                value={stats.high} 
                valueStyle={{ color: CRITICALITY_COLORS.high }}
                prefix={<i className="ti ti-alert-triangle" />}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic 
                title="Unread" 
                value={stats.unread} 
                prefix={<i className="ti ti-mail" />}
              />
            </Card>
          </Col>
        </Row>

        {notifications.length === 0 ? (
          <Card>
            <Empty description="No notifications" />
          </Card>
        ) : viewMode === 'grouped' ? (
          /* Grouped View */
          <Collapse 
            defaultActiveKey={['clinical-emergency', 'clinical-urgent']}
            className="notification-groups"
          >
            {Object.entries(groupedByCategory).map(([category, items]) => {
              const categoryConfig = CATEGORY_LABELS[category as NotificationCategory];
              const unreadInCategory = items.filter(n => !n.read).length;
              
              return (
                <Collapse.Panel
                  key={category}
                  header={
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <span>
                        <i className={`ti ${categoryConfig.icon} me-2`} />
                        {categoryConfig.label}
                      </span>
                      <div className="d-flex gap-2">
                        {unreadInCategory > 0 && (
                          <Badge count={unreadInCategory} style={{ backgroundColor: '#6366F1' }} />
                        )}
                        <Button 
                          size="small" 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleMarkAllRead(category as NotificationCategory);
                          }}
                        >
                          Mark All Read
                        </Button>
                      </div>
                    </div>
                  }
                >
                  {items.map(notification => (
                    <div 
                      key={notification.id}
                      className={`notification-item-full ${notification.read ? 'read' : 'unread'}`}
                      style={{ borderLeftColor: CRITICALITY_COLORS[notification.criticality] }}
                    >
                      <div className="notification-item-content">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-1">{notification.title}</h6>
                          <Badge 
                            count={notification.criticality.toUpperCase()}
                            style={{ 
                              backgroundColor: CRITICALITY_COLORS[notification.criticality],
                              fontSize: '10px'
                            }}
                          />
                        </div>
                        <p className="text-muted mb-2">{notification.message}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <small className="text-muted">
                            {notification.source.name} • {formatTime(notification.timestamp)}
                          </small>
                          <div className="notification-actions">
                            {notification.suggestedActions.slice(0, 2).map(action => (
                              <Button 
                                key={action.id}
                                size="small"
                                type={action.priority === 'danger' ? 'primary' : 'default'}
                                danger={action.priority === 'danger'}
                              >
                                {action.label}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Collapse.Panel>
              );
            })}
          </Collapse>
        ) : (
          /* Timeline View */
          <Card>
            <Timeline
              items={notifications.map(notification => ({
                color: CRITICALITY_COLORS[notification.criticality],
                children: (
                  <div className="timeline-item">
                    <div className="d-flex justify-content-between">
                      <strong>{notification.title}</strong>
                      <small className="text-muted">{formatTime(notification.timestamp)}</small>
                    </div>
                    <p className="text-muted mb-1">{notification.message}</p>
                    <small>{notification.source.name}</small>
                  </div>
                )
              }))}
            />
          </Card>
        )}
      </div>
    </div>
  );
};

export default NotificationPageAI;
```

---

### Success Metrics

| Metric | Target |
|--------|--------|
| Notification processing time | 45% reduction |
| Grouped view adoption | 75%+ |
| Response rate improvement | 30% increase |

---

## Feature 6: Email Smart Categorization

### Problem Statement

Healthcare staff spend significant time manually organizing emails into folders. Important clinical communications may be misfiled or lost in cluttered inboxes.

### AI Solution

Implement automatic email categorization that assigns folders based on content analysis, with smart folder suggestions and unread counts per category.

---

### Implementation: Email Categorization API

```typescript
// src/core/api/mock/emailCategorizationApi.ts

export type EmailFolder = 
  | 'inbox'
  | 'clinical'
  | 'administrative'
  | 'urgent'
  | 'lab-results'
  | 'referrals'
  | 'insurance';

interface FolderRule {
  keywords: string[];
  priority: number;
}

const FOLDER_RULES: Record<EmailFolder, FolderRule> = {
  urgent: {
    keywords: ['urgent', 'stat', 'critical', 'immediate', 'emergency', 'asap'],
    priority: 1
  },
  'lab-results': {
    keywords: ['lab', 'result', 'test', 'specimen', 'pathology', 'bloodwork'],
    priority: 2
  },
  referrals: {
    keywords: ['referral', 'consult', 'transfer', 'specialist'],
    priority: 3
  },
  insurance: {
    keywords: ['insurance', 'authorization', 'pre-auth', 'claim', 'coverage', 'denied'],
    priority: 4
  },
  clinical: {
    keywords: ['patient', 'diagnosis', 'treatment', 'medication', 'prescription'],
    priority: 5
  },
  administrative: {
    keywords: ['meeting', 'schedule', 'policy', 'training', 'hr', 'payroll'],
    priority: 6
  },
  inbox: {
    keywords: [],
    priority: 99
  }
};

export const categorizeEmail = (subject: string, preview: string): EmailFolder[] => {
  const content = `${subject} ${preview}`.toLowerCase();
  const matchedFolders: { folder: EmailFolder; priority: number }[] = [];

  Object.entries(FOLDER_RULES).forEach(([folder, rule]) => {
    if (rule.keywords.some(keyword => content.includes(keyword))) {
      matchedFolders.push({ folder: folder as EmailFolder, priority: rule.priority });
    }
  });

  // Sort by priority and return folders
  if (matchedFolders.length === 0) return ['inbox'];
  
  return matchedFolders
    .sort((a, b) => a.priority - b.priority)
    .map(m => m.folder);
};

export const getFolderCounts = (emails: Array<{ folders: EmailFolder[]; read: boolean }>) => {
  const counts: Record<EmailFolder, { total: number; unread: number }> = {
    inbox: { total: 0, unread: 0 },
    urgent: { total: 0, unread: 0 },
    clinical: { total: 0, unread: 0 },
    'lab-results': { total: 0, unread: 0 },
    referrals: { total: 0, unread: 0 },
    insurance: { total: 0, unread: 0 },
    administrative: { total: 0, unread: 0 }
  };

  emails.forEach(email => {
    email.folders.forEach(folder => {
      counts[folder].total++;
      if (!email.read) counts[folder].unread++;
    });
  });

  return counts;
};
```

---

### Implementation: Email Sidebar with Smart Folders

```tsx
// src/feature-module/components/ai/EmailSidebarAI.tsx

import React from 'react';
import { Badge, Menu } from 'antd';
import { EmailFolder } from '../../../core/api/mock/emailCategorizationApi';

interface FolderConfig {
  label: string;
  icon: string;
  color?: string;
}

const FOLDER_CONFIG: Record<EmailFolder, FolderConfig> = {
  inbox: { label: 'Inbox', icon: 'ti-inbox' },
  urgent: { label: 'Urgent', icon: 'ti-alert-triangle', color: '#DC2626' },
  clinical: { label: 'Clinical', icon: 'ti-stethoscope' },
  'lab-results': { label: 'Lab Results', icon: 'ti-flask' },
  referrals: { label: 'Referrals', icon: 'ti-share' },
  insurance: { label: 'Insurance', icon: 'ti-file-certificate' },
  administrative: { label: 'Administrative', icon: 'ti-folder' }
};

interface EmailSidebarAIProps {
  folderCounts: Record<EmailFolder, { total: number; unread: number }>;
  activeFolder: EmailFolder;
  onFolderChange: (folder: EmailFolder) => void;
}

export const EmailSidebarAI: React.FC<EmailSidebarAIProps> = ({
  folderCounts,
  activeFolder,
  onFolderChange
}) => {
  const menuItems = Object.entries(FOLDER_CONFIG).map(([folder, config]) => {
    const counts = folderCounts[folder as EmailFolder];
    
    return {
      key: folder,
      icon: <i className={`ti ${config.icon}`} style={{ color: config.color }} />,
      label: (
        <div className="d-flex justify-content-between align-items-center">
          <span style={{ color: config.color }}>{config.label}</span>
          {counts.unread > 0 && (
            <Badge 
              count={counts.unread} 
              style={{ 
                backgroundColor: config.color || '#6366F1',
                fontSize: '10px'
              }} 
            />
          )}
        </div>
      )
    };
  });

  return (
    <div className="email-sidebar-ai">
      <div className="sidebar-header mb-3">
        <h6 className="mb-0">
          <i className="ti ti-sparkles text-warning me-2" />
          Smart Folders
        </h6>
        <small className="text-muted">AI-organized</small>
      </div>
      
      <Menu
        mode="inline"
        selectedKeys={[activeFolder]}
        items={menuItems}
        onClick={({ key }) => onFolderChange(key as EmailFolder)}
      />
    </div>
  );
};

export default EmailSidebarAI;
```

---

### Success Metrics

| Metric | Target |
|--------|--------|
| Email organization time | 40% reduction |
| Auto-categorization accuracy | 85%+ |
| User satisfaction | 70%+ |

---

## Implementation Checklist

### Phase 1: Foundation (Week 1-2)

```
□ Create type definitions
  └── src/core/ai/notificationTypes.ts
  └── src/core/ai/emailTypes.ts

□ Create mock APIs
  └── src/core/api/mock/notificationMockApi.ts
  └── src/core/api/mock/emailMockApi.ts
  └── src/core/api/mock/emailCategorizationApi.ts

□ Create Redux slice
  └── src/core/redux/notificationSlice.ts

□ Update store configuration
  └── src/core/redux/store.tsx (add notification reducer)

□ Create SCSS styles
  └── src/style/scss/pages/_notification-ai.scss
  └── Import in src/style/scss/main.scss
```

### Phase 2: Core Components (Week 2-3)

```
□ Create AI components
  └── src/feature-module/components/ai/NotificationDropdownAI.tsx
  └── src/feature-module/components/ai/NotificationPageAI.tsx
  └── src/feature-module/components/ai/EmailPriorityBadge.tsx
  └── src/feature-module/components/ai/EmailInboxAI.tsx

□ Update header integration
  └── src/core/common/header/header.tsx
```

### Phase 3: Messaging (Week 3-4)

```
□ Create messaging components
  └── src/feature-module/components/ai/MessageUrgencyIndicator.tsx
  └── src/feature-module/components/ai/ChatConversationAI.tsx
  └── src/feature-module/components/ai/EmailSidebarAI.tsx

□ Integration testing
□ User acceptance testing
```

---

## Store Integration

Update `src/core/redux/store.tsx`:

```typescript
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import sidebarReducer from './sidebarSlice';
import aiReducer from './aiSlice';
import notificationReducer from './notificationSlice'; // Add this

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
    ai: aiReducer,
    notifications: notificationReducer, // Add this
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

## Expected Business Impact

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Critical notification response time | 5-10 min | 1-2 min | 80% |
| Missed urgent emails | 15% | 3% | 80% reduction |
| Staff time on notification management | 45 min/day | 15 min/day | 67% reduction |
| Patient safety incidents (delayed comms) | Baseline | -30% | Estimated |
| User satisfaction | 3.2/5 | 4.5/5 | 40% |

---

## File Structure Summary

```
src/
├── core/
│   ├── ai/
│   │   ├── notificationTypes.ts    ← NEW
│   │   ├── emailTypes.ts           ← NEW
│   │   └── types.ts                (existing)
│   ├── api/
│   │   └── mock/
│   │       ├── notificationMockApi.ts    ← NEW
│   │       ├── emailMockApi.ts           ← NEW
│   │       └── emailCategorizationApi.ts ← NEW
│   └── redux/
│       ├── notificationSlice.ts    ← NEW
│       └── store.tsx               (update)
├── feature-module/
│   └── components/
│       └── ai/
│           ├── NotificationDropdownAI.tsx  ← NEW
│           ├── NotificationPageAI.tsx      ← NEW
│           ├── EmailPriorityBadge.tsx      ← NEW
│           ├── EmailInboxAI.tsx            ← NEW
│           ├── MessageUrgencyIndicator.tsx ← NEW
│           └── EmailSidebarAI.tsx          ← NEW
└── style/
    └── scss/
        └── pages/
            └── _notification-ai.scss  ← NEW
```

---

*— End of Implementation Guide —*
