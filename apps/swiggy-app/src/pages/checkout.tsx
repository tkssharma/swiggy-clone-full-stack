import { useState } from "react";
import CashOnDelivery from "../components/checkout/cash-on-delivery";
import CheckoutCredit from "../components/checkout/checkout-credit";
import Wallet from "../components/checkout/wallet";
import UPI from "../components/checkout/upi";
import { useSelector } from "react-redux";
import Cart from "../components/cart";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

function Checkout({ setOpenLoginSignup, setLoadLogin }: any) {
	const [checkoutState, setCheckoutState] = useState(4);
	let isAuth = useSelector((state: any) => state.auth.auth.isAuth);
	let curUser = useSelector((state: any) => state.auth.currentUser);
	const cart = useSelector((state: any) => state.cart);

	let currentCart = null;
	if (isAuth) {
		[currentCart] = cart.filter((elem: any) => elem.username === curUser.username);
	}

	return (
		<>
			<Navbar
				setOpenLoginSignup={setOpenLoginSignup}
				setLoadLogin={setLoadLogin}
			/>
			<div className=' flex max-w-[1500px] mx-auto bg-slate-100 '>
				<div className='w-full lg:w-[74%]  flex flex-col gap-12 items-center pt-20 '>
					{isAuth ? (
						<div className='h-52 border w-[80%] bg-white p-8'>
							<h1 className='text-xl font-semibold'>Logged in</h1>
							<br />
							<div className='flex gap-6 text-lg  font-medium '>
								<h2>{curUser.name}</h2> <h2>{curUser.username}</h2>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='1.5'
									stroke='currentColor'
									className=' w-6 h-6'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</div>
						</div>
					) : (
						<div className='h-52 border w-[80%] bg-white p-8'>
							<h1 className='text-2xl font-bold'>Account</h1>
							<p className='text-sm text-slate-400'>
								To place you order now, Login to your account or Signup
							</p>
							<div className='flex gap-4 mt-8'>
								<button
									onClick={(e) => setOpenLoginSignup((p: any) => !p)}
									className='p-2 px-4 border bg-white text-xs font-medium'>
									Have an account <br />
									<b> Login</b>
								</button>
								<button
									onClick={(e) => setOpenLoginSignup((p: any) => !p)}
									className='p-2 px-4 border bg-green-400 text-xs font-medium'>
									New to Swiggy? <br /> <b>Signup</b>
								</button>
							</div>
						</div>
					)}

					<div className='h-90  w-[80%] bg-white p-8'>
						<h1 className='text-xl font-semibold'>Select delivery address</h1>
						{isAuth && (
							<>
								<p className='text-base font-medium'>
									You have a saved address in this location
								</p>
								<br />
								<div className='h-52 flex  w-full  p-5'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='w-6 h-6'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
										/>
									</svg>{" "}
									&nbsp; &nbsp;
									<div className='  w-[50%]'>
										<h1 className='text-xl font-semibold'>Home</h1>
										<p className='text-base font-medium py-5'>Nangloi, Delhi</p>
										<button className='bg-green-500 rounded-sm text-white text-sm h-7 p-1 '>
											DELIVER HERE
										</button>
									</div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='w-6 h-6'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
										/>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
										/>
									</svg>{" "}
									&nbsp; &nbsp;
									<div className=' w-[50%]'>
										<h1 className=' text-xl font-semibold '>
											{" "}
											Add New Address
										</h1>
										<p className='py-5 text-base font-medium '>
											{" "}
											Click on Add new to add new Address
										</p>
										<button className='bg-green-500 rounded-sm text-white text-sm h-7 p-1'>
											ADD NEW
										</button>
									</div>
								</div>
							</>
						)}
					</div>
					<div className=' border w-[80%] bg-white p-5'>
						<h1 className='text-xl font-semibold'>Choose payment method</h1>
						{isAuth && (
							<div className='flex '>
								<div className='mt-5  w-[40%] bg-slate-200 p-8  text-start font-bold  '>
									<button
										onClick={() => {
											setCheckoutState(1);
										}}
										className={`h-12 text-left w-52 pl-2 hover:bg-white ${
											checkoutState === 1 ? "bg-white" : ""
										}`}>
										<div className='flex'>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='w-6 h-6'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3'
													/>
												</svg>
											</div>
											<div>&nbsp;Wallets</div>
										</div>
									</button>
									<br />
									<br />
									<button
										onClick={() => {
											setCheckoutState(2);
										}}
										className={`h-12 pl-2 text-left w-52 hover:bg-white ${
											checkoutState === 2 ? "bg-white" : ""
										}`}>
										<div className='flex'>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='w-6 h-6'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
													/>
												</svg>
											</div>
											<div>&nbsp; UPI</div>
										</div>
									</button>
									<br />
									<br />
									{/* <button  className='h-12 w-32 hover:bg-white '> Sodexo</button><br /><br /> */}
									<button
										onClick={() => {
											setCheckoutState(3);
										}}
										className={`h-12 pl-2 text-left w-52 hover:bg-white ${
											checkoutState === 3 ? "bg-white" : ""
										}`}>
										<div className='flex'>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='w-6 h-6'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z'
													/>
												</svg>
											</div>
											<div>&nbsp; NetBanking</div>
										</div>
									</button>
									<br />
									<br />

									<button
										onClick={() => {
											setCheckoutState(4);
										}}
										className={`h-12 pl-2 text-left w-52 hover:bg-white ${
											checkoutState === 4 ? "bg-white" : ""
										}`}>
										<div className='flex'>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='w-6 h-6'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
													/>
												</svg>
											</div>
											<div>&nbsp; Credit $ Debit Cards</div>
										</div>
									</button>
									<br />
									<br />
									<button
										onClick={() => {
											setCheckoutState(5);
										}}
										className={`h-12 pl-2 text-left w-52 hover:bg-white ${
											checkoutState === 5 ? "bg-white" : ""
										}`}>
										<div className='flex'>
											<div>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													strokeWidth='1.5'
													stroke='currentColor'
													className='w-6 h-6'>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z'
													/>
												</svg>
											</div>
											<div>&nbsp; Pay on Delivery</div>
										</div>{" "}
									</button>
									<br />
									<br />
								</div>
								<div className='  w-[60%]  p-8'>
									{/* {state ?   <Wallet/>:""} */}
									{checkoutState === 1 ? <Wallet /> : ""}
									{checkoutState === 2 ? <UPI /> : ""}
									{checkoutState === 4 ? <CheckoutCredit /> : ""}
									{checkoutState === 5 ? <CashOnDelivery /> : ""}
								</div>
							</div>
						)}
					</div>
				</div>
				<div className='w-[40%] hidden lg:block mt-14 p-5  '>
					<div className='bg-white w-[80%]'>
						<Cart ischeckout={true} />
					</div>

					<div className=' border w-[80%]   bg-white p-8'>
						<input
							className='font-extralight w-full  bg-gray-100 h-8 p-2'
							type='text'
							name=''
							id=''
							placeholder='“Any suggestions? We will pass it on...'
						/>
						<br />
						<br />
						<div className='w-full border border-gray-300 p-2'>
							<input type='checkbox' />
							<label>
								{" "}
								Unwell, or avoiding contact? Please select no-contact delivery.
								Partner will safely place the order outside your door (not for
								COD)
							</label>
						</div>
						<br />
						<button className='h-10 p-2 w-full border-dashed border-2 border-gray-300 hover:bg-gray-200'>
							Apply Coupon
						</button>
						<br />
						<br />

						<div className='col font-medium mb-2'>
							<h2>Bill Details</h2>
						</div>

						<div className='col text-xs font-medium p-1'>Item Total</div>

						<div className='col  text-xs font-medium pb-2'>Delivery Fee 🛈</div>
						<hr className='border border-gray-300' />

						<div className=' text-sm font-extralight pb-3 pt-3 '>
							Govt Taxes & Restaurant Charges 🛈
						</div>
						<hr style={{ border: "1px solid black" }} />
						<div className='flex justify-between p-2'>
							<div className='  font-semibold '>TO PAY</div>
							<div>
								₹{" "}
								{(currentCart?.cartItems.length > 0 &&
									currentCart.cartItems.reduce(
										(acc: any, val: any) => acc + +val.totalPrice,
										0
									)) ||
									0}
							</div>
						</div>
					</div>
				</div>
				<br />
			</div>
			<Footer />
		</>
	);
}

export default Checkout;
