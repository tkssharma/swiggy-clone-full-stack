export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";

export function addToCart(payload: any) {
  return {
    type: ADD_TO_CART,
    payload,
  };
}

export function updateCart(payload: any) {
  return {
    type: UPDATE_CART,
    payload,
  };
}

export function removeFromCart(payload: any) {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
}
