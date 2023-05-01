import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../auth/auth.slice";
import DishReducer from "../dishes/dish.slice";
import RestaurantReducer from "../restaurant/restaurant.slice";
import CartReducer from "../cart/cart.slice";
import UserReducer from "../user/user.slice";

export default configureStore({
  reducer: {
    restaurants: RestaurantReducer,
    dishes: DishReducer,
    auth: AuthReducer,
    cart: CartReducer,
    user: UserReducer,
  },
  devTools: true,
});
