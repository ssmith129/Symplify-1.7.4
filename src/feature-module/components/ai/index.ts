// AI Components Index - PreClinic Platform
// Export all AI-enhanced components for easy imports

// Feature 1: Smart Triage Priority Badge
export { default as TriagePriorityBadge } from './TriagePriorityBadge';

// Feature 2: AI Dashboard Personalization
export {
  default as AIDashboardSection,
  SmartWidget,
  PatientAcuityWidget,
  PatientQueueWidget,
  AIInsightsWidget,
} from './AIDashboardWidgets';

// Feature 3: Intelligent Appointment Scheduler
export { default as SmartScheduler } from './SmartScheduler';

// Feature 4: Clinical Alert Prediction System
export { default as ClinicalAlertWidget } from './ClinicalAlertWidget';

// Feature 5: Smart Message Router
export { default as SmartMessageRouter } from './SmartMessageRouter';

// Feature 6: Intelligent Appointment Calendar
export { default as IntelligentCalendar } from './IntelligentCalendar';

// Feature 7: AI Assistant Popup
export { default as AIAssistantPopup } from './AIAssistantPopup';

// Feature 7: AI-Powered Shift Handoff
export {
  ShiftHandoffSummary,
  SBARGenerator,
  PatientHandoffCard,
  HandoffTimeline,
  ShiftHandoffWidget,
} from './shift-handoff';

// Feature 9: Voice Documentation Assistant
export {
  VoiceRecorder,
  TranscriptionEditor,
  NoteFormatter,
  MedicalTermsHighlighter,
} from './voice-documentation';

// Feature 10: Drug Interaction Checker
export {
  DrugInteractionChecker,
  InteractionAlert,
  MedicationReviewPanel,
  SeverityBadge,
} from './drug-interaction';
