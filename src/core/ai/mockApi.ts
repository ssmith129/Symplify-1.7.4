// Mock API Services for AI Features
// These simulate backend AI endpoints for frontend-only development

import type {
  TriageAssessmentRequest,
  TriageAssessmentResponse,
  TriagePriority,
  PersonalizedLayout,
  UserRole,
  SchedulerRequest,
  SchedulerResponse,
  SlotSuggestion,
  PredictiveAlert,
  MessageAnalysis,
  MessageUrgency,
} from './types';

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// ============================================
// Feature 1: Smart Triage Priority Assessment
// ============================================
const CRITICAL_SYMPTOMS = ['chest pain', 'difficulty breathing', 'severe bleeding', 'stroke symptoms', 'unconscious'];
const URGENT_SYMPTOMS = ['high fever', 'severe pain', 'head injury', 'abdominal pain', 'broken bone'];
const SEMI_URGENT_SYMPTOMS = ['moderate pain', 'vomiting', 'dizziness', 'infection signs', 'allergic reaction'];

export async function assessTriagePriority(request: TriageAssessmentRequest): Promise<TriageAssessmentResponse> {
  await delay(300 + Math.random() * 400);
  
  const { symptoms, vitals, waitTime } = request;
  const symptomsLower = symptoms.map(s => s.toLowerCase());
  
  let priority: TriagePriority = 4;
  const factors: string[] = [];
  
  // Check for critical symptoms
  if (symptomsLower.some(s => CRITICAL_SYMPTOMS.some(cs => s.includes(cs)))) {
    priority = 1;
    factors.push('Critical symptoms detected');
  } else if (symptomsLower.some(s => URGENT_SYMPTOMS.some(us => s.includes(us)))) {
    priority = 2;
    factors.push('Urgent symptoms present');
  } else if (symptomsLower.some(s => SEMI_URGENT_SYMPTOMS.some(ss => s.includes(ss)))) {
    priority = 3;
    factors.push('Semi-urgent condition');
  }
  
  // Vitals analysis
  if (vitals) {
    if (vitals.heartRate && (vitals.heartRate > 120 || vitals.heartRate < 50)) {
      priority = Math.min(priority, 2) as TriagePriority;
      factors.push('Abnormal heart rate');
    }
    if (vitals.oxygenSaturation && vitals.oxygenSaturation < 92) {
      priority = 1;
      factors.push('Low oxygen saturation');
    }
    if (vitals.temperature && vitals.temperature > 39.5) {
      priority = Math.min(priority, 2) as TriagePriority;
      factors.push('High fever');
    }
  }
  
  // Wait time escalation
  if (waitTime > 60 && priority > 2) {
    priority = Math.max(1, priority - 1) as TriagePriority;
    factors.push('Extended wait time');
  }
  
  if (factors.length === 0) {
    factors.push('Standard triage assessment');
  }
  
  const confidence = 75 + Math.random() * 20;
  
  return { priority, confidence: Math.round(confidence), factors };
}

// ============================================
// Feature 2: AI Dashboard Personalization
// ============================================
const ROLE_WIDGETS: Record<UserRole, string[]> = {
  admin: ['appointmentStats', 'revenueChart', 'staffSchedule', 'resourceUtilization', 'topDoctors', 'recentTransactions'],
  doctor: ['myAppointments', 'patientQueue', 'pendingPrescriptions', 'labResults', 'scheduleOverview', 'patientAlerts'],
  nurse: ['patientAcuity', 'medicationSchedule', 'vitalAlerts', 'shiftHandoff', 'bedStatus', 'taskList'],
  triage: ['waitingQueue', 'priorityPatients', 'bedAvailability', 'staffStatus', 'incomingPatients', 'alertsWidget']
};

export async function getPersonalizedLayout(userId: string, role: UserRole): Promise<PersonalizedLayout> {
  await delay(200 + Math.random() * 300);
  
  const baseWidgets = ROLE_WIDGETS[role] || ROLE_WIDGETS.admin;
  
  // Simulate AI suggestions based on time of day
  const hour = new Date().getHours();
  const aiSuggestions = [];
  
  if (hour < 12) {
    aiSuggestions.push({ widgetId: baseWidgets[0], priority: 1, reason: 'Morning priority item' });
  }
  if (role === 'nurse' && hour >= 6 && hour <= 8) {
    aiSuggestions.push({ widgetId: 'shiftHandoff', priority: 1, reason: 'Shift change detected' });
  }
  if (role === 'doctor') {
    aiSuggestions.push({ widgetId: 'patientQueue', priority: 2, reason: `${Math.floor(Math.random() * 5 + 3)} patients waiting` });
  }
  
  return {
    userId,
    role,
    widgets: baseWidgets,
    aiSuggestions
  };
}

// ============================================
// Feature 3: Intelligent Appointment Scheduler
// ============================================
const DOCTORS = [
  { id: 'd1', name: 'Dr. Alex Morgan' },
  { id: 'd2', name: 'Dr. Sarah Johnson' },
  { id: 'd3', name: 'Dr. Emily Carter' },
  { id: 'd4', name: 'Dr. David Lee' },
];

export async function getSmartSlotSuggestions(request: SchedulerRequest): Promise<SchedulerResponse> {
  await delay(400 + Math.random() * 500);
  
  const slots: SlotSuggestion[] = [];
  const baseDate = new Date();
  
  // Generate 6 AI-suggested slots
  for (let i = 0; i < 6; i++) {
    const slotDate = new Date(baseDate);
    slotDate.setDate(slotDate.getDate() + Math.floor(i / 2) + 1);
    slotDate.setHours(9 + (i % 4) * 2, i % 2 === 0 ? 0 : 30, 0, 0);
    
    const doctor = DOCTORS[i % DOCTORS.length];
    const score = 5 - (i * 0.5);
    const noShowRisk = 10 + Math.random() * 25;
    
    slots.push({
      datetime: slotDate.toISOString(),
      score: Math.max(1, Math.round(score)),
      factors: {
        providerPreference: 70 + Math.random() * 30,
        patientConvenience: 60 + Math.random() * 40,
        noShowRisk,
        waitTimeOptimal: 75 + Math.random() * 25
      },
      conflicts: i === 3 ? ['Near lunch break'] : [],
      providerId: doctor.id,
      providerName: doctor.name
    });
  }
  
  return {
    slots: slots.sort((a, b) => b.score - a.score),
    patientPreferences: {
      preferredTime: 'Morning',
      historicalNoShowRate: 8 + Math.random() * 12
    }
  };
}

// ============================================
// Feature 4: Clinical Alert Prediction System
// ============================================
const PATIENT_NAMES = [
  { name: 'Maria Santos', image: 'user-01.jpg' },
  { name: 'James Wilson', image: 'user-02.jpg' },
  { name: 'Emily Chen', image: 'user-03.jpg' },
  { name: 'Robert Johnson', image: 'user-04.jpg' },
];

const PREDICTED_EVENTS = [
  'Sepsis risk elevation',
  'Cardiac arrhythmia warning',
  'Respiratory distress prediction',
  'Blood glucose instability',
  'Fall risk increase',
  'Medication interaction alert'
];

const RECOMMENDED_ACTIONS = [
  ['Order blood cultures immediately', 'Start empiric antibiotics', 'Increase monitoring frequency'],
  ['Continuous ECG monitoring', 'Cardiology consult', 'Review current medications'],
  ['Oxygen therapy assessment', 'Respiratory therapy consult', 'ABG analysis'],
  ['Blood glucose monitoring q1h', 'Insulin adjustment review', 'Endocrinology consult'],
  ['Implement fall precautions', 'Bed alarm activation', 'Physical therapy evaluation'],
  ['Pharmacy review', 'Hold conflicting medications', 'Monitor for adverse effects']
];

export async function getClinicalAlerts(): Promise<PredictiveAlert[]> {
  await delay(300 + Math.random() * 400);
  
  const alerts: PredictiveAlert[] = [];
  const numAlerts = 2 + Math.floor(Math.random() * 3);
  
  for (let i = 0; i < numAlerts; i++) {
    const eventIndex = Math.floor(Math.random() * PREDICTED_EVENTS.length);
    const patient = PATIENT_NAMES[i % PATIENT_NAMES.length];
    const riskLevels: Array<'critical' | 'high' | 'moderate' | 'low'> = ['critical', 'high', 'moderate', 'low'];
    const riskLevel = riskLevels[Math.min(i, 3)];
    
    alerts.push({
      id: `alert-${Date.now()}-${i}`,
      patientId: `patient-${i + 1}`,
      patientName: patient.name,
      patientImage: patient.image,
      riskLevel,
      predictedEvent: PREDICTED_EVENTS[eventIndex],
      timeframe: `${2 + Math.floor(Math.random() * 4)} hours`,
      confidence: 70 + Math.floor(Math.random() * 25),
      contributingFactors: [
        'Vital sign trends',
        'Lab result patterns',
        'Historical data analysis'
      ].slice(0, 2 + Math.floor(Math.random() * 2)),
      recommendedActions: RECOMMENDED_ACTIONS[eventIndex],
      timestamp: Date.now()
    });
  }
  
  return alerts;
}

// ============================================
// Feature 5: Smart Message Router Analysis
// ============================================
const RECIPIENTS = [
  { id: 'r1', name: 'Dr. Sarah Johnson', role: 'Attending Physician', avatar: 'doctor-01.jpg' },
  { id: 'r2', name: 'Nurse Emily', role: 'Charge Nurse', avatar: 'user-05.jpg' },
  { id: 'r3', name: 'Dr. Michael Chen', role: 'Specialist', avatar: 'doctor-02.jpg' },
  { id: 'r4', name: 'Admin Staff', role: 'Administration', avatar: 'user-06.jpg' },
];

const URGENT_KEYWORDS = ['urgent', 'emergency', 'critical', 'immediate', 'asap', 'stat'];
const CLINICAL_KEYWORDS = ['patient', 'medication', 'prescription', 'diagnosis', 'treatment', 'lab', 'vitals'];
const ADMIN_KEYWORDS = ['schedule', 'appointment', 'billing', 'insurance', 'records', 'documentation'];

export async function analyzeMessage(content: string): Promise<MessageAnalysis> {
  await delay(200 + Math.random() * 300);
  
  const contentLower = content.toLowerCase();
  const words = contentLower.split(/\s+/);
  
  // Determine urgency
  let urgency: MessageUrgency = 'normal';
  if (URGENT_KEYWORDS.some(k => contentLower.includes(k))) {
    urgency = contentLower.includes('emergency') || contentLower.includes('critical') ? 'critical' : 'high';
  } else if (content.includes('!') || content.includes('?')) {
    urgency = 'normal';
  } else {
    urgency = 'low';
  }
  
  // Determine category
  let category = 'General';
  if (CLINICAL_KEYWORDS.some(k => contentLower.includes(k))) {
    category = 'Clinical';
  } else if (ADMIN_KEYWORDS.some(k => contentLower.includes(k))) {
    category = 'Administrative';
  }
  
  // Suggest recipients based on content
  const suggestedRecipients = RECIPIENTS
    .map(r => ({
      ...r,
      relevance: Math.floor(50 + Math.random() * 50)
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 3);
  
  // If clinical, prioritize doctors
  if (category === 'Clinical') {
    suggestedRecipients.sort((a, b) => {
      if (a.role.includes('Physician') || a.role.includes('Specialist')) return -1;
      if (b.role.includes('Physician') || b.role.includes('Specialist')) return 1;
      return 0;
    });
  }
  
  // Generate suggested responses
  const suggestedResponses: string[] = [];
  if (category === 'Clinical') {
    suggestedResponses.push(
      'I will review the patient records and get back to you shortly.',
      'Please provide the patient ID for further assessment.',
      'Acknowledged. Initiating clinical protocol.'
    );
  } else if (category === 'Administrative') {
    suggestedResponses.push(
      'I will check the schedule and confirm availability.',
      'The documentation has been processed.',
      'Please allow 24-48 hours for processing.'
    );
  } else {
    suggestedResponses.push(
      'Thank you for reaching out. I will respond shortly.',
      'Received. I will look into this.',
      'Acknowledged. Will follow up soon.'
    );
  }
  
  // Determine sentiment
  const sentiment = urgency === 'critical' || urgency === 'high' ? 'urgent' : 'neutral';
  
  // Extract keywords
  const keywords = words
    .filter(w => w.length > 4)
    .filter(w => [...CLINICAL_KEYWORDS, ...ADMIN_KEYWORDS, ...URGENT_KEYWORDS].some(k => w.includes(k)))
    .slice(0, 5);
  
  return {
    urgency,
    category,
    suggestedRecipients,
    suggestedResponses,
    sentiment,
    keywords
  };
}

// ============================================
// Mock WebSocket for Real-time Alerts
// ============================================
type AlertCallback = (alerts: PredictiveAlert[]) => void;

class MockAlertWebSocket {
  private callback: AlertCallback | null = null;
  private interval: ReturnType<typeof setInterval> | null = null;
  private connected = false;

  connect(onAlerts: AlertCallback) {
    this.callback = onAlerts;
    this.connected = true;
    
    // Initial alerts
    getClinicalAlerts().then(alerts => {
      if (this.callback && this.connected) {
        this.callback(alerts);
      }
    });
    
    // Periodic updates
    this.interval = setInterval(() => {
      if (this.callback && this.connected) {
        getClinicalAlerts().then(alerts => {
          if (this.callback && this.connected) {
            this.callback(alerts);
          }
        });
      }
    }, 30000); // Update every 30 seconds
    
    return () => this.disconnect();
  }

  disconnect() {
    this.connected = false;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.callback = null;
  }

  isConnected() {
    return this.connected;
  }
}

export const alertWebSocket = new MockAlertWebSocket();

// ============================================
// Feature 6: Intelligent Calendar Scheduling
// ============================================
export interface CalendarSlot {
  id: string;
  datetime: string;
  endTime: string;
  providerId: string;
  providerName: string;
  providerImage: string;
  matchScore: number;
  noShowRisk: number;
  factors: {
    providerAvailability: number;
    patientConvenience: number;
    historicalSuccess: number;
    resourceOptimization: number;
  };
  appointmentType: string;
  status: 'available' | 'recommended' | 'limited';
}

export interface CalendarDaySlots {
  date: string;
  slots: CalendarSlot[];
  dayInsights: {
    totalSlots: number;
    optimalSlots: number;
    averageNoShowRisk: number;
    busyPeriods: string[];
  };
}

const PROVIDER_DATA = [
  { id: 'd1', name: 'Dr. Alex Morgan', image: 'assets/img/users/user-01.jpg', specialty: 'General Practice' },
  { id: 'd2', name: 'Dr. Sarah Johnson', image: 'assets/img/users/user-02.jpg', specialty: 'Internal Medicine' },
  { id: 'd3', name: 'Dr. Emily Carter', image: 'assets/img/users/user-03.jpg', specialty: 'Pediatrics' },
  { id: 'd4', name: 'Dr. David Lee', image: 'assets/img/users/user-04.jpg', specialty: 'Cardiology' },
  { id: 'd5', name: 'Dr. Maria Santos', image: 'assets/img/users/user-05.jpg', specialty: 'Dermatology' },
];

const APPOINTMENT_TYPES = [
  'General Consultation',
  'Follow-up Visit',
  'Annual Physical',
  'Specialist Referral',
  'Urgent Care',
  'Telehealth Visit',
];

export async function getCalendarDaySlots(date: string): Promise<CalendarDaySlots> {
  await delay(300 + Math.random() * 400);

  const selectedDate = new Date(date);
  const dayOfWeek = selectedDate.getDay();

  // Weekend has fewer slots
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const numSlots = isWeekend ? 3 + Math.floor(Math.random() * 3) : 6 + Math.floor(Math.random() * 4);

  const slots: CalendarSlot[] = [];
  const startHour = 8; // 8 AM
  const endHour = 17; // 5 PM

  for (let i = 0; i < numSlots; i++) {
    const provider = PROVIDER_DATA[i % PROVIDER_DATA.length];
    const hour = startHour + Math.floor((i / numSlots) * (endHour - startHour));
    const minute = Math.random() > 0.5 ? 0 : 30;

    const slotDate = new Date(selectedDate);
    slotDate.setHours(hour, minute, 0, 0);

    const endDate = new Date(slotDate);
    endDate.setMinutes(endDate.getMinutes() + 30);

    const matchScore = Math.round(60 + Math.random() * 40);
    const noShowRisk = Math.round(5 + Math.random() * 30);

    // Determine status based on scores
    let status: 'available' | 'recommended' | 'limited' = 'available';
    if (matchScore >= 85 && noShowRisk < 15) {
      status = 'recommended';
    } else if (matchScore < 70 || noShowRisk > 25) {
      status = 'limited';
    }

    slots.push({
      id: `slot-${date}-${i}`,
      datetime: slotDate.toISOString(),
      endTime: endDate.toISOString(),
      providerId: provider.id,
      providerName: provider.name,
      providerImage: provider.image,
      matchScore,
      noShowRisk,
      factors: {
        providerAvailability: Math.round(70 + Math.random() * 30),
        patientConvenience: Math.round(60 + Math.random() * 40),
        historicalSuccess: Math.round(75 + Math.random() * 25),
        resourceOptimization: Math.round(65 + Math.random() * 35),
      },
      appointmentType: APPOINTMENT_TYPES[Math.floor(Math.random() * APPOINTMENT_TYPES.length)],
      status,
    });
  }

  // Sort by match score
  slots.sort((a, b) => b.matchScore - a.matchScore);

  // Calculate day insights
  const avgNoShowRisk = slots.reduce((sum, s) => sum + s.noShowRisk, 0) / slots.length;
  const optimalSlots = slots.filter(s => s.status === 'recommended').length;

  const busyPeriods: string[] = [];
  if (Math.random() > 0.5) busyPeriods.push('11:00 AM - 12:00 PM');
  if (Math.random() > 0.6) busyPeriods.push('2:00 PM - 3:00 PM');

  return {
    date,
    slots,
    dayInsights: {
      totalSlots: slots.length,
      optimalSlots,
      averageNoShowRisk: Math.round(avgNoShowRisk),
      busyPeriods,
    },
  };
}

export interface BookedAppointment {
  id: string;
  title: string;
  start: string;
  end: string;
  providerId: string;
  providerName: string;
  providerImage: string;
  patientName: string;
  appointmentType: string;
  matchScore: number;
  noShowRisk: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}

export async function bookCalendarSlot(
  slot: CalendarSlot,
  patientName: string = 'Patient'
): Promise<BookedAppointment> {
  await delay(400 + Math.random() * 300);

  return {
    id: `apt-${Date.now()}`,
    title: `${patientName} - ${slot.appointmentType}`,
    start: slot.datetime,
    end: slot.endTime,
    providerId: slot.providerId,
    providerName: slot.providerName,
    providerImage: slot.providerImage,
    patientName,
    appointmentType: slot.appointmentType,
    matchScore: slot.matchScore,
    noShowRisk: slot.noShowRisk,
    status: 'confirmed',
  };
}

// ============================================
// Feature 7: AI Assistance Agent
// ============================================
export type UserRoleType = 'doctor' | 'nurse' | 'admin';

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  actions?: AIAction[];
  navigationLink?: string;
}

export interface AIAction {
  id: string;
  label: string;
  type: 'navigation' | 'appointment' | 'action' | 'info';
  payload?: Record<string, unknown>;
  icon?: string;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: string;
  prompt: string;
  roles: UserRoleType[];
}

export interface AIConversationResponse {
  message: AIMessage;
  suggestedActions?: AIAction[];
}

// Quick actions by role
const QUICK_ACTIONS: QuickAction[] = [
  // Doctor actions
  { id: 'qa-1', label: 'View My Schedule', icon: 'ti-calendar', prompt: 'Show me my schedule for today', roles: ['doctor'] },
  { id: 'qa-2', label: 'Patient Queue', icon: 'ti-users', prompt: 'Show my patient queue', roles: ['doctor'] },
  { id: 'qa-3', label: 'Write Prescription', icon: 'ti-prescription', prompt: 'Help me write a prescription', roles: ['doctor'] },
  { id: 'qa-4', label: 'Lab Results', icon: 'ti-flask', prompt: 'Show pending lab results', roles: ['doctor'] },

  // Nurse actions
  { id: 'qa-5', label: 'Patient Vitals', icon: 'ti-heartbeat', prompt: 'Record patient vitals', roles: ['nurse'] },
  { id: 'qa-6', label: 'Medication Schedule', icon: 'ti-pill', prompt: 'Show medication schedule', roles: ['nurse'] },
  { id: 'qa-7', label: 'Shift Handoff', icon: 'ti-transfer', prompt: 'Prepare shift handoff report', roles: ['nurse'] },
  { id: 'qa-8', label: 'Bed Status', icon: 'ti-bed', prompt: 'Show current bed availability', roles: ['nurse'] },

  // Admin actions
  { id: 'qa-9', label: 'Daily Reports', icon: 'ti-report', prompt: 'Generate daily reports', roles: ['admin'] },
  { id: 'qa-10', label: 'Staff Schedule', icon: 'ti-calendar-time', prompt: 'Show staff schedule', roles: ['admin'] },
  { id: 'qa-11', label: 'Revenue Overview', icon: 'ti-chart-bar', prompt: 'Show revenue overview', roles: ['admin'] },
  { id: 'qa-12', label: 'Pending Approvals', icon: 'ti-checkbox', prompt: 'Show pending approvals', roles: ['admin'] },

  // Common actions
  { id: 'qa-13', label: 'Schedule Appointment', icon: 'ti-calendar-plus', prompt: 'Help me schedule an appointment', roles: ['doctor', 'nurse', 'admin'] },
  { id: 'qa-14', label: 'Find Patient', icon: 'ti-search', prompt: 'Help me find a patient', roles: ['doctor', 'nurse', 'admin'] },
  { id: 'qa-15', label: 'Navigate Platform', icon: 'ti-compass', prompt: 'Help me navigate the platform', roles: ['doctor', 'nurse', 'admin'] },
];

// Navigation mapping
const NAVIGATION_MAP: Record<string, { path: string; description: string }> = {
  'dashboard': { path: '/dashboard', description: 'Main Dashboard' },
  'appointments': { path: '/appointments', description: 'Appointments' },
  'calendar': { path: '/application/calendar', description: 'Calendar' },
  'patients': { path: '/patients', description: 'Patient List' },
  'doctors': { path: '/doctors', description: 'Doctor List' },
  'messages': { path: '/messages', description: 'Messages' },
  'reports': { path: '/accounts/invoices', description: 'Reports & Invoices' },
  'settings': { path: '/settings/profile-settings', description: 'Settings' },
  'pharmacy': { path: '/pharmacy', description: 'Pharmacy' },
  'lab': { path: '/lab', description: 'Laboratory' },
};

// Response templates for different intents
const RESPONSE_TEMPLATES = {
  greeting: [
    "Hello! I'm your AI Assistant for Symplify. How can I help you today?",
    "Hi there! I'm here to help you with appointments, navigation, and quick actions. What do you need?",
    "Welcome! I can help you schedule appointments, find information, or navigate the platform. What would you like to do?",
  ],

  scheduling: [
    "I can help you schedule an appointment. Here are the available options:",
    "Let me help you with scheduling. I'll find the best available slots for you.",
    "Sure! I'll assist you with appointment scheduling. What type of appointment do you need?",
  ],

  navigation: [
    "I can help you navigate to any section of the platform. Here are some quick links:",
    "Where would you like to go? I can take you to any page in the system.",
    "Let me help you find what you're looking for. Here are the main sections:",
  ],

  patientSearch: [
    "I can help you find patient information. Please provide the patient name or ID.",
    "Let me search for the patient. What details do you have?",
    "I'll help you locate the patient record. Please share any identifying information.",
  ],

  schedule: [
    "Here's your schedule overview for today. You have several appointments lined up.",
    "Let me pull up your schedule. I can see your upcoming appointments.",
    "Your schedule is ready. Here's what you have planned:",
  ],

  fallback: [
    "I understand you need help with that. Let me provide some options:",
    "I can assist with that. Here are some things I can help you with:",
    "Sure, I'm here to help. Here's what I can do for you:",
  ],
};

// Intent detection patterns
const INTENT_PATTERNS = {
  greeting: /^(hi|hello|hey|good morning|good afternoon|good evening|greetings)/i,
  scheduling: /(schedule|book|appointment|reschedule|cancel appointment|make an appointment)/i,
  navigation: /(go to|navigate|take me|open|show me|where is|find the)/i,
  patientSearch: /(find patient|search patient|patient.*record|look up patient)/i,
  schedule: /(my schedule|my appointments|what do I have|my day|my calendar)/i,
  help: /(help|what can you do|assist|support)/i,
};

function detectIntent(message: string): keyof typeof RESPONSE_TEMPLATES {
  const lowerMessage = message.toLowerCase();

  for (const [intent, pattern] of Object.entries(INTENT_PATTERNS)) {
    if (pattern.test(lowerMessage)) {
      return intent as keyof typeof RESPONSE_TEMPLATES;
    }
  }

  return 'fallback';
}

function getRandomResponse(intent: keyof typeof RESPONSE_TEMPLATES): string {
  const responses = RESPONSE_TEMPLATES[intent];
  return responses[Math.floor(Math.random() * responses.length)];
}

function extractNavigationTarget(message: string): string | null {
  const lowerMessage = message.toLowerCase();

  for (const [key, value] of Object.entries(NAVIGATION_MAP)) {
    if (lowerMessage.includes(key) || lowerMessage.includes(value.description.toLowerCase())) {
      return key;
    }
  }

  return null;
}

function generateActions(intent: string, message: string): AIAction[] {
  const actions: AIAction[] = [];

  switch (intent) {
    case 'scheduling':
      actions.push(
        { id: 'act-1', label: 'New Appointment', type: 'appointment', icon: 'ti-calendar-plus' },
        { id: 'act-2', label: 'View Calendar', type: 'navigation', payload: { path: '/application/calendar' }, icon: 'ti-calendar' },
        { id: 'act-3', label: 'Reschedule Existing', type: 'appointment', icon: 'ti-calendar-event' },
      );
      break;

    case 'navigation':
      const target = extractNavigationTarget(message);
      if (target && NAVIGATION_MAP[target]) {
        actions.push({
          id: 'nav-1',
          label: `Go to ${NAVIGATION_MAP[target].description}`,
          type: 'navigation',
          payload: { path: NAVIGATION_MAP[target].path },
          icon: 'ti-arrow-right',
        });
      } else {
        // Provide common navigation options
        actions.push(
          { id: 'nav-1', label: 'Dashboard', type: 'navigation', payload: { path: '/dashboard' }, icon: 'ti-dashboard' },
          { id: 'nav-2', label: 'Appointments', type: 'navigation', payload: { path: '/appointments' }, icon: 'ti-calendar' },
          { id: 'nav-3', label: 'Patients', type: 'navigation', payload: { path: '/patients' }, icon: 'ti-users' },
          { id: 'nav-4', label: 'Calendar', type: 'navigation', payload: { path: '/application/calendar' }, icon: 'ti-calendar-event' },
        );
      }
      break;

    case 'patientSearch':
      actions.push(
        { id: 'ps-1', label: 'Search Patients', type: 'navigation', payload: { path: '/patients' }, icon: 'ti-search' },
        { id: 'ps-2', label: 'Recent Patients', type: 'info', icon: 'ti-history' },
      );
      break;

    case 'schedule':
      actions.push(
        { id: 'sch-1', label: 'Today\'s Appointments', type: 'navigation', payload: { path: '/appointments' }, icon: 'ti-calendar-check' },
        { id: 'sch-2', label: 'View Full Calendar', type: 'navigation', payload: { path: '/application/calendar' }, icon: 'ti-calendar' },
        { id: 'sch-3', label: 'Add Appointment', type: 'appointment', icon: 'ti-plus' },
      );
      break;

    case 'help':
    case 'greeting':
    case 'fallback':
    default:
      actions.push(
        { id: 'help-1', label: 'Schedule Appointment', type: 'appointment', icon: 'ti-calendar-plus' },
        { id: 'help-2', label: 'Navigate Platform', type: 'info', icon: 'ti-compass' },
        { id: 'help-3', label: 'Quick Actions', type: 'info', icon: 'ti-bolt' },
      );
      break;
  }

  return actions;
}

export function getQuickActions(role: UserRoleType): QuickAction[] {
  return QUICK_ACTIONS.filter(action => action.roles.includes(role));
}

export async function sendAIMessage(
  message: string,
  conversationHistory: AIMessage[],
  userRole: UserRoleType
): Promise<AIConversationResponse> {
  // Simulate API delay with typing effect
  await delay(800 + Math.random() * 1200);

  const intent = detectIntent(message);
  const responseText = getRandomResponse(intent);
  const actions = generateActions(intent, message);

  // Check for navigation target
  let navigationLink: string | undefined;
  if (intent === 'navigation') {
    const target = extractNavigationTarget(message);
    if (target && NAVIGATION_MAP[target]) {
      navigationLink = NAVIGATION_MAP[target].path;
    }
  }

  const response: AIMessage = {
    id: `msg-${Date.now()}`,
    role: 'assistant',
    content: responseText,
    timestamp: Date.now(),
    actions,
    navigationLink,
  };

  return {
    message: response,
    suggestedActions: actions,
  };
}

export async function executeAIAction(
  action: AIAction,
  userRole: UserRoleType
): Promise<{ success: boolean; message: string; data?: unknown }> {
  await delay(300 + Math.random() * 500);

  switch (action.type) {
    case 'navigation':
      return {
        success: true,
        message: `Navigating to ${action.label}`,
        data: action.payload,
      };

    case 'appointment':
      return {
        success: true,
        message: 'Opening appointment scheduler...',
        data: { redirectTo: '/application/calendar' },
      };

    case 'action':
      return {
        success: true,
        message: `Executing: ${action.label}`,
      };

    case 'info':
      return {
        success: true,
        message: `Here's the information you requested about ${action.label}`,
      };

    default:
      return {
        success: false,
        message: 'Unknown action type',
      };
  }
}
