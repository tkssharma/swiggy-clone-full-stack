import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./components/hoc/UserContext/UserContext";

const node = document.getElementById("root");
ReactDOM.createRoot(node as HTMLDivElement).render(
	<Router>
		<ChakraProvider>
			<Provider store={store}>
      <UserProvider>
				<App />
        </UserProvider>
			</Provider>
		</ChakraProvider>
	</Router>
);
