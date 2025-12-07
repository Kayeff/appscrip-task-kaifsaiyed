import { DataObj } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

type initialStateT = {
  allData: DataObj[];
  filteredData: DataObj[];
  likedData: number[];
  recommendedFilter: string;
  sideFilter: {
    category: string;
    rating: string;
  };
};

const initialState: initialStateT = {
  allData: [],
  filteredData: [],
  likedData: [],
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
      state.allData = data;
      state.filteredData = data;
    },
    likeProduct(state, action) {
      const id = action.payload;
      if (state.likedData.length === 0) {
        state.likedData = [id];
      } else {
        state.likedData.push(id);
      }
    },
    unlikeProduct(state, action) {
      state.likedData = state.likedData.filter((id) => id !== action.payload);
    },
    filterRecommended(state, action) {
      const value = action.payload;
      state.recommendedFilter = value;
    },
    filterSideBox(state, action) {
      const { type, value } = action.payload;
      state.sideFilter[type as keyof typeof state.sideFilter] = value;
    },
    applyFilters(state) {
      let result = state.allData;

      if (state.sideFilter.category !== "all") {
        result = result.filter(
          (prod) => prod.category === state.sideFilter.category
        );
      }

      if (state.sideFilter.rating !== "all") {
        result = result.filter(
          (prod) =>
            Number(state.sideFilter.rating) - 1 < prod.rating.rate &&
            prod.rating.rate <= Number(state.sideFilter.rating)
        );
      }

      if (state.recommendedFilter !== "recommended") {
        switch (state.recommendedFilter) {
          case "ratings": {
            result = [...result].sort((a, b) => b.rating.rate - a.rating.rate);
            break;
          }
          case "liked": {
            result = result.filter((prod) => state.likedData.includes(prod.id));
            break;
          }
          case "high-to-low": {
            result = [...result].sort((a, b) => b.price - a.price);
            break;
          }
          case "low-to-high": {
            result = [...result].sort((a, b) => a.price - b.price);
            break;
          }
        }
      }

      state.filteredData = result;
    },
  },
});

export const productSliceReducer = productSlice.reducer;
export const {
  populateData,
  filterRecommended,
  filterSideBox,
  likeProduct,
  applyFilters,
  unlikeProduct,
} = productSlice.actions;
