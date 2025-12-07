import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: false,
  sideFilter: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    openRecommended(state) {
      state.recommended = true;
    },
    closeRecommended(state) {
      state.recommended = false;
    },
    openSideFilter(state) {
      state.sideFilter = true;
    },
    closeSideFilter(state) {
      state.sideFilter = false;
    },
  },
});

export const toggleSliceReducer = toggleSlice.reducer;
export const {
  closeRecommended,
  closeSideFilter,
  openRecommended,
  openSideFilter,
} = toggleSlice.actions;
