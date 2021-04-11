import { RestaurantAPIConstants } from '../constants';
import ApiService from '../apis';

export const getRestaurants = () => async dispatch => {
  try {
     const { data } = await ApiService.get(`${process.env.REACT_APP_PUBLIC_API_URL}/api/v1/restaurants`)
     dispatch({
       type: RestaurantAPIConstants.FETCH_RESTAURANT_SUCCESS,
       payload: data
     })
  } catch(err){
    dispatch({
      type: RestaurantAPIConstants.FETCH_RESTAURANT_FAILURE,
      payload: err.message
    })
  }
}