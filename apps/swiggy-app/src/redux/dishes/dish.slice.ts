import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ExternalApis } from "../../api";

export interface ApiData {
  status: "idle" | "pending" | "rejected";
  data: any;
  error: any;
}

interface DishState {
  dishes: ApiData;
}

export const fetchDishes = createAsyncThunk("fetch/Dishes", async (filter?: string) => {
  return ExternalApis.fetchDishes(filter);
});

const initialState = {
  dishes: {
    status: "idle",
    data: [],
    error: null,
  },
} as DishState;

export const DishSlice = createSlice({
  name: "dishes",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchDishes.pending.type]: (state: DishState, action: any) => {
      state.dishes = {
        status: "pending",
        data: [],
        error: null,
      };
    },
    [fetchDishes.fulfilled.type]: (state: DishState, action: any) => {
      state.dishes = {
        status: "idle",
        data: action.payload,
        error: null,
      };
    },
    [fetchDishes.rejected.type]: (state: DishState, action: any) => {
      state.dishes = {
        status: "idle",
        data: [],
        error: action.payload,
      };
    },
  },
});

export const topDishes = (state: any) => state.dishes.dishes;
export default DishSlice.reducer;
