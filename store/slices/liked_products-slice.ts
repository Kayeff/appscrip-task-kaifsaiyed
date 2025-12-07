import { createSlice } from "@reduxjs/toolkit";

type initialStateT = {
  products: number[];
  totalLiked: number;
};

const initialState: initialStateT = {
  products: [],
  totalLiked: 0,
};

const likedproductSlice = createSlice({
  name: "likedproduct",
  initialState,
  reducers: {
    likeProduct(state, action) {
      const id = action.payload;
      if (state.products.length === 0) {
        state.products = [id];
        state.totalLiked = 1;
      } else {
        state.products.push(id);
        state.totalLiked++;
      }
    },
    unlikeProduct(state, action) {
      state.products = state.products.filter((id) => id !== action.payload);
      state.totalLiked--;
    },
  },
});

export const likedProductSliceReducer = likedproductSlice.reducer;
export const { likeProduct, unlikeProduct } = likedproductSlice.actions;
