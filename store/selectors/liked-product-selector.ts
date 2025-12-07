import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../redux_store";

const liked_productsState = (state: RootState) =>
  state.likedProductSliceReducer;

export const selectedLikedProducts = createSelector(
  [liked_productsState],
  (product) => product.products
);

export const selectedTotalLiked = createSelector(
  [liked_productsState],
  (product) => product.totalLiked
);
