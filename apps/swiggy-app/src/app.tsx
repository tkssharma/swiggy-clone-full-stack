import AllRoutes from "./components/all-routes";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import LoginSignup from "./components/auth/login-signup"

function App() {
	const isAuth = useSelector((state: any) => state.auth.auth.isAuth);
	const [openLoginSignup, setOpenLoginSignup] = useState(false);
	const [loadlogin, setLoadLogin] = useState(true);
	return (
		<>
			<LoginSignup
				open={openLoginSignup}
				loadlogin={loadlogin}
			/>

			<AllRoutes
				setOpenLoginSignup={setOpenLoginSignup}
				setLoadLogin={setLoadLogin}
			/>
		</>
	);
}

export default App;
