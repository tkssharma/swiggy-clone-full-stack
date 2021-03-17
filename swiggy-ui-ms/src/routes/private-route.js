import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect
  } from 'react-router-dom';


const privateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest} render = {props => (
        isAuthenticated? <Component {...props}/> :
        <Redirect to={{pathname: '/'}}/>
    )} />
);


export default privateRoute;