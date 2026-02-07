import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type UserRole = 'admin' | 'doctor' | 'patient';

interface RoleConfig {
  label: string;
  icon: string;
  color: string;
  dashboardPath: string;
  description: string;
}

interface RoleState {
  currentRole: UserRole;
  isTransitioning: boolean;
}

export const ROLE_CONFIG: Record<UserRole, RoleConfig> = {
  admin: {
    label: 'Admin',
    icon: 'ti-shield-check',
    color: '#2E37A4',
    dashboardPath: '/dashboard',
    description: 'Full system access',
  },
  doctor: {
    label: 'Doctor',
    icon: 'ti-stethoscope',
    color: '#0EA5E9',
    dashboardPath: '/doctor/doctor-dashboard',
    description: 'Clinical workspace',
  },
  patient: {
    label: 'Patient',
    icon: 'ti-user',
    color: '#22C55E',
    dashboardPath: '/patient/patient-dashboard',
    description: 'Patient portal',
  },
};

const getInitialRole = (): UserRole => {
  const saved = localStorage.getItem('userRole');
  if (saved && (saved === 'admin' || saved === 'doctor' || saved === 'patient')) {
    return saved;
  }
  return 'admin';
};

const initialState: RoleState = {
  currentRole: getInitialRole(),
  isTransitioning: false,
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<UserRole>) => {
      state.currentRole = action.payload;
      localStorage.setItem('userRole', action.payload);
    },
    setTransitioning: (state, action: PayloadAction<boolean>) => {
      state.isTransitioning = action.payload;
    },
  },
});

export const { setRole, setTransitioning } = roleSlice.actions;
export default roleSlice.reducer;
