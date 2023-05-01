import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ExternalApis } from "../../api";

export interface ApiData {
  status: "idle" | "pending" | "rejected";
  data: any;
  error: any;
}

interface UserState {
  addresses: ApiData;
  orders: ApiData;
}

export const fetchOrders = createAsyncThunk(
  "fetch/fetchOrders",
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

export const fetchAddress = createAsyncThunk(
  "fetch/fetchAddress",
  async (_arg: any, { getState }: any) => {
    const state = getState();
    const token = state.auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return ExternalApis.fetchAddress(config);
  }
);

export const createAddress = createAsyncThunk(
  "fetch/createAddress",
  async (payload: any, { getState }: any) => {
    const state = getState();
    const token = state.auth.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return ExternalApis.createAddress(payload, config);
  }
);

const initialState = {
  addresses: {
    status: "idle",
    data: [],
    error: null,
  },
  selectedAddress: null,
  orders: {
    status: "idle",
    data: [],
    error: null,
  },
} as UserState;

export const UserSlice = createSlice({
  name: "dishes",
  initialState: initialState,
  reducers: {
    selectAddress: (state: any, action: any) => {
      return {
        ...state,
        selectedAddress: action.payload,
      };
    },
  },
  extraReducers: {
    [fetchAddress.fulfilled.type]: (state: UserState, action: any) => {
      state.addresses = {
        status: "idle",
        data: action.payload || [],
        error: null,
      };
    },
    [createAddress.fulfilled.type]: (state: UserState, action: any) => {
      state.addresses.data.push(action.payload);
    },
  },
});

export const { selectAddress } = UserSlice.actions;
export const UserAddressSelector = (state: any) => state.user.addresses;
export const selectedUserAddressSelector = (state: any) => state.user.selectedAddress;
export const UserOrdersSelector = (state: any) => state.user.orders;

export default UserSlice.reducer;
