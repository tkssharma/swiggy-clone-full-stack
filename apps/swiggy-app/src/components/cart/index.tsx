import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./cart-item";
import { Link, useLocation } from "react-router-dom";
import { CartItemsSelector } from "../../redux/cart/cart.slice";
import { authSelector } from "../../redux/auth/auth.slice";

function index({ isCheckout }: any) {
	const {data: menuItem} = useSelector(CartItemsSelector);
  const { auth } = useSelector(authSelector);
  const isAuth = auth.isAuth;
  const currentUser = auth.currentUser
	const location = useLocation();
	const isInCheckout = location.pathname.split("/")[1] === "checkout";


	return isAuth ? (
		menuItem && menuItem.menu_items?.length > 0 ? (
			<>
				<div className='p-4 border '>
					<h1 className='text-3xl font-bold'> Cart </h1>
					<p className='text-sm text-gray-500'>{menuItem.menu_items.length} Items</p>
					{menuItem.menu_items.length > 0 &&
						menuItem.menu_items?.map((elem: any) => (
							<CartItem
								key={elem.id}
								dish={elem}
							/>
						))}
					<h1 className='text-lg font-bold flex justify-between'>
						<p>Subtotal</p>
						<p className='text-base'>
							₹{" "}
							{(menuItem.menu_items.length > 0 &&
								menuItem.menu_items.reduce(
									(total: any, curr: any) => total + + (curr.price * curr.count),
									0
								)) ||
								0}
						</p>
					</h1>
					{!isInCheckout && (
						<Link
							to={"/checkout"}
							className='bg-green-500 text-white w-full block text-center py-3
				 mt-4'>
							{" "}
							Checkout
						</Link>
					)}
				</div>
			</>
		) : (
			<div className='p-4'>
				<h1 className='text-center text-2xl font-bold mb-8 text-slate-400'>
					Empty Cart
				</h1>
				<img
					src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2'
					alt='empty cart'
				/>
			</div>
		)
	) : (
		<div className='p-4'>
			<h1 className='text-center text-2xl font-bold mb-8 text-slate-400'>
				Login To see the Cart
			</h1>
			<img
				src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2'
				alt='empty cart'
			/>
		</div>
	);
}

export default index;
