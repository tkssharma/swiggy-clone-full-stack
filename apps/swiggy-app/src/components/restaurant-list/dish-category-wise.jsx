import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cart-action";
import axios from "axios";

function DishCategoryWise({ category, foodItems, restaurantId, id, vegOnly }) {
	const dishes = useSelector((state) => state.restaurant.dishes);
	const cartItems = useSelector((state) => state.cart);
	const isAuth = useSelector((state) => state.auth.auth.isAuth);
	const currentUser = useSelector((state) => state.auth.currentUser);

	const [currentUserCartDishes, setCurrentUserCartDishes] = useState([]);

	// console.log("isAuth", isAuth);

	useEffect(() => {
		if (isAuth && cartItems.length > 0) {
			const [currentUserCart] = cartItems.filter(
				(elem) => elem.username === currentUser.username
			);
			if (currentUserCart) {
				setCurrentUserCartDishes(currentUserCart.cartItems);
			}

			(async () => {
				const res = await axios.post(
					"http://localhost:8080/cart",
					currentUserCart,
					{
						withCredentials: true,
					}
				);
			})();
		}
	}, [cartItems]);

	const dispatch = useDispatch();

	async function handleAddToCart(dishId, price) {
		// Add cart payload will have {username,dishId,restaurantId,price}
		const payload = {
			username: currentUser.username,
			dishId,
			restaurantId,
			price,
		};

		dispatch(addToCart(payload));
	}

	async function handleRemoveFromCart(dishId) {
		// Add cart payload will have {username,dishId,restaurantId,price}
		const payload = {
			username: currentUser.username,
			dishId,
			restaurantId,
		};

		dispatch(removeFromCart(payload));
	}

	return (
		<div
			id={`dishId${id}`}
			className='flex flex-col px-8 py-4'>
			<h1 className='text-lg leading-5 font-bold first-letter:capitalize'>
				{category}
			</h1>
			<p className='text-sm mb-4'>{foodItems.length} items </p>
			{dishes.length > 0 &&
				foodItems.map((foodId, idx) => {
					const [food] = dishes.filter((el) => el._id === foodId);
					return vegOnly ? (
						food.veg && (
							<div
								key={idx}
								className='py-4 border-b flex justify-between items-end'>
								<div>
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
										{food.name}{" "}
									</h1>
									<h1 className='text-sm mb-2'>₹ {food.price} </h1>
									<p className='text-gray-400 text-xs'>{food.desc} </p>
								</div>
								<div className='relative px-4 flex'>
									<div className=''>
										<img
											className='h-[80px] w-[120px] rounded-md'
											src={food.image}
											alt={food.name}
										/>
									</div>
									{isAuth && (
										<div className='absolute text-xs flex justify-between items-center h-8 w-24 shadow-lg px-2  -bottom-2 left-1/2 -translate-x-1/2  bg-white'>
											<button
												onClick={(e) => handleRemoveFromCart(foodId)}
												className='text-lg font-bold text-green-400 w-4 h-full'>
												{" "}
												{"-"}{" "}
											</button>

											{/* //TODO */}
											<p>
												{currentUserCartDishes.filter(
													(elem) =>
														elem.dishId === foodId &&
														elem.restaurantId === restaurantId
												)[0]?.quantity || 0}
											</p>

											<button
												onClick={(e) => handleAddToCart(foodId, food.price)}
												className='text-lg font-bold text-green-400 w-4 h-full'>
												{" "}
												{"+"}{" "}
											</button>
										</div>
									)}
								</div>
							</div>
						)
					) : (
						<div
							key={idx}
							className='py-4 border-b flex justify-between items-end'>
							<div>
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
									{food.name}{" "}
								</h1>
								<h1 className='text-sm mb-2'>₹{food.price} </h1>
								<p className='text-gray-400 text-xs'>{food.desc} </p>
							</div>
							<div className='relative px-4 flex'>
								<div className='h-20 w-30'>
									<img
										className='h-[80px] w-[120px] rounded-md'
										src={food.image}
										alt={food.name}
									/>
								</div>
								{isAuth && (
									<div className='absolute text-xs flex justify-between items-center h-8 w-24 shadow-lg px-2  -bottom-2 left-1/2 -translate-x-1/2  bg-white'>
										<button
											onClick={(e) => handleRemoveFromCart(foodId)}
											className='text-lg font-bold text-green-400 w-4 h-full'>
											{" "}
											{"-"}{" "}
										</button>

										<p>
											{currentUserCartDishes.filter(
												(elem) =>
													elem.dishId === foodId &&
													elem.restaurantId === restaurantId
											)[0]?.quantity || 0}
										</p>

										<button
											onClick={(e) => handleAddToCart(foodId, food.price)}
											className='text-lg font-bold text-green-400 w-4 h-full'>
											{" "}
											{"+"}{" "}
										</button>
									</div>
								)}
							</div>
						</div>
					);
				})}
		</div>
	);
}

export default DishCategoryWise;
