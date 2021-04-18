import { RestaurantAPIConstants } from '../constants';
const initialState = {selectedRestaurant : null, restaurant: [], topPicks: [], veg: [], nonVeg: [], premium: [], exclusive: [], error: '' };

export function restaurant(state = initialState, action) {
  switch (action.type) {
    case RestaurantAPIConstants.FETCH_RESTAURANT_SUCCESS:
      if (action.payload.type === 'premium') {
        return Object.assign({}, state, { premium: action.payload.data });
      } else if (action.payload.type === 'veg') {
        return Object.assign({}, state, { veg: action.payload.data });
      } else if (action.payload.type === 'non-veg') {
        return Object.assign({}, state, { nonVeg: action.payload.data });
      } else if (action.payload.type === 'exclusive') {
        return Object.assign({}, state, { exclusive: action.payload.data });
      } else if (action.payload.type === 'top') {
        return Object.assign({}, state, { topPicks: action.payload.data });
      }
    case RestaurantAPIConstants.FETCH_RESTAURANT_FAILURE:
      return Object.assign({}, state, { error: action.payload.error });
    case RestaurantAPIConstants.FETCH_SINGLE_RESTAURANT_SUCCESS:
      return Object.assign({}, state, { selectedRestaurant: action.payload.data });
    case RestaurantAPIConstants.FETCH_SINGLE_RESTAURANT_FAILURE:
        return Object.assign({}, state, { error: action.payload.error });  
    default:
      return state;
  }
}
