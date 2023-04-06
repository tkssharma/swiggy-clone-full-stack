import { useToast } from "@chakra-ui/react";
import axios from "axios";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export function logout(payload?: any) {
  return {
    type: LOGOUT,
    payload,
  };
}
