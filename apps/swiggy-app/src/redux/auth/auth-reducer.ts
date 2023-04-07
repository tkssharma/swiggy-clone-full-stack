import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "./auth-action";

const INITIAL_STATE = {
  auth: {
    isAuth: false,
    error: false,
  },
  token: null,
  register: {
    registerLoading: false,
    registerStatus: 0,
    registerError: false,
  },
  currentUser: null,
};

// userSchema -> { username: "", name: "", phn: "", password: "" }
export function AuthReducer(state = INITIAL_STATE, { type, payload }: any) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        auth: { isAuth: true, error: null, registerStatus: 0 },
        currentUser: payload,
        token: payload?.token,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        auth: { isAuth: false, error: payload.error },
      };

    case LOGOUT:
      return {
        ...state,
        auth: {
          isAuth: false,
          error: false,
        },
        currentUser: { username: "", name: "" },
        token: null,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        register: {
          registerLoading: false,
          registerStatus: payload.registerStatus,
          registerError: false,
        },
      };

    case REGISTER_FAILED:
      return {
        ...state,
        register: {
          registerLoading: false,
          registerStatus: payload.registerStatus,
          registerError: payload.error,
        },
        currentUser: { username: "", name: "" },
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        register: {
          registerLoading: true,
          registerStatus: 0,
          registerError: false,
        },
      };

    default:
      return state;
  }
}
