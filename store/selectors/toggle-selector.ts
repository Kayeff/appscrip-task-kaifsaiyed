import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../redux_store";

const toggleState = (state: RootState) => state.toggleSliceReducer;

export const selectRecommended = createSelector(
  [toggleState],
  (toggle) => toggle.recommended
);

export const selectSideFilter = createSelector(
  [toggleState],
  (toggle) => toggle.sideFilter
);
