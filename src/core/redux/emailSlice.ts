// src/core/redux/emailSlice.ts
// Redux slice for Symplify Platform AI-Enhanced Email Management

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { 
  AnalyzedEmail, 
  EmailFolder, 
  EmailPriority 
} from '../ai/emailTypes';
import { 
  getMockEmails, 
  categorizeEmail, 
  getFolderCounts 
} from '../api/mock/emailMockApi';

// Priority order for sorting
const PRIORITY_ORDER: Record<EmailPriority, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3
};

// Email with folder information
export interface EmailWithFolders extends AnalyzedEmail {
  folders: EmailFolder[];
}

// Filter options
export interface EmailFilters {
  priority?: EmailPriority[];
  folder?: EmailFolder;
  read?: boolean;
  starred?: boolean;
  search?: string;
}

// State interface
export interface EmailState {
  emails: EmailWithFolders[];
  activeFolder: EmailFolder;
  selectedEmailId: string | null;
  folderCounts: Record<EmailFolder, { total: number; unread: number }>;
  filters: EmailFilters;
  loading: boolean;
  error: string | null;
  sortBy: 'priority' | 'date' | 'sender';
  sortOrder: 'asc' | 'desc';
}

// Initial state
const initialState: EmailState = {
  emails: [],
  activeFolder: 'inbox',
  selectedEmailId: null,
  folderCounts: {
    inbox: { total: 0, unread: 0 },
    urgent: { total: 0, unread: 0 },
    clinical: { total: 0, unread: 0 },
    'lab-results': { total: 0, unread: 0 },
    referrals: { total: 0, unread: 0 },
    insurance: { total: 0, unread: 0 },
    administrative: { total: 0, unread: 0 }
  },
  filters: {},
  loading: false,
  error: null,
  sortBy: 'priority',
  sortOrder: 'asc'
};

// Async thunk to fetch emails
export const fetchEmails = createAsyncThunk(
  'email/fetchEmails',
  async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const emails = getMockEmails();
    
    // Add folder categorization to each email
    const emailsWithFolders: EmailWithFolders[] = emails.map(email => ({
      ...email,
      folders: categorizeEmail(email.subject, email.preview)
    }));
    
    // Sort by priority first, then by timestamp
    return emailsWithFolders.sort((a, b) => {
      const priorityDiff = PRIORITY_ORDER[a.analysis.priority] - PRIORITY_ORDER[b.analysis.priority];
      if (priorityDiff !== 0) return priorityDiff;
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
  }
);

// Async thunk for analyzing new email (for real-time classification)
export const analyzeNewEmail = createAsyncThunk(
  'email/analyzeNewEmail',
  async (emailData: { subject: string; preview: string; sender: AnalyzedEmail['sender'] }) => {
    // This would call the analysis API
    await new Promise(resolve => setTimeout(resolve, 100));
    // Analysis is done in mock API
    return emailData;
  }
);

// Create slice
const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    // Mark email as read
    markAsRead: (state, action: PayloadAction<string>) => {
      const email = state.emails.find(e => e.id === action.payload);
      if (email && !email.read) {
        email.read = true;
        // Update folder counts
        email.folders.forEach(folder => {
          if (state.folderCounts[folder]) {
            state.folderCounts[folder].unread = Math.max(0, state.folderCounts[folder].unread - 1);
          }
        });
      }
    },
    
    // Mark email as unread
    markAsUnread: (state, action: PayloadAction<string>) => {
      const email = state.emails.find(e => e.id === action.payload);
      if (email && email.read) {
        email.read = false;
        // Update folder counts
        email.folders.forEach(folder => {
          if (state.folderCounts[folder]) {
            state.folderCounts[folder].unread += 1;
          }
        });
      }
    },
    
    // Toggle star
    toggleStar: (state, action: PayloadAction<string>) => {
      const email = state.emails.find(e => e.id === action.payload);
      if (email) {
        email.starred = !email.starred;
      }
    },
    
    // Delete email
    deleteEmail: (state, action: PayloadAction<string>) => {
      const emailIndex = state.emails.findIndex(e => e.id === action.payload);
      if (emailIndex !== -1) {
        const email = state.emails[emailIndex];
        // Update folder counts
        email.folders.forEach(folder => {
          if (state.folderCounts[folder]) {
            state.folderCounts[folder].total--;
            if (!email.read) {
              state.folderCounts[folder].unread = Math.max(0, state.folderCounts[folder].unread - 1);
            }
          }
        });
        state.emails.splice(emailIndex, 1);
        if (state.selectedEmailId === action.payload) {
          state.selectedEmailId = null;
        }
      }
    },
    
    // Archive email (move to administrative)
    archiveEmail: (state, action: PayloadAction<string>) => {
      const email = state.emails.find(e => e.id === action.payload);
      if (email) {
        // Update old folder counts
        email.folders.forEach(folder => {
          if (state.folderCounts[folder]) {
            state.folderCounts[folder].total--;
            if (!email.read) {
              state.folderCounts[folder].unread--;
            }
          }
        });
        // Move to administrative
        email.folders = ['administrative'];
        state.folderCounts.administrative.total++;
        if (!email.read) {
          state.folderCounts.administrative.unread++;
        }
      }
    },
    
    // Set active folder
    setActiveFolder: (state, action: PayloadAction<EmailFolder>) => {
      state.activeFolder = action.payload;
      state.selectedEmailId = null;
    },
    
    // Select email
    selectEmail: (state, action: PayloadAction<string | null>) => {
      state.selectedEmailId = action.payload;
    },
    
    // Set filters
    setFilters: (state, action: PayloadAction<EmailFilters>) => {
      state.filters = action.payload;
    },
    
    // Set sort options
    setSortBy: (state, action: PayloadAction<'priority' | 'date' | 'sender'>) => {
      state.sortBy = action.payload;
    },
    
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
    
    // Clear search
    clearSearch: (state) => {
      state.filters.search = undefined;
    },
    
    // Mark all in folder as read
    markAllAsRead: (state, action: PayloadAction<EmailFolder | undefined>) => {
      const folder = action.payload;
      state.emails.forEach(email => {
        if (!folder || email.folders.includes(folder)) {
          if (!email.read) {
            email.read = true;
          }
        }
      });
      // Update folder counts
      if (folder) {
        state.folderCounts[folder].unread = 0;
      } else {
        Object.keys(state.folderCounts).forEach(key => {
          state.folderCounts[key as EmailFolder].unread = 0;
        });
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmails.fulfilled, (state, action) => {
        state.loading = false;
        state.emails = action.payload;
        // Calculate folder counts
        state.folderCounts = getFolderCounts(
          action.payload.map(e => ({ folders: e.folders, read: e.read }))
        );
      })
      .addCase(fetchEmails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch emails';
      });
  }
});

// Selectors
export const selectFilteredEmails = (state: { email: EmailState }) => {
  const { emails, activeFolder, filters, sortBy, sortOrder } = state.email;
  
  let filtered = emails.filter(email => {
    // Filter by folder
    if (!email.folders.includes(activeFolder)) return false;
    
    // Filter by priority
    if (filters.priority && filters.priority.length > 0) {
      if (!filters.priority.includes(email.analysis.priority)) return false;
    }
    
    // Filter by read status
    if (filters.read !== undefined) {
      if (email.read !== filters.read) return false;
    }
    
    // Filter by starred
    if (filters.starred !== undefined) {
      if (email.starred !== filters.starred) return false;
    }
    
    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        email.subject.toLowerCase().includes(searchLower) ||
        email.preview.toLowerCase().includes(searchLower) ||
        email.sender.name.toLowerCase().includes(searchLower) ||
        email.sender.email.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }
    
    return true;
  });
  
  // Sort
  filtered = filtered.sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'priority':
        comparison = PRIORITY_ORDER[a.analysis.priority] - PRIORITY_ORDER[b.analysis.priority];
        break;
      case 'date':
        comparison = new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        break;
      case 'sender':
        comparison = a.sender.name.localeCompare(b.sender.name);
        break;
    }
    
    return sortOrder === 'desc' ? -comparison : comparison;
  });
  
  return filtered;
};

export const selectSelectedEmail = (state: { email: EmailState }) => {
  const { emails, selectedEmailId } = state.email;
  return emails.find(e => e.id === selectedEmailId) || null;
};

export const selectUnreadCount = (state: { email: EmailState }) => {
  return state.email.emails.filter(e => !e.read).length;
};

export const selectCriticalCount = (state: { email: EmailState }) => {
  return state.email.emails.filter(e => !e.read && e.analysis.priority === 'critical').length;
};

// Export actions
export const {
  markAsRead,
  markAsUnread,
  toggleStar,
  deleteEmail,
  archiveEmail,
  setActiveFolder,
  selectEmail,
  setFilters,
  setSortBy,
  setSortOrder,
  clearSearch,
  markAllAsRead
} = emailSlice.actions;

export default emailSlice.reducer;
