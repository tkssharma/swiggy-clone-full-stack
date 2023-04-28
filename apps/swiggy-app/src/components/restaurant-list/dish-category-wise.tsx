import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cart/cart-action";
import axios from "axios";
import { authSelector } from "../../redux/auth/auth.slice";

function DishCategoryWise({ category, dishes, restaurantId, id, vegOnly }: any) {
	const cartItems = []
	const auth = useSelector(authSelector);
  const isAuth = auth.auth.isAuth;
	const currentUser = auth.currentUser

	const [currentUserCartDishes, setCurrentUserCartDishes] = useState([]);

	const dispatch = useDispatch();

	async function handleAddToCart(dishId: string, price: number) {
	}

	async function handleRemoveFromCart(dishId: string) {
	}

	return (
		<div
			id={`dishId${id}`}
			className='flex flex-col px-8 py-4'>
			<h1 className='text-lg leading-5 font-bold first-letter:capitalize'>
				{category}
			</h1>
			<p className='text-sm mb-4'>{dishes.length} items </p>
			{dishes.length > 0 &&
				dishes.map((foodId: string, idx: number) => {
					const [food] = dishes.filter((el: any) => el.category === category);
					return vegOnly ? (
						food.food_type && (
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
											src={food.thumbnails && food.thumbnails[0]}
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
										src={food.thumbnails[0]}
										alt={food.name}
									/>
								</div>
								{true && (
									<div className='absolute text-xs flex justify-between items-center h-8 w-24 shadow-lg px-2  -bottom-2 left-1/2 -translate-x-1/2  bg-white'>
										<button
											onClick={(e) => handleRemoveFromCart(foodId)}
											className='text-lg font-bold text-green-400 w-4 h-full'>
											{" "}
											{"-"}{" "}
										</button>

							

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
