import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

// Types
export type NoteFormat = 'soap' | 'narrative' | 'structured' | 'custom';

export interface MedicalTerm {
  term: string;
  category: 'medication' | 'diagnosis' | 'procedure' | 'anatomy' | 'symptom';
  definition?: string;
  startIndex: number;
  endIndex: number;
}

export interface TranscriptionResult {
  id: string;
  rawText: string;
  formattedText?: string;
  format?: NoteFormat;
  medicalTerms: MedicalTerm[];
  confidence: number;
  timestamp: number;
}

export interface RecordingSession {
  id: string;
  startTime: number;
  endTime?: number;
  duration: number;
  status: 'idle' | 'recording' | 'processing' | 'completed' | 'error';
}

export interface VoiceDocState {
  currentSession: RecordingSession | null;
  transcriptions: TranscriptionResult[];
  selectedFormat: NoteFormat;
  isRecording: boolean;
  isProcessing: boolean;
  error: string | null;
}

// Initial state
const initialState: VoiceDocState = {
  currentSession: null,
  transcriptions: [],
  selectedFormat: 'soap',
  isRecording: false,
  isProcessing: false,
  error: null,
};

// Async Thunks
export const processRecording = createAsyncThunk(
  'voiceDoc/processRecording',
  async (audioBlob: Blob) => {
    // TODO: Integrate with voiceDocMockApi
    return {
      id: `trans-${Date.now()}`,
      rawText: '',
      medicalTerms: [],
      confidence: 0,
      timestamp: Date.now(),
    } as TranscriptionResult;
  }
);

export const formatTranscription = createAsyncThunk(
  'voiceDoc/formatTranscription',
  async ({ transcriptionId, format }: { transcriptionId: string; format: NoteFormat }) => {
    // TODO: Integrate with voiceDocMockApi
    return {
      transcriptionId,
      formattedText: '',
      format,
    };
  }
);

// Slice
const voiceDocSlice = createSlice({
  name: 'voiceDoc',
  initialState,
  reducers: {
    startRecording: (state) => {
      state.isRecording = true;
      state.currentSession = {
        id: `session-${Date.now()}`,
        startTime: Date.now(),
        duration: 0,
        status: 'recording',
      };
    },
    stopRecording: (state) => {
      state.isRecording = false;
      if (state.currentSession) {
        state.currentSession.endTime = Date.now();
        state.currentSession.duration =
          Date.now() - state.currentSession.startTime;
        state.currentSession.status = 'processing';
      }
    },
    setSelectedFormat: (state, action: PayloadAction<NoteFormat>) => {
      state.selectedFormat = action.payload;
    },
    addTranscription: (state, action: PayloadAction<TranscriptionResult>) => {
      state.transcriptions.push(action.payload);
    },
    updateTranscription: (
      state,
      action: PayloadAction<{ id: string; updates: Partial<TranscriptionResult> }>
    ) => {
      const index = state.transcriptions.findIndex(
        (t) => t.id === action.payload.id
      );
      if (index !== -1) {
        state.transcriptions[index] = {
          ...state.transcriptions[index],
          ...action.payload.updates,
        };
      }
    },
    deleteTranscription: (state, action: PayloadAction<string>) => {
      state.transcriptions = state.transcriptions.filter(
        (t) => t.id !== action.payload
      );
    },
    clearSession: (state) => {
      state.currentSession = null;
      state.isRecording = false;
      state.isProcessing = false;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(processRecording.pending, (state) => {
        state.isProcessing = true;
        state.error = null;
      })
      .addCase(processRecording.fulfilled, (state, action) => {
        state.isProcessing = false;
        state.transcriptions.push(action.payload);
        if (state.currentSession) {
          state.currentSession.status = 'completed';
        }
      })
      .addCase(processRecording.rejected, (state, action) => {
        state.isProcessing = false;
        state.error = action.error.message || 'Failed to process recording';
        if (state.currentSession) {
          state.currentSession.status = 'error';
        }
      })
      .addCase(formatTranscription.fulfilled, (state, action) => {
        const index = state.transcriptions.findIndex(
          (t) => t.id === action.payload.transcriptionId
        );
        if (index !== -1) {
          state.transcriptions[index].formattedText = action.payload.formattedText;
          state.transcriptions[index].format = action.payload.format;
        }
      });
  },
});

export const {
  startRecording,
  stopRecording,
  setSelectedFormat,
  addTranscription,
  updateTranscription,
  deleteTranscription,
  clearSession,
  setError,
} = voiceDocSlice.actions;

export default voiceDocSlice.reducer;
