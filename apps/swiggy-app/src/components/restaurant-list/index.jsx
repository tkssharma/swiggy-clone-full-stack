import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { addDishes } from "../../redux/restaurant/restaurant-action";
import RestaurantCard from "../restaurant-card/card";
import useLazyLoad from "../../hooks/useLazyLoad";
import Skeleton from "react-loading-skeleton";

const NUM_PER_PAGE = 8;
const TOTAL_PAGES = 13;

const index = () => {
	const triggerRef = useRef(null);

	const filtersReducer = (state, { type }) => {
		switch (type) {
			case "deliverTime":
				return "_sort=deliverTime&_order=asc";

			case "ratings":
				return "_sort=rating&_order=desc";

			case "pricelth":
				return "_sort=cheapestPrice&_order=asc";

			case "pricehtl":
				return "_sort=cheapestPrice&_order=desc";

			default:
				return "";
		}
	};

	const storeDispatch = useDispatch();

	useEffect(() => {
		(async () => {
			const { data: dishes } = await axios.get(`http://localhost:8080/dishes`);
			storeDispatch(addDishes(dishes));
		})();
	}, []);

	const [filters, dispatch] = useReducer(filtersReducer, "");

	const { data, loading, error, reFetch } = useFetch(
		`http://localhost:8080/restaurants?${filters}`
	);

	useEffect(() => {
		onGrabData(1);
	}, [filters]);

	const onGrabData = (currentPage) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const data2 = data.slice(
					((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
					NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
				);
				resolve(data2);
			}, 1000);
		});
	};

	const { data: restaurants, loadingOfPosts } = useLazyLoad({
		triggerRef,
		onGrabData,
	});

	const handleFilterChange = (filter) => {
		dispatch({ type: filter });
	};

	return (
		<>
			<div className='flex flex-col max-w-[1200px] mx-auto justify-center bg-white px-2 md:px-0'>
				<header className=' h-16 w-full  border-b flex items-end  justify-between'>
					<p className='font-bold tracking-wider text-2xl'>
						{data.length} Restaurants
					</p>
					<ul className='flex gap-4 md:gap-2 text-sm text-gray-500  md:w-1/2 h-full  justify-between'>
						<li
							onClick={(e) => handleFilterChange("")}
							className={`${
								filters === "" ? "font-bold border-black" : ""
							} cursor-pointer border-b-2 border-transparent hover:border-black h-full flex pb-2 items-end`}>
							Relevance
						</li>
						<li
							onClick={(e) => handleFilterChange("deliverTime")}
							className={`${
								filters === "_sort=deliverTime&_order=asc"
									? "font-bold border-black"
									: ""
							} cursor-pointer border-b-2 border-transparent hover:border-black h-full hidden sm:flex pb-2 items-end`}>
							Delivery Time
						</li>
						<li
							onClick={(e) => handleFilterChange("ratings")}
							className={`${
								filters === "_sort=rating&_order=desc"
									? "font-bold border-black"
									: ""
							} cursor-pointer border-b-2 border-transparent hover:border-black h-full flex pb-2 items-end`}>
							Rating
						</li>
						<li
							onClick={(e) => handleFilterChange("pricelth")}
							className={`${
								filters === "_sort=cheapestPrice&_order=asc"
									? "font-bold border-black"
									: ""
							} cursor-pointer border-b-2 border-transparent hover:border-black h-full hidden sm:flex pb-2 items-end`}>
							Cost:Low to High
						</li>
						<li
							onClick={(e) => handleFilterChange("pricehtl")}
							className={`${
								filters === "_sort=cheapestPrice&_order=desc"
									? "font-bold border-black"
									: ""
							} cursor-pointer border-b-2 border-transparent hover:border-black h-full hidden md:flex pb-2 items-end`}>
							Cost:High to Low
						</li>
						<li
							onClick={(e) => handleFilterChange("")}
							className={`${
								filters === "filter" ? "font-bold border-b-2" : ""
							} cursor-pointer border-b-lack-transparent hover:border-black h-full hidden lg:flex pb-2 items-end`}>
							Filters{" "}
						</li>
					</ul>
				</header>

				{/* Restaurants to be rendered over here */}

				{loading ? (
					<h1>Loading</h1>
				) : (
					<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full mt-4 gap-8'>
						{" "}
						{!filters
							? restaurants.map((restaurant) => (
									<RestaurantCard
										restaurantDetails={restaurant}
										key={restaurant._id}
									/>
							  ))
							: data.map((restaurant) => (
									<RestaurantCard
										restaurantDetails={restaurant}
										key={restaurant._id}
									/>
							  ))}{" "}
					</div>
				)}
				<div
					ref={triggerRef}
					style={{ maxWidth: "1000px", padding: "50px", margin: "0 auto" }}
					className={clsx("trigger", { visible: loadingOfPosts })}>
					<div className='flex gap-10 sm:max-w-[500px] lg:max-w-[900px] md:max-w-[600px]  p-0 sm:p-8 justify-center '>
						<Skeleton
							className=''
							height={200}
							width={250}
						/>
						<div className='hidden sm:block'>
							<Skeleton
								height={200}
								width={250}
							/>
						</div>
						<div className='hidden lg:block'>
							<Skeleton
								height={200}
								width={250}
							/>
						</div>
						<div className='hidden md:block'>
							<Skeleton
								height={200}
								width={250}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
