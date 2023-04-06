import React, { useState, useEffect } from "react";
import "./otp.css";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Loading from "./loading";
import { useSelector } from "react-redux";
import Footer from "../../footer";
import Navbar from "../../navbar";

export default function Otp({ setOpenLoginSignup, setLoadLogin }: any) {
	const toast = useToast();
	const [otp, setOtp] = useState("");
	let [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	let isAuth = useSelector((state: any) => state.auth.auth.isAuth);
	let curUser = useSelector((state: any) => state.auth.currentUser);
	const cart = useSelector((state: any) => state.cart);
	let currentCart = null;
	if (isAuth) {
		[currentCart] = cart.filter((elem: any) => elem.username === curUser.username);
	}
	useEffect(() => {
		window.scrollTo(0, 0);
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	const veryfyOtp = (e: any) => {
		e.preventDefault();
		if (otp == "1234") {
			console.log(otp);
			navigate("/thankyou");
			setOtp("");
		} else {
			return toast({
				title: "Wrong OTP",
				description: "Try Again",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
		}
	};
	return (
		<>
			<Navbar
				setOpenLoginSignup={setOpenLoginSignup}
				setLoadLogin={setLoadLogin}
			/>{" "}
			{loading ? (
				<Loading />
			) : (
				<div className='body'>
					<div id='app'>
						{" "}
						<div id='app-container'>
							<div
								id='PaymentDetails'
								style={{}}>
								<div>
									<div className='card-details-container'>
										<div className='card-details'>
											<div>
												<img
													src='https://cdn.razorpay.com/bank-lg/SIBL.svg'
													alt='SIBL'
												/>
											</div>{" "}
											<div>
												<img
													src='https://cdn.razorpay.com/acs/network/RUPAY.svg'
													alt='RUPAY'
												/>
											</div>
										</div>
									</div>{" "}
									<div className='transaction-details-container'>
										{" "}
										<div className='transaction-details'>
											<div className='transaction-detail'>
												<div>
													<span>Paying To</span> <span>Swiggy</span>
												</div>
											</div>{" "}
											<div className='transaction-detail'>
												<div>
													<span>Total Amount</span>{" "}
													<span>
														INR{" "}
														{(currentCart?.cartItems.length > 1 &&
															currentCart.cartItems.reduce(
																(acc: any, val: any) => acc + +val.totalPrice,
																0
															)) ||
															0}
													</span>
												</div>
											</div>{" "}
										</div>
									</div>
								</div>{" "}
							</div>{" "}
							<div
								className='ActionArea'
								id='OTPActionArea'>
								<div className='title-area'>
									<h4 className='puck inline-block'>Enter OTP</h4>{" "}
									<img
										src='https://cdn.razorpay.com/static/assets/secured_by_razorpay.svg'
										alt='Secured by Razorpay'
										className='no-mob pull-right org-logo'
									/>
								</div>{" "}
								<p>
									One Time Password (OTP) successfully sent to the phone number
									linked to your card.
								</p>{" "}
								<form
									name='otpForm'
									id='otpForm'
									onSubmit={veryfyOtp}>
									<input
										onChange={(e) => {
											e.target.value = e.target.value.replace(/[^0-9]/g, "");
											setOtp(e.target.value);
										}}
										placeholder='OTP'
										type='text'
										autoComplete='one-time-code'
										maxLength={4}
										value={otp}
										required
									/>{" "}
									<button
										type='submit'
										id='submit-action'
										className='user-action'>
										<span>Submit</span>{" "}
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width={24}
											height={24}>
											<path
												d='M0 0h24v24H0z'
												fill='none'
											/>
											<path d='M12 4l-1 1 5 6H4v2h12l-5 6 1 1 8-8z' />
										</svg>
									</button>
								</form>{" "}
								<div className='actions-container'>
									<div className='user-action'>Cancel</div>{" "}
									<div className='user-action'>Resend OTP </div>
								</div>{" "}
							</div>{" "}
							<div id='GoToBank'>
								<div className='or'>or</div>{" "}
								<div className='gotobank-text'>
									<div className='has-lock'>
										Complete payment on bank's page{" "}
									</div>{" "}
									<div className='no-mob'>
										<p>You will be redirected to the bank’s 3D-Secure page.</p>
									</div>
								</div>
							</div>
							<div className='footer-branding'>
								<div className='no-mob'>
									<div className='branding'>
										<img
											className='branding-banks'
											src='https://cdn.razorpay.com/static/assets/pay_methods_branding.png'
											alt=''
										/>{" "}
										<div className='branding-logo'>
											<img
												src='https://cdn.razorpay.com/logo.svg'
												alt='Razorpay'
											/>
										</div>{" "}
										<div>
											Accept, process and disburse digital payments for your
											business.{" "}
										</div>
									</div>
								</div>{" "}
								<div className='no-desktop text-center'>
									<img
										src='https://cdn.razorpay.com/static/assets/secured_by_razorpay.svg'
										alt='Secured by Razorpay'
										className='org-logo'
									/>
								</div>
							</div>{" "}
						</div>
					</div>
				</div>
			)}
			<Footer />
		</>
	);
}
