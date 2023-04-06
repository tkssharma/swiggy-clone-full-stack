import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import CartReducer from "./cart/cart-reducer";
import RestaurantReducer from "./restaurant/restaurant-reducer";
//import logger from "redux-logger";
import { AuthReducer } from "./auth/auth-reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const Reducer = combineReducers({
  restaurant: RestaurantReducer,
  cart: CartReducer,
  auth: AuthReducer,
});

export const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
