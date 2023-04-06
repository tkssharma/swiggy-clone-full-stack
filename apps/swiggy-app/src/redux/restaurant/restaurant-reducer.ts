import { ADD_DISHES, ADD_RESTAURANT } from "./restaurant-action";

const INITIAL_STATE = {
  restaurant: {
    id: "",
    name: "",
    city: "",
    image: "",
    ratings: "",
    cheapestPrice: 0,
    deliveryTime: 0,
    menu: [],
  },
  dishes: [],
};

export default function RestaurantReducer(state = INITIAL_STATE, { type, payload }: any) {
  switch (type) {
    case ADD_RESTAURANT:
      return { ...state, restaurant: payload };
    case ADD_DISHES:
      return { ...state, dishes: [...payload] };
    default:
      return state;
  }
}
