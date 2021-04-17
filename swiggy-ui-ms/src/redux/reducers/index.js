import {combineReducers} from 'redux';
import {alert} from './alert.reducer';
import {authentication } from './auth.reducer';
import {restaurant } from './restaurant.reducer';

const rootReducer = combineReducers({
  alert, 
  authentication,
  restaurant
});

export default rootReducer;