import { DataObj } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

type initialStateT = {
  filteredData: DataObj[];
  recommendedFilter: string;
  sideFilter: {
    category: string;
    rating: string;
  };
};

const initialState: initialStateT = {
  filteredData: [],
  recommendedFilter: "recommended",
  sideFilter: {
    category: "all",
    rating: "all",
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    populateData(state, action) {
      const data: DataObj[] = action.payload;
      state.filteredData = data;
    },
    filterRecommended(state, action) {
      const value = action.payload;
      state.recommendedFilter = value;
    },
    filterSideBox(state, action) {
      const { type, value } = action.payload;
      state.sideFilter[type as keyof typeof state.sideFilter] = value;
    },
  },
});

export const productSliceReducer = productSlice.reducer;
export const { populateData, filterRecommended, filterSideBox } =
  productSlice.actions;
