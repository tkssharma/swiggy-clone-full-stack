import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./cart-action";

const INITIAL_STATE: any = [];

export default function CartReducer(state = INITIAL_STATE, { type, payload }: any) {
  switch (type) {
    case UPDATE_CART:
      return [payload];

    // Add cart payload will have {username,dishId,restaurantId,price}
    case ADD_TO_CART:
      const userCart = state.filter((cart: any) => cart.username === payload.username);

      if (userCart.length === 0) {
        const newUserCart = {
          username: payload.username,
          cartItems: [
            {
              dishId: payload.dishId,
              restaurantId: payload.restaurantId,
              price: payload.price,
              totalPrice: payload.price,
              quantity: 1,
            },
          ],
        };

        return [...state, newUserCart];
      } else {
        return state.map((obj: any) => {
          if (obj.username !== payload.username) return obj;

          const isInCartItems = obj.cartItems.filter(
            (elm: any) => elm.dishId === payload.dishId && elm.restaurantId === payload.restaurantId
          );

          if (isInCartItems.length === 0)
            return {
              ...obj,
              cartItems: [
                ...obj.cartItems,
                {
                  dishId: payload.dishId,
                  restaurantId: payload.restaurantId,
                  price: payload.price,
                  totalPrice: payload.price,
                  quantity: 1,
                },
              ],
            };

          const newCartItems = obj.cartItems.map((item: any) => {
            if (item.dishId === payload.dishId && item.restaurantId === payload.restaurantId) {
              return {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              };
            } else return item;
          });

          return { ...obj, cartItems: newCartItems };
        });
      }

    //in case of remove from cart payload will be {username, dishId, restaurantId}
    case REMOVE_FROM_CART:
      return state.map((obj: any) => {
        if (obj.username !== payload.username) return obj;

        const newCartItems = obj.cartItems.map((item: any) => {
          if (item.dishId === payload.dishId && item.restaurantId === payload.restaurantId) {
            return {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.price,
            };
          } else return item;
        });

        const filteredCartItems = newCartItems.filter(
          (cartItemObj: any) => cartItemObj.quantity > 0
        );

        return { ...obj, cartItems: filteredCartItems };
      });

    default:
      return state;
  }
}
