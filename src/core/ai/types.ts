// AI Feature Types for PreClinic Platform

// ============================================
// Feature 1: Smart Triage Priority Badge Types
// ============================================
export type TriagePriority = 1 | 2 | 3 | 4 | 5;

export interface VitalsData {
  heartRate?: number;
  bloodPressure?: { systolic: number; diastolic: number };
  temperature?: number;
  oxygenSaturation?: number;
  respiratoryRate?: number;
}

export interface AcuityScore {
  patientId: string;
  priority: TriagePriority;
  confidence: number;
  factors: string[];
  timestamp: number;
}

export interface TriageAssessmentRequest {
  patientId: string;
  symptoms: string[];
  vitals?: VitalsData;
  waitTime: number;
}

export interface TriageAssessmentResponse {
  priority: TriagePriority;
  confidence: number;
  factors: string[];
}

// ============================================
// Feature 2: AI Dashboard Personalization Types
// ============================================
export type UserRole = 'admin' | 'doctor' | 'nurse' | 'triage';

export interface WidgetSuggestion {
  widgetId: string;
  priority: number;
  reason: string;
}

export interface DashboardInteraction {
  userId: string;
  widgetId: string;
  action: 'view' | 'click' | 'expand' | 'collapse' | 'dismiss';
  timestamp: number;
}

export interface PersonalizedLayout {
  userId: string;
  role: UserRole;
  widgets: string[];
  aiSuggestions: WidgetSuggestion[];
}

// ============================================
// Feature 3: Intelligent Appointment Scheduler Types
// ============================================
export interface SlotFactors {
  providerPreference: number;
  patientConvenience: number;
  noShowRisk: number;
  waitTimeOptimal: number;
}

export interface SlotSuggestion {
  datetime: string;
  score: number;
  factors: SlotFactors;
  conflicts: string[];
  providerId: string;
  providerName: string;
}

export interface SchedulerRequest {
  patientId: string;
  appointmentType: string;
  preferredDateRange?: { start: string; end: string };
}

export interface SchedulerResponse {
  slots: SlotSuggestion[];
  patientPreferences: {
    preferredTime: string;
    historicalNoShowRate: number;
  };
}

// ============================================
// Feature 4: Clinical Alert Prediction System Types
// ============================================
export type RiskLevel = 'critical' | 'high' | 'moderate' | 'low';

export interface PredictiveAlert {
  id: string;
  patientId: string;
  patientName: string;
  patientImage: string;
  riskLevel: RiskLevel;
  predictedEvent: string;
  timeframe: string;
  confidence: number;
  contributingFactors: string[];
  recommendedActions: string[];
  timestamp: number;
}

export interface ClinicalAlertState {
  alerts: PredictiveAlert[];
  connected: boolean;
  lastUpdated: number;
}

// ============================================
// Feature 5: Smart Message Router Types
// ============================================
export type MessageUrgency = 'critical' | 'high' | 'normal' | 'low';

export interface SuggestedRecipient {
  id: string;
  name: string;
  role: string;
  avatar: string;
  relevance: number;
}

export interface MessageAnalysis {
  urgency: MessageUrgency;
  category: string;
  suggestedRecipients: SuggestedRecipient[];
  suggestedResponses: string[];
  sentiment: 'positive' | 'neutral' | 'negative' | 'urgent';
  keywords: string[];
}

// ============================================
// Redux State Types
// ============================================
export interface AIState {
  triage: {
    acuityScores: Record<string, AcuityScore>;
    loading: boolean;
    error: string | null;
  };
  dashboard: {
    personalizedLayout: PersonalizedLayout | null;
    interactions: DashboardInteraction[];
    loading: boolean;
  };
  scheduler: {
    suggestions: SlotSuggestion[];
    loading: boolean;
    selectedSlot: SlotSuggestion | null;
  };
  clinicalAlerts: ClinicalAlertState;
  messageRouter: {
    currentAnalysis: MessageAnalysis | null;
    analyzing: boolean;
  };
}
