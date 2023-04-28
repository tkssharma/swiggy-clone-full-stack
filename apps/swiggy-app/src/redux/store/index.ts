import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../auth/auth.slice";
import DishReducer from "../dishes/dish.slice";
import RestaurantReducer from "../restaurant/restaurant.slice";

export default configureStore({
  reducer: {
    restaurants: RestaurantReducer,
    dishes: DishReducer,
    auth: AuthReducer,
  },
  devTools: true,
});
