import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { 
  shiftHandoffMockApi, 
  type ShiftHandoffReport, 
  type PatientHandoff 
} from '../api/mock/shiftHandoffMockApi';

// Re-export types for use in components
export type { ShiftHandoffReport, PatientHandoff };

interface ShiftHandoffPreferences {
  autoPlayAudio: boolean;
  expandedView: boolean;
  showVitalsTrends: boolean;
}

interface ShiftHandoffState {
  currentReport: ShiftHandoffReport | null;
  isGenerating: boolean;
  isAcknowledged: boolean;
  selectedPatient: PatientHandoff | null;
  audioPlaying: boolean;
  error: string | null;
  preferences: ShiftHandoffPreferences;
}

const initialState: ShiftHandoffState = {
  currentReport: null,
  isGenerating: false,
  isAcknowledged: false,
  selectedPatient: null,
  audioPlaying: false,
  error: null,
  preferences: {
    autoPlayAudio: false,
    expandedView: true,
    showVitalsTrends: true
  }
};

// Async Thunks
export const generateHandoffReport = createAsyncThunk(
  'shiftHandoff/generate',
  async (params: {
    outgoingNurseId: string;
    incomingNurseId: string;
    shiftType: 'day' | 'evening' | 'night';
    unitId: string;
  }) => {
    return await shiftHandoffMockApi.generateHandoffReport(params);
  }
);

export const acknowledgeHandoff = createAsyncThunk(
  'shiftHandoff/acknowledge',
  async (params: { reportId: string; nurseId: string }) => {
    return await shiftHandoffMockApi.acknowledgeHandoff(params.reportId, params.nurseId);
  }
);

export const fetchHandoffHistory = createAsyncThunk(
  'shiftHandoff/fetchHistory',
  async (params: { nurseId: string; days?: number }) => {
    return await shiftHandoffMockApi.getHandoffHistory(params.nurseId, params.days);
  }
);

// Slice
const shiftHandoffSlice = createSlice({
  name: 'shiftHandoff',
  initialState,
  reducers: {
    selectPatient: (state, action: PayloadAction<PatientHandoff | null>) => {
      state.selectedPatient = action.payload;
    },
    toggleAudio: (state) => {
      state.audioPlaying = !state.audioPlaying;
    },
    stopAudio: (state) => {
      state.audioPlaying = false;
    },
    updatePreferences: (state, action: PayloadAction<Partial<ShiftHandoffPreferences>>) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    clearReport: (state) => {
      state.currentReport = null;
      state.isAcknowledged = false;
      state.selectedPatient = null;
      state.audioPlaying = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Generate Handoff Report
      .addCase(generateHandoffReport.pending, (state) => {
        state.isGenerating = true;
        state.error = null;
        state.currentReport = null;
        state.isAcknowledged = false;
      })
      .addCase(generateHandoffReport.fulfilled, (state, action) => {
        state.isGenerating = false;
        state.currentReport = action.payload;
      })
      .addCase(generateHandoffReport.rejected, (state, action) => {
        state.isGenerating = false;
        state.error = action.error.message || 'Failed to generate handoff report';
      })
      // Acknowledge Handoff
      .addCase(acknowledgeHandoff.pending, (state) => {
        state.error = null;
      })
      .addCase(acknowledgeHandoff.fulfilled, (state) => {
        state.isAcknowledged = true;
      })
      .addCase(acknowledgeHandoff.rejected, (state, action) => {
        state.error = action.error.message || 'Failed to acknowledge handoff';
      });
  }
});

export const { 
  selectPatient, 
  toggleAudio, 
  stopAudio,
  updatePreferences, 
  clearReport,
  clearError
} = shiftHandoffSlice.actions;

export default shiftHandoffSlice.reducer;
