import { configureStore } from "@reduxjs/toolkit";
import { productSliceReducer } from "./slices/product-slice";
import { toggleSliceReducer } from "./slices/toggle-slice";

export const store = configureStore({
  reducer: {
    productSliceReducer,
    toggleSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
