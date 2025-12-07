import { configureStore } from "@reduxjs/toolkit";
import { productSliceReducer } from "./slices/product-slice";
import { toggleSliceReducer } from "./slices/toggle-slice";
import { likedProductSliceReducer } from "./slices/liked_products-slice";

export const store = configureStore({
  reducer: {
    productSliceReducer,
    toggleSliceReducer,
    likedProductSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
