import { RestaurantAPIConstants } from '../constants';
import ApiService from '../apis';

export const getRestaurants = (type) => async dispatch => {
  try {
     const { data } = await ApiService.get(`${process.env.REACT_APP_PUBLIC_API_URL}/api/v1/restaurants/search?type=${type}`);
     dispatch({
       type: RestaurantAPIConstants.FETCH_RESTAURANT_SUCCESS,
       payload: { data, type},
     })
  } catch(err){
    dispatch({
      type: RestaurantAPIConstants.FETCH_RESTAURANT_FAILURE,
      payload: err.message
    })
  }
}
export const getRestaurantData = (id) => async dispatch => {
  try {
     const { data } = await ApiService.get(`${process.env.REACT_APP_PUBLIC_API_URL}/api/v1/restaurants/${id}`);
     dispatch({
       type: RestaurantAPIConstants.FETCH_SINGLE_RESTAURANT_SUCCESS,
       payload: {data},
     })
  } catch(err){
    dispatch({
      type: RestaurantAPIConstants.FETCH_SINGLE_RESTAURANT_FAILURE,
      payload: err.message
    })
  }
}
