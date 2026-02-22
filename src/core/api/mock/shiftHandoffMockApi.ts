/**
 * Feature 7: AI-Powered Shift Handoff - Mock API
 * Simulates API calls for shift handoff functionality with comprehensive SBAR generation
 */

// Generate unique IDs
const generateId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export interface PatientHandoff {
  patientId: string;
  patientName: string;
  room: string;
  age: number;
  admissionDate: string;
  primaryDiagnosis: string;
  priorityLevel: 'critical' | 'high' | 'moderate' | 'stable';
  sbar: {
    situation: string;
    background: string;
    assessment: string;
    recommendation: string;
  };
  vitalsTrend: {
    metric: string;
    values: number[];
    timestamps: string[];
    trend: 'improving' | 'stable' | 'declining';
  }[];
  recentEvents: {
    time: string;
    event: string;
    severity: 'info' | 'warning' | 'critical';
  }[];
  pendingTasks: string[];
  medications: {
    name: string;
    dose: string;
    nextDue: string;
    notes?: string;
  }[];
}

export interface ShiftHandoffReport {
  reportId: string;
  generatedAt: string;
  shiftType: 'day' | 'evening' | 'night';
  outgoingNurse: { id: string; name: string };
  incomingNurse: { id: string; name: string };
  unitName: string;
  totalPatients: number;
  criticalPatients: number;
  patients: PatientHandoff[];
  summaryNarrative: string;
  audioUrl?: string;
}

// Mock patient data generator
const generateMockPatientHandoff = (index: number): PatientHandoff => {
  const priorities: PatientHandoff['priorityLevel'][] = ['critical', 'high', 'moderate', 'stable'];
  const diagnoses = [
    'Pneumonia with respiratory distress',
    'Post-operative hip replacement - Day 2',
    'Diabetic ketoacidosis - resolving',
    'Congestive heart failure exacerbation',
    'Acute appendicitis - post-appendectomy',
    'Stroke - left MCA territory',
    'COPD exacerbation',
    'Sepsis - improving on antibiotics'
  ];

  const priority = priorities[Math.min(index, 3)];
  
  const sbarTemplates = {
    critical: {
      situation: 'Patient experiencing acute respiratory distress with SpO2 dropping to 88% on 4L NC. RR elevated to 28. Patient appears anxious and using accessory muscles.',
      background: '72-year-old male admitted 3 days ago with community-acquired pneumonia. History of COPD, HTN, and type 2 diabetes. Was stable on 2L NC until 2 hours ago.',
      assessment: 'Likely worsening pneumonia vs. new PE. Current ABG shows respiratory acidosis. Chest X-ray pending. Patient is at high risk for intubation.',
      recommendation: 'Increase O2 to high-flow NC, stat ABG in 1 hour, prepare for possible BiPAP or intubation. Notify physician immediately if SpO2 drops below 85%.'
    },
    high: {
      situation: 'Patient reporting increased pain at surgical site (7/10) despite scheduled pain medication. Mild fever of 100.8°F noted this shift.',
      background: '58-year-old female, POD 2 from total hip arthroplasty. No known allergies. Was ambulating well yesterday with PT.',
      assessment: 'Pain increase and low-grade fever concerning for possible surgical site infection. Incision appears slightly erythematous.',
      recommendation: 'Monitor temp q4h, obtain wound culture if drainage noted, contact orthopedics if fever persists. Continue current pain management protocol.'
    },
    moderate: {
      situation: 'Patient\'s blood glucose levels fluctuating between 180-320 mg/dL despite sliding scale insulin adjustments.',
      background: '45-year-old male admitted for DKA, now resolved. A1C on admission was 12.4%. New to insulin therapy.',
      assessment: 'Glycemic control improving but not yet optimal. Patient anxious about self-injection and carb counting.',
      recommendation: 'Continue current insulin regimen, diabetes educator consult scheduled for tomorrow. Reinforce teaching on injection technique.'
    },
    stable: {
      situation: 'Patient resting comfortably, vital signs stable throughout shift. Tolerating regular diet, ambulating independently.',
      background: '34-year-old female, POD 1 from laparoscopic cholecystectomy. No complications intraoperatively.',
      assessment: 'Recovering as expected. Pain well-controlled with oral medications. Ready for discharge pending surgeon evaluation.',
      recommendation: 'Continue current care plan. Anticipate discharge today after surgical team rounds. Ensure discharge instructions reviewed.'
    }
  };

  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
  const firstInitials = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  return {
    patientId: generateId(),
    patientName: `${firstInitials[index % 8]}. ${lastNames[index % 8]}`,
    room: `${Math.floor(200 + index * 2)}${['A', 'B'][index % 2]}`,
    age: 35 + Math.floor(Math.random() * 50),
    admissionDate: new Date(Date.now() - (Math.random() * 7 * 24 * 60 * 60 * 1000)).toISOString(),
    primaryDiagnosis: diagnoses[index % diagnoses.length],
    priorityLevel: priority,
    sbar: sbarTemplates[priority],
    vitalsTrend: [
      {
        metric: 'Heart Rate',
        values: Array.from({ length: 6 }, () => 70 + Math.floor(Math.random() * 30)),
        timestamps: Array.from({ length: 6 }, (_, i) =>
          new Date(Date.now() - (5 - i) * 2 * 60 * 60 * 1000).toISOString()
        ),
        trend: ['improving', 'stable', 'declining'][Math.floor(Math.random() * 3)] as 'improving' | 'stable' | 'declining'
      },
      {
        metric: 'Blood Pressure',
        values: Array.from({ length: 6 }, () => 110 + Math.floor(Math.random() * 40)),
        timestamps: Array.from({ length: 6 }, (_, i) =>
          new Date(Date.now() - (5 - i) * 2 * 60 * 60 * 1000).toISOString()
        ),
        trend: ['improving', 'stable', 'declining'][Math.floor(Math.random() * 3)] as 'improving' | 'stable' | 'declining'
      },
      {
        metric: 'SpO2',
        values: Array.from({ length: 6 }, () => 92 + Math.floor(Math.random() * 8)),
        timestamps: Array.from({ length: 6 }, (_, i) =>
          new Date(Date.now() - (5 - i) * 2 * 60 * 60 * 1000).toISOString()
        ),
        trend: priority === 'critical' ? 'declining' : 'stable'
      },
      {
        metric: 'Temperature',
        values: Array.from({ length: 6 }, () => 97.5 + Math.random() * 3),
        timestamps: Array.from({ length: 6 }, (_, i) =>
          new Date(Date.now() - (5 - i) * 2 * 60 * 60 * 1000).toISOString()
        ),
        trend: priority === 'high' ? 'declining' : 'stable'
      }
    ],
    recentEvents: [
      { time: '14:30', event: 'Medication administered - Lisinopril 10mg', severity: 'info' as const },
      { time: '12:00', event: 'Patient ambulated 100ft with assistance', severity: 'info' as const },
      { time: '10:15', event: 'Vital signs recorded', severity: 'info' as const },
      ...(priority === 'critical' ? [{ time: '15:45', event: 'Rapid Response Team called', severity: 'critical' as const }] : []),
      ...(priority === 'high' ? [{ time: '13:30', event: 'Physician notified of fever', severity: 'warning' as const }] : [])
    ],
    pendingTasks: [
      'Evening vitals due at 20:00',
      'Blood glucose check before dinner',
      ...(priority !== 'stable' ? ['Physician notification required'] : []),
      ...(priority === 'critical' ? ['Continuous SpO2 monitoring', 'Prepare for possible ICU transfer'] : [])
    ],
    medications: [
      { name: 'Metoprolol', dose: '25mg PO', nextDue: '20:00', notes: 'Hold if HR < 60' },
      { name: 'Insulin Glargine', dose: '20 units SC', nextDue: '21:00' },
      { name: 'Acetaminophen', dose: '650mg PO', nextDue: 'PRN', notes: 'Q6H for pain' },
      { name: 'Pantoprazole', dose: '40mg PO', nextDue: '08:00' }
    ]
  };
};

// Simulate AI narrative generation
const generateSummaryNarrative = (patients: PatientHandoff[]): string => {
  const critical = patients.filter(p => p.priorityLevel === 'critical').length;
  const high = patients.filter(p => p.priorityLevel === 'high').length;
  
  let narrative = `This shift report covers ${patients.length} patients on the Medical-Surgical unit. `;
  
  if (critical > 0) {
    narrative += `${critical} patient(s) require immediate attention and close monitoring. `;
  }
  
  if (high > 0) {
    narrative += `${high} patient(s) are flagged as high priority and may need intervention. `;
  }
  
  narrative += 'Key concerns this shift include ';
  
  const concerns: string[] = [];
  patients.forEach(p => {
    if (p.priorityLevel === 'critical') {
      concerns.push(`respiratory status monitoring for Room ${p.room}`);
    } else if (p.priorityLevel === 'high') {
      concerns.push(`pain management and fever watch in Room ${p.room}`);
    }
  });
  
  if (concerns.length > 0) {
    narrative += concerns.join(', ') + '. ';
  } else {
    narrative += 'routine monitoring and medication administration. ';
  }
  
  narrative += 'All scheduled medications have been administered. No falls or safety incidents occurred during this shift.';
  
  return narrative;
};

// Simulated delay for API calls
const simulateDelay = (ms: number = 500) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

// Mock API functions
export const shiftHandoffMockApi = {
  generateHandoffReport: async (params: {
    outgoingNurseId: string;
    incomingNurseId: string;
    shiftType: 'day' | 'evening' | 'night';
    unitId: string;
  }): Promise<ShiftHandoffReport> => {
    // Simulate API delay
    await simulateDelay(1500);

    const patientCount = 4 + Math.floor(Math.random() * 4);
    const patients = Array.from({ length: patientCount }, (_, i) => generateMockPatientHandoff(i));
    
    // Sort by priority
    patients.sort((a, b) => {
      const priorityOrder = { critical: 0, high: 1, moderate: 2, stable: 3 };
      return priorityOrder[a.priorityLevel] - priorityOrder[b.priorityLevel];
    });

    return {
      reportId: generateId(),
      generatedAt: new Date().toISOString(),
      shiftType: params.shiftType,
      outgoingNurse: { id: params.outgoingNurseId, name: 'Sarah Mitchell, RN' },
      incomingNurse: { id: params.incomingNurseId, name: 'James Chen, RN' },
      unitName: 'Medical-Surgical Unit 3B',
      totalPatients: patients.length,
      criticalPatients: patients.filter(p => p.priorityLevel === 'critical').length,
      patients,
      summaryNarrative: generateSummaryNarrative(patients),
      audioUrl: '/api/audio/handoff-summary.mp3'
    };
  },

  acknowledgeHandoff: async (reportId: string, nurseId: string): Promise<{ success: boolean; timestamp: string }> => {
    await simulateDelay(500);
    return {
      success: true,
      timestamp: new Date().toISOString()
    };
  },

  getHandoffHistory: async (nurseId: string, days: number = 7): Promise<ShiftHandoffReport[]> => {
    await simulateDelay(800);
    return []; // Return empty for mock
  },

  getPatientDetails: async (patientId: string): Promise<PatientHandoff | null> => {
    await simulateDelay(300);
    // Generate a mock patient for demonstration
    return generateMockPatientHandoff(0);
  },

  updatePatientNotes: async (patientId: string, notes: string): Promise<{ success: boolean }> => {
    await simulateDelay(400);
    return { success: true };
  }
};

// Export individual functions for backward compatibility
export const getShiftData = shiftHandoffMockApi.generateHandoffReport;
export const generateSBAR = async (patientId: string) => {
  const patient = generateMockPatientHandoff(0);
  return {
    patientId,
    ...patient.sbar,
    generatedAt: Date.now()
  };
};
export const completeHandoff = shiftHandoffMockApi.acknowledgeHandoff;
