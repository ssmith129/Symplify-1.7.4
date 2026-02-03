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
};


const initialState = {
  themeSettings: JSON.parse(
    localStorage.getItem("themeSettings") ||
      JSON.stringify(defaultThemeSettings)
  ),
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
