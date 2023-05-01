import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ExternalApis } from "../../api";

export interface ApiData {
  status: "idle" | "pending" | "rejected";
  data: any;
  error: any;
}

interface CartState {
  cart: ApiData;
}

export const fetchCartItems = createAsyncThunk(
  "fetch/cart",
  async (_arg: any, { getState }: any) => {
    const state = getState();
    const token = state.auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return ExternalApis.fetchCart(config);
  }
);

export const addCartItems = createAsyncThunk(
  "fetch/addCartItem",
  async (payload: any, { getState }: any) => {
    const state = getState();
    const token = state.auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return ExternalApis.addCartItems(payload, config);
  }
);

export const removeCartItems = createAsyncThunk(
  "fetch/removeCartItem",
  async (payload: any, { getState }: any) => {
    const state = getState();
    const token = state.auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return ExternalApis.removeCartItems(payload, config);
  }
);

const initialState = {
  cart: {
    status: "idle",
    data: {},
    error: null,
  },
} as CartState;

export const CartSlice = createSlice({
  name: "dishes",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchCartItems.pending.type]: (state: CartState, action: any) => {
      state.cart = {
        status: "pending",
        data: {},
        error: null,
      };
    },
    [fetchCartItems.fulfilled.type]: (state: CartState, action: any) => {
      state.cart = {
        status: "idle",
        data: action.payload || {},
        error: null,
      };
    },
    [fetchCartItems.rejected.type]: (state: CartState, action: any) => {
      state.cart = {
        status: "idle",
        data: {},
        error: action.payload,
      };
    },

    [addCartItems.fulfilled.type]: (state: CartState, action: any) => {
      state.cart = {
        status: "idle",
        data: action.payload || {},
        error: null,
      };
    },
    [removeCartItems.fulfilled.type]: (state: CartState, action: any) => {
      state.cart = {
        status: "idle",
        data: action.payload || {},
        error: null,
      };
    },
  },
});

export const CartItemsSelector = (state: any) => state.cart.cart;
export default CartSlice.reducer;
