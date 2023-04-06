import { Routes, Route, Navigate } from "react-router-dom";
import Checkout from "../pages/checkout";
import HomePage from "../pages/home-page";
import NotFound from "../pages/not-found";
import Restaurant from "../pages/restaurant";
import Search from "../pages/search";
import LandingPage from "./landing-page/index";
import ThankyouPage from "../pages/thank-you-page";

import Otp from "./checkout/otp/otp";
import { useSelector } from "react-redux";

const AllRoutes = ({ setOpenLoginSignup, setLoadLogin }: any) => {
	const isAuth = useSelector((state: any) => state.auth.auth.isAuth);

	return (
		<>
			<Routes>
				<Route
					path='/home'
					element={
						<LandingPage
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/'
					element={
						<HomePage
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/search'
					element={
						<Search
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/restaurants/:id'
					element={
						<Restaurant
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
				<Route
					path='/checkout'
					element={
						<Checkout
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>

				<Route
					path='/otp'
					element={
						isAuth ? (
							<Otp
								setOpenLoginSignup={setOpenLoginSignup}
								setLoadLogin={setLoadLogin}
							/>
						) : (
							<Navigate to={"/"} />
						)
					}
				/>

				<Route
					path='/thankyou'
					element={
						<ThankyouPage
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>

				<Route
					path='*'
					element={
						<NotFound
							setOpenLoginSignup={setOpenLoginSignup}
							setLoadLogin={setLoadLogin}
						/>
					}
				/>
			</Routes>
		</>
	);
};

export default AllRoutes;
