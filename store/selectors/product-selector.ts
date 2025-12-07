import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../redux_store";

const productState = (state: RootState) => state.productSliceReducer;

export const productRecommended = createSelector(
  [productState],
  (product) => product.recommendedFilter
);

export const productSideFilter = createSelector(
  [productState],
  (product) => product.sideFilter
);

export const selectedFilteredData = createSelector(
  [productState],
  (product) => product.filteredData
);

export const selectedLikedProducts = createSelector(
  [productState],
  (product) => product.likedData
);
