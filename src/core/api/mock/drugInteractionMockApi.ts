/**
 * Feature 10: Drug Interaction Checker - Mock API
 * Simulates API calls for drug interaction checking
 */

import type {
  Medication,
  DrugInteraction,
  SeverityLevel,
} from '../../redux/drugInteractionSlice';

// Simulated delay for API calls
const simulateDelay = (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Mock medication database
const mockMedicationDatabase: Medication[] = [
  { id: 'MED001', name: 'Warfarin', genericName: 'warfarin sodium' },
  { id: 'MED002', name: 'Aspirin', genericName: 'acetylsalicylic acid' },
  { id: 'MED003', name: 'Metformin', genericName: 'metformin hydrochloride' },
  { id: 'MED004', name: 'Lisinopril', genericName: 'lisinopril' },
  { id: 'MED005', name: 'Simvastatin', genericName: 'simvastatin' },
  { id: 'MED006', name: 'Ibuprofen', genericName: 'ibuprofen' },
  { id: 'MED007', name: 'Amiodarone', genericName: 'amiodarone hydrochloride' },
];

// Mock interaction database
const mockInteractions: Array<{
  drug1: string;
  drug2: string;
  severity: SeverityLevel;
  description: string;
  mechanism: string;
  recommendation: string;
}> = [
  {
    drug1: 'MED001', // Warfarin
    drug2: 'MED002', // Aspirin
    severity: 'major',
    description:
      'Concurrent use increases the risk of bleeding significantly.',
    mechanism:
      'Aspirin inhibits platelet aggregation while warfarin inhibits clotting factors.',
    recommendation:
      'Avoid combination if possible. If necessary, use lowest effective aspirin dose and monitor closely.',
  },
  {
    drug1: 'MED001', // Warfarin
    drug2: 'MED006', // Ibuprofen
    severity: 'major',
    description: 'NSAIDs increase the risk of GI bleeding with warfarin.',
    mechanism:
      'NSAIDs inhibit prostaglandin synthesis and platelet function.',
    recommendation:
      'Avoid NSAIDs with warfarin. Consider acetaminophen for pain management.',
  },
  {
    drug1: 'MED001', // Warfarin
    drug2: 'MED007', // Amiodarone
    severity: 'contraindicated',
    description:
      'Amiodarone significantly increases warfarin effect and bleeding risk.',
    mechanism: 'Amiodarone inhibits CYP2C9 metabolism of warfarin.',
    recommendation:
      'Reduce warfarin dose by 30-50% when starting amiodarone. Monitor INR closely.',
  },
  {
    drug1: 'MED004', // Lisinopril
    drug2: 'MED006', // Ibuprofen
    severity: 'moderate',
    description:
      'NSAIDs may reduce the antihypertensive effect of ACE inhibitors.',
    mechanism:
      'NSAIDs inhibit prostaglandin synthesis, reducing renal blood flow.',
    recommendation:
      'Monitor blood pressure. Consider alternative pain medication.',
  },
  {
    drug1: 'MED005', // Simvastatin
    drug2: 'MED007', // Amiodarone
    severity: 'major',
    description:
      'Increased risk of myopathy and rhabdomyolysis with this combination.',
    mechanism: 'Amiodarone inhibits CYP3A4 metabolism of simvastatin.',
    recommendation:
      'Do not exceed simvastatin 20mg daily with amiodarone. Monitor for muscle symptoms.',
  },
];

/**
 * Search medications
 */
export const searchMedications = async (
  query: string
): Promise<Medication[]> => {
  await simulateDelay(300);
  const lowerQuery = query.toLowerCase();
  return mockMedicationDatabase.filter(
    (med) =>
      med.name.toLowerCase().includes(lowerQuery) ||
      med.genericName?.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Get medication by ID
 */
export const getMedicationById = async (
  id: string
): Promise<Medication | null> => {
  await simulateDelay(200);
  return mockMedicationDatabase.find((med) => med.id === id) || null;
};

/**
 * Check interactions between medications
 */
export const checkDrugInteractions = async (
  medicationIds: string[]
): Promise<DrugInteraction[]> => {
  await simulateDelay(1000);

  const interactions: DrugInteraction[] = [];

  // Check all pairs of medications
  for (let i = 0; i < medicationIds.length; i++) {
    for (let j = i + 1; j < medicationIds.length; j++) {
      const id1 = medicationIds[i];
      const id2 = medicationIds[j];

      const interaction = mockInteractions.find(
        (int) =>
          (int.drug1 === id1 && int.drug2 === id2) ||
          (int.drug1 === id2 && int.drug2 === id1)
      );

      if (interaction) {
        const drug1 = mockMedicationDatabase.find((m) => m.id === id1);
        const drug2 = mockMedicationDatabase.find((m) => m.id === id2);

        interactions.push({
          id: `INT-${id1}-${id2}`,
          drug1Id: id1,
          drug1Name: drug1?.name || id1,
          drug2Id: id2,
          drug2Name: drug2?.name || id2,
          severity: interaction.severity,
          description: interaction.description,
          mechanism: interaction.mechanism,
          recommendation: interaction.recommendation,
        });
      }
    }
  }

  return interactions;
};

/**
 * Get patient medications
 */
export const getPatientMedications = async (
  patientId: string
): Promise<Medication[]> => {
  await simulateDelay();
  // Return mock patient medications
  return [
    { ...mockMedicationDatabase[0], dosage: '5mg', frequency: 'Once daily' },
    { ...mockMedicationDatabase[3], dosage: '10mg', frequency: 'Once daily' },
    { ...mockMedicationDatabase[4], dosage: '20mg', frequency: 'At bedtime' },
  ];
};

/**
 * Get interaction details
 */
export const getInteractionDetails = async (
  drug1Id: string,
  drug2Id: string
): Promise<DrugInteraction | null> => {
  await simulateDelay();

  const interaction = mockInteractions.find(
    (int) =>
      (int.drug1 === drug1Id && int.drug2 === drug2Id) ||
      (int.drug1 === drug2Id && int.drug2 === drug1Id)
  );

  if (!interaction) return null;

  const drug1 = mockMedicationDatabase.find((m) => m.id === drug1Id);
  const drug2 = mockMedicationDatabase.find((m) => m.id === drug2Id);

  return {
    id: `INT-${drug1Id}-${drug2Id}`,
    drug1Id,
    drug1Name: drug1?.name || drug1Id,
    drug2Id,
    drug2Name: drug2?.name || drug2Id,
    severity: interaction.severity,
    description: interaction.description,
    mechanism: interaction.mechanism,
    recommendation: interaction.recommendation,
    references: [
      'Clinical Pharmacology Database',
      'Lexicomp Drug Interactions',
    ],
  };
};

/**
 * Get severity information
 */
export const getSeverityInfo = (severity: SeverityLevel) => {
  const severityMap = {
    minor: {
      label: 'Minor',
      color: '#28a745',
      description: 'Minimally clinically significant. Risk is minimal.',
    },
    moderate: {
      label: 'Moderate',
      color: '#ffc107',
      description:
        'Moderately clinically significant. Usually avoid combination.',
    },
    major: {
      label: 'Major',
      color: '#dc3545',
      description:
        'Highly clinically significant. Avoid combination or monitor closely.',
    },
    contraindicated: {
      label: 'Contraindicated',
      color: '#721c24',
      description: 'The drugs are contraindicated for concurrent use.',
    },
  };

  return severityMap[severity];
};
