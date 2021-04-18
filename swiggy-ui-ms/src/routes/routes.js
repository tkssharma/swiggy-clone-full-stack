import React from "react";
import { Route, Switch } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import LandingPg from "../components/templates/Landing";
import RestaurantPg from "../components/templates/RestaurantPage";
import PrivateRoute from './private-route';
import MenuPage from '../components/MenuPage/MenuPages';
import AccountPage from '../components/MyAccount/MyAccountPage';
import CheckoutPage from '../components/CheckoutPage/CheckoutPage';
export const Routes = () => {
  const isLoggedIn = useSelector(state => state.authentication.loggedIn)
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <LandingPg />} />
        <Route path="/restaurant/menu/:id" exact render={() => <MenuPage />} />
        <Route path="/account" exact render={() => <AccountPage />} />
        <Route path="/checkout" exact render={() => <CheckoutPage />} />
        
        <PrivateRoute 
             path="/restaurant" 
             Component={RestaurantPg} 
             isAuthenticated={isLoggedIn}
          />
      </Switch>
    </>
  );
};
