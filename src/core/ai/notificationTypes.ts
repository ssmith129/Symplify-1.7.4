// src/core/ai/notificationTypes.ts
// Notification types for Symplify Platform AI-Enhanced Communication System

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
