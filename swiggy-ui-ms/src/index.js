import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './components/hoc/UserContext/UserContext'
ReactDOM.render(
    <BrowserRouter>
    <UserProvider>
         <App />
      </UserProvider>
    </BrowserRouter>
,  document.getElementById("root")
);