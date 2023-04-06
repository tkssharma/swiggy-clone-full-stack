import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cart-action";

function DishSearchComponent({ dish: food, restaurantId, isSearch, vegOnly }) {
	const cartItems = useSelector((state) => state.cart);
	const isAuth = useSelector((state) => state.auth.auth.isAuth);
	const currentUser = useSelector((state) => state.auth.currentUser);

	const [currentUserCartDishes, setCurrentUserCartDishes] = useState([]);

	useEffect(() => {
		if (isAuth && cartItems.length > 0) {
			const [currentUserCart] = cartItems.filter(
				(elem) => elem.username === currentUser.username
			);
			if (currentUserCart) {
				setCurrentUserCartDishes(currentUserCart.cartItems);
			}
		}
	}, [cartItems]);

	const dispatch = useDispatch();

	function handleAddToCart(dishId, price) {
		// Add cart payload will have {username,dishId,restaurantId,price}
		const payload = {
			username: currentUser.username,
			dishId,
			restaurantId,
			price,
		};
		dispatch(addToCart(payload));
	}

	function handleRemoveFromCart(dishId) {
		// Add cart payload will have {username,dishId,restaurantId,price}
		const payload = {
			username: currentUser.username,
			dishId,
			restaurantId,
		};
		dispatch(removeFromCart(payload));
	}

	return vegOnly ? (
		food.veg && (
			<>
				<div
					className={`py-4 ${
						!isSearch && "border-b"
					} flex justify-between items-end`}>
					<div className='w-2/3'>
						{food.veg ? (
							<img
								className='h-6 w-6'
								src='https://img.icons8.com/color/512/vegetarian-food-symbol.png'
								alt='veg'
							/>
						) : (
							<img
								className='h-6 w-6'
								src='https://img.icons8.com/color/512/non-vegetarian-food-symbol.png'
								alt='non veg'
							/>
						)}
						<h1 className='font-medium text-base first-letter:capitalize'>
							{food.name.substring(0, 55)}{" "}
						</h1>
						<h1 className='text-sm mb-2'>₹ {food.price} </h1>
					</div>
					<div className='relative px-4 flex w-1/3'>
						<img
							className='h-[80px] w-[120px] rounded-md'
							src={food.image}
							alt={food.name}
						/>
						{isAuth && (
							<div className='absolute text-xs flex justify-between items-center h-8 w-24 shadow-lg px-2  -bottom-2 left-1/2 -translate-x-1/2  bg-white'>
								<button
									onClick={(e) => handleRemoveFromCart(food.id)}
									className='text-lg font-bold text-green-400 w-4 h-full'>
									{" "}
									{"-"}{" "}
								</button>

								{/* //TODO */}
								<p>
									{currentUserCartDishes.filter(
										(elem) =>
											elem.dishId === food.id &&
											elem.restaurantId === restaurantId
									)[0]?.quantity || 0}
								</p>

								<button
									onClick={(e) => handleAddToCart(food.id, food.price)}
									className='text-lg font-bold text-green-400 w-4 h-full'>
									{" "}
									{"+"}{" "}
								</button>
							</div>
						)}
					</div>
				</div>
			</>
		)
	) : (
		<>
			<div
				className={`py-4 ${
					!isSearch && "border-b"
				} flex justify-between items-end`}>
				<div className='w-2/3'>
					{food.veg ? (
						<img
							className='h-6 w-6'
							src='https://img.icons8.com/color/512/vegetarian-food-symbol.png'
							alt='veg'
						/>
					) : (
						<img
							className='h-6 w-6'
							src='https://img.icons8.com/color/512/non-vegetarian-food-symbol.png'
							alt='non veg'
						/>
					)}
					<h1 className='font-medium text-base first-letter:capitalize'>
						{food.name.substring(0, 55)}{" "}
					</h1>
					<h1 className='text-sm mb-2'>₹ {food.price} </h1>
				</div>
				<div className='relative px-4 flex w-1/3'>
					<img
						className='h-[80px] w-[120px] rounded-md'
						src={food.image}
						alt={food.name}
					/>
					{isAuth && (
						<div className='absolute text-xs flex justify-between items-center h-8 w-24 shadow-lg px-2  -bottom-2 left-1/2 -translate-x-1/2  bg-white'>
							<button
								onClick={(e) => handleRemoveFromCart(food.id)}
								className='text-lg font-bold text-green-400 w-4 h-full'>
								{" "}
								{"-"}{" "}
							</button>

							{/* //TODO */}
							<p>
								{currentUserCartDishes.filter(
									(elem) =>
										elem.dishId === food.id &&
										elem.restaurantId === restaurantId
								)[0]?.quantity || 0}
							</p>

							<button
								onClick={(e) => handleAddToCart(food.id, food.price)}
								className='text-lg font-bold text-green-400 w-4 h-full'>
								{" "}
								{"+"}{" "}
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default DishSearchComponent;
