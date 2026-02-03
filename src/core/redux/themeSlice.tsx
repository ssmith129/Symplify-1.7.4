import { createSlice } from "@reduxjs/toolkit";


const defaultThemeSettings = {
  "data-bs-theme": "light",
  "data-sidebar": "sidebarcustom",
  "data-color": "primary",
  "data-topbar": "topbarcustom",
  "data-layout": "default",
  "data-size": "default",
  "data-width": "fluid",
  "data-sidebarbg": "none",
  "dir": "ltr",
  "themeVersion": "2",
};

const getInitialThemeSettings = () => {
  const storedSettings = localStorage.getItem("themeSettings");
  if (storedSettings) {
    const parsed = JSON.parse(storedSettings);
    // Force new theme if version doesn't match
    if (parsed.themeVersion !== defaultThemeSettings.themeVersion) {
      localStorage.setItem("themeSettings", JSON.stringify(defaultThemeSettings));
      return defaultThemeSettings;
    }
    return parsed;
  }
  return defaultThemeSettings;
};

const initialState = {
  themeSettings: getInitialThemeSettings(),
};


const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, { payload }) => {
      if (payload.dir === "rtl") {
        state.themeSettings = { ...defaultThemeSettings, dir: "rtl" };
      } else if (state.themeSettings.dir === "rtl" && payload.dir !== "rtl") {
        state.themeSettings = { ...defaultThemeSettings, ...payload, dir: "ltr" };
      } else {
        state.themeSettings = { ...state.themeSettings, ...payload };
      }


      localStorage.setItem(
        "themeSettings",
        JSON.stringify(state.themeSettings)
      );
    },
    resetTheme: (state) => {
      state.themeSettings = defaultThemeSettings;
      localStorage.removeItem("themeSettings");
    },
  },
});


export const { updateTheme, resetTheme } = themeSlice.actions;


export default themeSlice.reducer;
