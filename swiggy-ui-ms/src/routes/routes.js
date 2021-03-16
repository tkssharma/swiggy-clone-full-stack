import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPg from "../components/templates/Landing";
export const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <LandingPg />} />
      </Switch>
    </>
  );
};
