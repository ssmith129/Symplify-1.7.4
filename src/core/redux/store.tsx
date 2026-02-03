import { configureStore } from '@reduxjs/toolkit';
import sidebarSlice from './sidebarSlice';
import themeReducer from './themeSlice';
import aiReducer from './aiSlice';
import shiftHandoffReducer from './shiftHandoffSlice';
import notificationReducer from './notificationSlice';
import emailReducer from './emailSlice';

const store = configureStore({
  reducer: {
    sidebarSlice: sidebarSlice,
    theme: themeReducer,
    ai: aiReducer,
    shiftHandoff: shiftHandoffReducer,
    notifications: notificationReducer,
    email: emailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
