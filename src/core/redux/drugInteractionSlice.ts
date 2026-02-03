import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

// Types
export type SeverityLevel = 'minor' | 'moderate' | 'major' | 'contraindicated';

export interface Medication {
  id: string;
  name: string;
  genericName?: string;
  dosage?: string;
  frequency?: string;
  route?: string;
}

export interface DrugInteraction {
  id: string;
  drug1Id: string;
  drug1Name: string;
  drug2Id: string;
  drug2Name: string;
  severity: SeverityLevel;
  description: string;
  mechanism?: string;
  recommendation: string;
  references?: string[];
}

export interface MedicationReview {
  medicationId: string;
  medicationName: string;
  status: 'safe' | 'warning' | 'critical';
  interactionCount: number;
  lastChecked: number;
}

export interface DrugInteractionState {
  medications: Medication[];
  interactions: DrugInteraction[];
  reviews: Record<string, MedicationReview>;
  selectedMedication: string | null;
  loading: boolean;
  checking: boolean;
  error: string | null;
}

// Initial state
const initialState: DrugInteractionState = {
  medications: [],
  interactions: [],
  reviews: {},
  selectedMedication: null,
  loading: false,
  checking: false,
  error: null,
};

// Async Thunks
export const checkInteractions = createAsyncThunk(
  'drugInteraction/checkInteractions',
  async (medicationIds: string[]) => {
    // TODO: Integrate with drugInteractionMockApi
    return [] as DrugInteraction[];
  }
);

export const addMedicationAndCheck = createAsyncThunk(
  'drugInteraction/addMedicationAndCheck',
  async (medication: Medication, { getState, dispatch }) => {
    // TODO: Integrate with drugInteractionMockApi
    dispatch(addMedication(medication));
    return medication;
  }
);

export const loadPatientMedications = createAsyncThunk(
  'drugInteraction/loadPatientMedications',
  async (patientId: string) => {
    // TODO: Integrate with drugInteractionMockApi
    return [] as Medication[];
  }
);

// Slice
const drugInteractionSlice = createSlice({
  name: 'drugInteraction',
  initialState,
  reducers: {
    addMedication: (state, action: PayloadAction<Medication>) => {
      state.medications.push(action.payload);
    },
    removeMedication: (state, action: PayloadAction<string>) => {
      state.medications = state.medications.filter(
        (m) => m.id !== action.payload
      );
      // Also remove related interactions
      state.interactions = state.interactions.filter(
        (i) => i.drug1Id !== action.payload && i.drug2Id !== action.payload
      );
      delete state.reviews[action.payload];
    },
    updateMedication: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<Medication> }>
    ) => {
      const index = state.medications.findIndex(
        (m) => m.id === action.payload.id
      );
      if (index !== -1) {
        state.medications[index] = {
          ...state.medications[index],
          ...action.payload.updates,
        };
      }
    },
    setSelectedMedication: (state, action: PayloadAction<string | null>) => {
      state.selectedMedication = action.payload;
    },
    clearInteractions: (state) => {
      state.interactions = [];
    },
    setMedicationReview: (state, action: PayloadAction<MedicationReview>) => {
      state.reviews[action.payload.medicationId] = action.payload;
    },
    clearAllData: (state) => {
      state.medications = [];
      state.interactions = [];
      state.reviews = {};
      state.selectedMedication = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkInteractions.pending, (state) => {
        state.checking = true;
        state.error = null;
      })
      .addCase(checkInteractions.fulfilled, (state, action) => {
        state.checking = false;
        state.interactions = action.payload;
        // Update reviews based on interactions
        state.medications.forEach((med) => {
          const relatedInteractions = action.payload.filter(
            (i) => i.drug1Id === med.id || i.drug2Id === med.id
          );
          const hasCritical = relatedInteractions.some(
            (i) => i.severity === 'major' || i.severity === 'contraindicated'
          );
          const hasWarning = relatedInteractions.some(
            (i) => i.severity === 'moderate'
          );
          state.reviews[med.id] = {
            medicationId: med.id,
            medicationName: med.name,
            status: hasCritical ? 'critical' : hasWarning ? 'warning' : 'safe',
            interactionCount: relatedInteractions.length,
            lastChecked: Date.now(),
          };
        });
      })
      .addCase(checkInteractions.rejected, (state, action) => {
        state.checking = false;
        state.error = action.error.message || 'Failed to check interactions';
      })
      .addCase(loadPatientMedications.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadPatientMedications.fulfilled, (state, action) => {
        state.loading = false;
        state.medications = action.payload;
      })
      .addCase(loadPatientMedications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load medications';
      });
  },
});

export const {
  addMedication,
  removeMedication,
  updateMedication,
  setSelectedMedication,
  clearInteractions,
  setMedicationReview,
  clearAllData,
} = drugInteractionSlice.actions;

export default drugInteractionSlice.reducer;
