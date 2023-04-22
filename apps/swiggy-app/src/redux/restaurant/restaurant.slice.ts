import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ExternalApis } from "../../api";

export interface ApiData {
  status: "idle" | "pending" | "rejected";
  data: any;
  error: any;
}

interface RestaurantsState {
  restaurants: ApiData;
  selectedRestaurant: ApiData
}

export const fetchRestaurantDishes = createAsyncThunk(
  "fetch/restaurantsDishes",
  async (id: string) => {
    return ExternalApis.fetchRestaurantsDishes(id)
  }
);

export const fetchRestaurants = createAsyncThunk(
  "fetch/restaurants",
  async () => {
    return ExternalApis.fetchRestaurants()
  }
);

const initialState = {
  restaurants: {
    status: "idle",
    data: [],
    error: null,
  },
  selectedRestaurant: {
    status: "idle",
    data: {},
    error: null,
  }
} as RestaurantsState;

export const RestaurantSlice = createSlice({
  name: "answers",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchRestaurants.pending.type]: (
      state: RestaurantsState,
      action: any
    ) => {
      state.restaurants = {
        status: "pending",
        data: [],
        error: null,
      };
    },
    [fetchRestaurants.fulfilled.type]: (
      state: RestaurantsState,
      action: any
    ) => {
      state.restaurants = {
        status: "idle",
        data: action.payload,
        error: null,
      };
    },
    [fetchRestaurants.rejected.type]: (
      state: RestaurantsState,
      action: any
    ) => {
      state.restaurants = {
        status: "idle",
        data: [],
        error: action.payload,
      };
    },
    [fetchRestaurantDishes.pending.type]: (
      state: RestaurantsState,
      action: any
    ) => {
      state.selectedRestaurant = {
        status: "pending",
        data: {},
        error: null,
      };
    },
    [fetchRestaurantDishes.fulfilled.type]: (
      state: RestaurantsState,
      action: any
    ) => {
      state.selectedRestaurant = {
        status: "idle",
        data: action.payload,
        error: null,
      };
    },
    [fetchRestaurantDishes.rejected.type]: (
      state: RestaurantsState,
      action: any
    ) => {
      state.selectedRestaurant = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },
  },
});

export const topRestaurants = (state: any) =>
  state.restaurants.restaurants;
export const selectedRestaurants = (state: any) =>
  state.restaurants.selectedRestaurant;
export default RestaurantSlice.reducer;
