import { createSlice } from "@reduxjs/toolkit";

export interface User {
  displayName: string;
  photo: string;
  email: string;
  uid: string;
}

export interface InitialState {
  auth: any;
  register: any;
  currentUser: User | null;
  token: string | null;
}

const INITIAL_STATE: InitialState = {
  auth: {
    isAuth: false,
    error: false,
  },
  register: {
    registerLoading: false,
    registerStatus: 0,
    registerError: false,
  },
  currentUser: null,
  token: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    loginSuccess: (state: any, action: any) => {
      return {
        ...state,
        auth: { isAuth: true, error: null, registerStatus: 0 },
        currentUser: action.payload,
        token: action.payload?.token,
      };
    },
    appLogout: (state: any) => {
      return {
        ...state,
        auth: { isAuth: false, error: null, registerStatus: 0 },
        currentUser: null,
        token: null,
      };
    },
    loginFailed: (state: any, action: any) => {
      return {
        ...state,
        auth: { isAuth: false, error: action.payload.error },
      };
    },
    registerFailed: (state: any, action: any) => {
      return {
        ...state,
        register: {
          registerLoading: false,
          registerStatus: action.payload?.registerStatus,
          registerError: action.payload?.error,
        },
      };
    },
    registerSuccess: (state: any, action: any) => {
      return {
        ...state,
        register: {
          registerLoading: false,
          registerStatus: action.payload?.registerStatus,
          registerError: false,
        },
      };
    },
    registerRequest: (state: any, action: any) => {
      return {
        ...state,
        register: {
          registerLoading: true,
          registerStatus: 0,
          registerError: false,
        },
      };
    },
  },
});

export const {
  loginFailed,
  loginSuccess,
  appLogout,
  registerFailed,
  registerSuccess,
  registerRequest,
} = AuthSlice.actions;
export const authSelector = (state: any) => state.auth;
export default AuthSlice.reducer;
