import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type {
  AIState,
  AcuityScore,
  TriageAssessmentRequest,
  PersonalizedLayout,
  UserRole,
  SlotSuggestion,
  PredictiveAlert,
  MessageAnalysis,
  DashboardInteraction,
  SchedulerRequest,
} from '../ai/types';
import {
  assessTriagePriority,
  getPersonalizedLayout,
  getSmartSlotSuggestions,
  getClinicalAlerts,
  analyzeMessage,
} from '../ai/mockApi';

// Initial state
const initialState: AIState = {
  triage: {
    acuityScores: {},
    loading: false,
    error: null,
  },
  dashboard: {
    personalizedLayout: null,
    interactions: [],
    loading: false,
  },
  scheduler: {
    suggestions: [],
    loading: false,
    selectedSlot: null,
  },
  clinicalAlerts: {
    alerts: [],
    connected: false,
    lastUpdated: 0,
  },
  messageRouter: {
    currentAnalysis: null,
    analyzing: false,
  },
};

// Async Thunks
export const assessPatientTriage = createAsyncThunk(
  'ai/assessPatientTriage',
  async (request: TriageAssessmentRequest) => {
    const response = await assessTriagePriority(request);
    return {
      patientId: request.patientId,
      ...response,
      timestamp: Date.now(),
    } as AcuityScore;
  }
);

export const loadPersonalizedLayout = createAsyncThunk(
  'ai/loadPersonalizedLayout',
  async ({ userId, role }: { userId: string; role: UserRole }) => {
    return await getPersonalizedLayout(userId, role);
  }
);

export const fetchSlotSuggestions = createAsyncThunk(
  'ai/fetchSlotSuggestions',
  async (request: SchedulerRequest) => {
    return await getSmartSlotSuggestions(request);
  }
);

export const fetchClinicalAlerts = createAsyncThunk(
  'ai/fetchClinicalAlerts',
  async () => {
    return await getClinicalAlerts();
  }
);

export const analyzeMessageContent = createAsyncThunk(
  'ai/analyzeMessageContent',
  async (content: string) => {
    return await analyzeMessage(content);
  }
);

// Slice
const aiSlice = createSlice({
  name: 'ai',
  initialState,
  reducers: {
    updateAcuityScore: (state, action: PayloadAction<AcuityScore>) => {
      state.triage.acuityScores[action.payload.patientId] = action.payload;
    },
    recordInteraction: (state, action: PayloadAction<DashboardInteraction>) => {
      state.dashboard.interactions.push(action.payload);
    },
    selectSlot: (state, action: PayloadAction<SlotSuggestion | null>) => {
      state.scheduler.selectedSlot = action.payload;
    },
    updateClinicalAlerts: (state, action: PayloadAction<PredictiveAlert[]>) => {
      state.clinicalAlerts.alerts = action.payload;
      state.clinicalAlerts.lastUpdated = Date.now();
    },
    setAlertsConnected: (state, action: PayloadAction<boolean>) => {
      state.clinicalAlerts.connected = action.payload;
    },
    clearMessageAnalysis: (state) => {
      state.messageRouter.currentAnalysis = null;
    },
  },
  extraReducers: (builder) => {
    // Triage Assessment
    builder
      .addCase(assessPatientTriage.pending, (state) => {
        state.triage.loading = true;
        state.triage.error = null;
      })
      .addCase(assessPatientTriage.fulfilled, (state, action) => {
        state.triage.loading = false;
        state.triage.acuityScores[action.payload.patientId] = action.payload;
      })
      .addCase(assessPatientTriage.rejected, (state, action) => {
        state.triage.loading = false;
        state.triage.error = action.error.message || 'Failed to assess triage';
      });

    // Dashboard Layout
    builder
      .addCase(loadPersonalizedLayout.pending, (state) => {
        state.dashboard.loading = true;
      })
      .addCase(loadPersonalizedLayout.fulfilled, (state, action) => {
        state.dashboard.loading = false;
        state.dashboard.personalizedLayout = action.payload;
      })
      .addCase(loadPersonalizedLayout.rejected, (state) => {
        state.dashboard.loading = false;
      });

    // Scheduler Suggestions
    builder
      .addCase(fetchSlotSuggestions.pending, (state) => {
        state.scheduler.loading = true;
      })
      .addCase(fetchSlotSuggestions.fulfilled, (state, action) => {
        state.scheduler.loading = false;
        state.scheduler.suggestions = action.payload.slots;
      })
      .addCase(fetchSlotSuggestions.rejected, (state) => {
        state.scheduler.loading = false;
      });

    // Clinical Alerts
    builder
      .addCase(fetchClinicalAlerts.fulfilled, (state, action) => {
        state.clinicalAlerts.alerts = action.payload;
        state.clinicalAlerts.lastUpdated = Date.now();
      });

    // Message Analysis
    builder
      .addCase(analyzeMessageContent.pending, (state) => {
        state.messageRouter.analyzing = true;
      })
      .addCase(analyzeMessageContent.fulfilled, (state, action) => {
        state.messageRouter.analyzing = false;
        state.messageRouter.currentAnalysis = action.payload;
      })
      .addCase(analyzeMessageContent.rejected, (state) => {
        state.messageRouter.analyzing = false;
      });
  },
});

export const {
  updateAcuityScore,
  recordInteraction,
  selectSlot,
  updateClinicalAlerts,
  setAlertsConnected,
  clearMessageAnalysis,
} = aiSlice.actions;

export default aiSlice.reducer;
