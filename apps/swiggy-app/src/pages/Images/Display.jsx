import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DishSearchComponent from "../../components/restaurant-list/dish-search-component";
import { addRestaurant } from "../../redux/restaurant/restaurant-action";

function Display({ dish }) {
	const [restaurant, setRestaurant] = useState(null);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`http://localhost:8080/restaurants/${dish.restaurant[0]}`
			);
			setRestaurant(data);
		})();
	}, []);

	function handleNavigate(e) {
		dispatch(addRestaurant(restaurant));
		navigate(`/restaurants/${restaurant.id}`);
	}

	return !restaurant ? null : (
		<div
			key={dish.id}
			className='h-56 m-5 bg-white rounded-[20px] p-8'>
			{/* <Link to={`/restaurants/${dish.restaurant[0]}`}> */}
			<div
				onClick={handleNavigate}
				className='hidden md:block'>
				<h1 className='text-lg leading-5 font-bold first-letter:capitalize'>
					{restaurant.name}
				</h1>
				<p className='text-sm mb-4'>{restaurant.discription}</p>
			</div>
			<DishSearchComponent
				dish={dish}
				restaurantId={1}
				isSearch={true}
			/>
			{/* </Link> */}
		</div>
	);
}

export default Display;
