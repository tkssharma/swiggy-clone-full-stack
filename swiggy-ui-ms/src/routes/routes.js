import React from "react";
import { Route, Switch } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import LandingPg from "../components/templates/Landing";
import RestaurantPg from "../components/templates/RestaurantPage";
import PrivateRoute from './private-route';

export const Routes = () => {
  const isLoggedIn = useSelector(state => state.authentication.loggedIn)
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <LandingPg />} />
        
        <PrivateRoute 
             path="/restaurant" 
             Component={RestaurantPg} 
             isAuthenticated={isLoggedIn}
          />
      </Switch>
    </>
  );
};
