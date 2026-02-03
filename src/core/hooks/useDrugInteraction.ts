import { useState, useCallback, useEffect } from 'react';
import {
  checkDrugInteractions,
  searchMedications,
  getInteractionDetails,
  getSeverityInfo,
} from '../api/mock/drugInteractionMockApi';
import type {
  Medication,
  DrugInteraction,
  SeverityLevel,
} from '../redux/drugInteractionSlice';

interface UseDrugInteractionOptions {
  autoCheck?: boolean;
  patientId?: string;
}

interface UseDrugInteractionState {
  medications: Medication[];
  interactions: DrugInteraction[];
  isChecking: boolean;
  isSearching: boolean;
  searchResults: Medication[];
  error: string | null;
  lastChecked: Date | null;
}

interface UseDrugInteractionReturn extends UseDrugInteractionState {
  addMedication: (medication: Medication) => void;
  removeMedication: (medicationId: string) => void;
  checkInteractions: () => Promise<void>;
  searchDrugs: (query: string) => Promise<void>;
  getInteractionDetail: (drug1Id: string, drug2Id: string) => Promise<DrugInteraction | null>;
  getSeverity: (severity: SeverityLevel) => ReturnType<typeof getSeverityInfo>;
  clearAll: () => void;
  hasInteractions: boolean;
  hasCriticalInteractions: boolean;
}

/**
 * Feature 10: Drug Interaction Checker - Custom Hook
 * Provides drug interaction checking functionality
 */
export const useDrugInteraction = (
  options: UseDrugInteractionOptions = {}
): UseDrugInteractionReturn => {
  const { autoCheck = true } = options;

  const [state, setState] = useState<UseDrugInteractionState>({
    medications: [],
    interactions: [],
    isChecking: false,
    isSearching: false,
    searchResults: [],
    error: null,
    lastChecked: null,
  });

  // Auto-check interactions when medications change
  useEffect(() => {
    if (autoCheck && state.medications.length >= 2) {
      checkInteractionsInternal();
    }
  }, [state.medications, autoCheck]);

  const checkInteractionsInternal = useCallback(async () => {
    if (state.medications.length < 2) {
      setState((prev) => ({
        ...prev,
        interactions: [],
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      isChecking: true,
      error: null,
    }));

    try {
      const medicationIds = state.medications.map((m) => m.id);
      const interactions = await checkDrugInteractions(medicationIds);

      setState((prev) => ({
        ...prev,
        interactions,
        isChecking: false,
        lastChecked: new Date(),
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isChecking: false,
        error: 'Failed to check drug interactions',
      }));
    }
  }, [state.medications]);

  const addMedication = useCallback((medication: Medication) => {
    setState((prev) => {
      // Prevent duplicates
      if (prev.medications.some((m) => m.id === medication.id)) {
        return prev;
      }
      return {
        ...prev,
        medications: [...prev.medications, medication],
      };
    });
  }, []);

  const removeMedication = useCallback((medicationId: string) => {
    setState((prev) => ({
      ...prev,
      medications: prev.medications.filter((m) => m.id !== medicationId),
      interactions: prev.interactions.filter(
        (i) => i.drug1Id !== medicationId && i.drug2Id !== medicationId
      ),
    }));
  }, []);

  const searchDrugs = useCallback(async (query: string) => {
    if (!query.trim()) {
      setState((prev) => ({
        ...prev,
        searchResults: [],
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      isSearching: true,
    }));

    try {
      const results = await searchMedications(query);
      setState((prev) => ({
        ...prev,
        searchResults: results,
        isSearching: false,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isSearching: false,
        error: 'Failed to search medications',
      }));
    }
  }, []);

  const getInteractionDetail = useCallback(
    async (drug1Id: string, drug2Id: string) => {
      try {
        return await getInteractionDetails(drug1Id, drug2Id);
      } catch (error) {
        return null;
      }
    },
    []
  );

  const getSeverity = useCallback((severity: SeverityLevel) => {
    return getSeverityInfo(severity);
  }, []);

  const clearAll = useCallback(() => {
    setState({
      medications: [],
      interactions: [],
      isChecking: false,
      isSearching: false,
      searchResults: [],
      error: null,
      lastChecked: null,
    });
  }, []);

  const hasInteractions = state.interactions.length > 0;
  
  const hasCriticalInteractions = state.interactions.some(
    (i) => i.severity === 'major' || i.severity === 'contraindicated'
  );

  return {
    ...state,
    addMedication,
    removeMedication,
    checkInteractions: checkInteractionsInternal,
    searchDrugs,
    getInteractionDetail,
    getSeverity,
    clearAll,
    hasInteractions,
    hasCriticalInteractions,
  };
};

export default useDrugInteraction;
