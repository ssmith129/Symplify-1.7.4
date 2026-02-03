// src/core/api/mock/emailMockApi.ts
// Mock API for Symplify Platform AI-Enhanced Email Priority Detection

import { AnalyzedEmail, EmailPriority, EmailCategory, EmailSender, EmailFolder } from '../../ai/emailTypes';

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

// Email categorization
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
