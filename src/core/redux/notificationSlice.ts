// src/core/redux/notificationSlice.ts
// Redux slice for Symplify Platform AI-Enhanced Notification System

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { 
  NotificationState, 
  AnalyzedNotification, 
  NotificationFilters,
  NotificationCriticality 
} from '../ai/notificationTypes';
import { fetchAnalyzedNotifications } from '../api/mock/notificationMockApi';

const CRITICALITY_ORDER: Record<NotificationCriticality, number> = {
  critical: 0,
  high: 1,
  medium: 2,
  low: 3,
  info: 4
};

const initialState: NotificationState = {
  notifications: [],
  unreadCount: 0,
  criticalCount: 0,
  loading: false,
  error: null,
  filters: {}
};

// Async thunk to fetch notifications
export const fetchNotifications = createAsyncThunk(
  'notifications/fetch',
  async () => {
    const notifications = await fetchAnalyzedNotifications();
    
    // Sort by criticality first, then by timestamp (most recent first)
    return notifications.sort((a, b) => {
      const criticalityDiff = CRITICALITY_ORDER[a.criticality] - CRITICALITY_ORDER[b.criticality];
      if (criticalityDiff !== 0) return criticalityDiff;
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification && !notification.read) {
        notification.read = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
        if (notification.criticality === 'critical') {
          state.criticalCount = Math.max(0, state.criticalCount - 1);
        }
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach(n => { n.read = true; });
      state.unreadCount = 0;
      state.criticalCount = 0;
    },
    dismissNotification: (state, action: PayloadAction<string>) => {
      const index = state.notifications.findIndex(n => n.id === action.payload);
      if (index !== -1) {
        const notification = state.notifications[index];
        if (!notification.read) {
          state.unreadCount = Math.max(0, state.unreadCount - 1);
          if (notification.criticality === 'critical') {
            state.criticalCount = Math.max(0, state.criticalCount - 1);
          }
        }
        state.notifications.splice(index, 1);
      }
    },
    setFilter: (state, action: PayloadAction<NotificationFilters>) => {
      state.filters = action.payload;
    },
    acknowledgeNotification: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(n => n.id === action.payload);
      if (notification) {
        notification.read = true;
        state.unreadCount = Math.max(0, state.unreadCount - 1);
        if (notification.criticality === 'critical') {
          state.criticalCount = Math.max(0, state.criticalCount - 1);
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
        state.unreadCount = action.payload.filter(n => !n.read).length;
        state.criticalCount = action.payload.filter(
          n => !n.read && n.criticality === 'critical'
        ).length;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch notifications';
      });
  }
});

export const { 
  markAsRead, 
  markAllAsRead, 
  dismissNotification, 
  setFilter,
  acknowledgeNotification 
} = notificationSlice.actions;

export default notificationSlice.reducer;
