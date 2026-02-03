/**
 * Feature 9: Voice Documentation Assistant - Mock API
 * Simulates API calls for voice transcription and note formatting
 */

import type {
  TranscriptionResult,
  MedicalTerm,
  NoteFormat,
} from '../../redux/voiceDocSlice';

// Simulated delay for API calls
const simulateDelay = (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Mock medical terms database
const mockMedicalTerms: MedicalTerm[] = [
  {
    term: 'hypertension',
    category: 'diagnosis',
    definition: 'High blood pressure',
    startIndex: 0,
    endIndex: 12,
  },
  {
    term: 'metformin',
    category: 'medication',
    definition: 'Oral diabetes medication',
    startIndex: 0,
    endIndex: 9,
  },
  {
    term: 'tachycardia',
    category: 'symptom',
    definition: 'Rapid heart rate',
    startIndex: 0,
    endIndex: 11,
  },
];

/**
 * Transcribe audio to text
 */
export const transcribeAudio = async (
  audioBlob: Blob
): Promise<TranscriptionResult> => {
  await simulateDelay(2000); // Simulate longer processing time
  
  const mockTranscription =
    'Patient presents with hypertension and reports taking metformin daily. ' +
    'Physical examination reveals mild tachycardia.';

  const detectedTerms = findMedicalTerms(mockTranscription);

  return {
    id: `trans-${Date.now()}`,
    rawText: mockTranscription,
    medicalTerms: detectedTerms,
    confidence: 0.92,
    timestamp: Date.now(),
  };
};

/**
 * Find medical terms in text
 */
const findMedicalTerms = (text: string): MedicalTerm[] => {
  const terms: MedicalTerm[] = [];
  const lowerText = text.toLowerCase();

  mockMedicalTerms.forEach((term) => {
    const index = lowerText.indexOf(term.term.toLowerCase());
    if (index !== -1) {
      terms.push({
        ...term,
        startIndex: index,
        endIndex: index + term.term.length,
      });
    }
  });

  return terms;
};

/**
 * Format transcription into clinical note format
 */
export const formatToNote = async (
  rawText: string,
  format: NoteFormat
): Promise<string> => {
  await simulateDelay(1000);

  switch (format) {
    case 'soap':
      return formatToSOAP(rawText);
    case 'narrative':
      return formatToNarrative(rawText);
    case 'structured':
      return formatToStructured(rawText);
    default:
      return rawText;
  }
};

const formatToSOAP = (text: string): string => {
  return `SUBJECTIVE:
${text}

OBJECTIVE:
[Pending clinical findings]

ASSESSMENT:
[Pending provider assessment]

PLAN:
[Pending treatment plan]`;
};

const formatToNarrative = (text: string): string => {
  return `Clinical Note - ${new Date().toLocaleDateString()}

${text}

Note completed by: [Provider Name]
Time: ${new Date().toLocaleTimeString()}`;
};

const formatToStructured = (text: string): string => {
  return `CHIEF COMPLAINT: [Extract from transcription]

HISTORY OF PRESENT ILLNESS:
${text}

REVIEW OF SYSTEMS: [Pending]

PHYSICAL EXAMINATION: [Pending]

ASSESSMENT AND PLAN: [Pending]`;
};

/**
 * Identify medical terms in text
 */
export const identifyMedicalTerms = async (
  text: string
): Promise<MedicalTerm[]> => {
  await simulateDelay(500);
  return findMedicalTerms(text);
};

/**
 * Get term definition
 */
export const getTermDefinition = async (
  term: string
): Promise<{ term: string; definition: string } | null> => {
  await simulateDelay(200);
  const found = mockMedicalTerms.find(
    (t) => t.term.toLowerCase() === term.toLowerCase()
  );
  return found ? { term: found.term, definition: found.definition || '' } : null;
};

/**
 * Save formatted note
 */
export const saveNote = async (
  patientId: string,
  note: string,
  format: NoteFormat
) => {
  await simulateDelay();
  return {
    success: true,
    noteId: `NOTE-${Date.now()}`,
    savedAt: Date.now(),
    patientId,
    format,
  };
};
