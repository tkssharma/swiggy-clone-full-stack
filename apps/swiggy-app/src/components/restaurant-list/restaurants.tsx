import axios from "axios";
import clsx from "clsx";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import RestaurantCard from "../restaurant-card/card";
import useLazyLoad from "../../hooks/useLazyLoad";
import Skeleton from "react-loading-skeleton";
import { fetchRestaurants, topRestaurants } from "../../redux/restaurant/restaurant.slice";
import { filter } from "@chakra-ui/react";

const NUM_PER_PAGE = 8;
const TOTAL_PAGES = 13;

const index = () => {
	const triggerRef = useRef(null);
  const {data: restaurants, state} = useSelector(topRestaurants);

	const filtersReducer = (state: any, { type }: any) => {
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
	const [filters, dispatch] = useReducer(filtersReducer, "");

	useEffect(() => {
		storeDispatch(fetchRestaurants());
	}, [filters]);


	const handleFilterChange = (filter: any) => {
		dispatch({ type: filter });
	};

	return (
		<>
			<div className='flex flex-col max-w-[1200px] mx-auto justify-center bg-white px-2 md:px-0'>
				<header className=' h-16 w-full  border-b flex items-end  justify-between'>
					<p className='font-bold tracking-wider text-2xl'>
						{restaurants.length} Restaurants
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
								filters === "" ? "font-bold border-b-2" : ""
							} cursor-pointer border-b-lack-transparent hover:border-black h-full hidden lg:flex pb-2 items-end`}>
							Filters{" "}
						</li>
					</ul>
				</header>

				{/* Restaurants to be rendered over here */}

					<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full mt-4 gap-8'>
						{
						restaurants.map((restaurant: any) => (
									<RestaurantCard
										restaurantDetails={restaurant}
										key={restaurant.id}
									/>
							  ))
            }
					</div>
          { state === 'pending' && (
            <div
					style={{ maxWidth: "1000px", padding: "50px", margin: "0 auto" }}
					className={clsx("trigger")}>
					<div className='flex gap-10 sm:max-w-[500px] lg:max-w-[900px] md:max-w-[600px]  p-0 sm:p-8 justify-center '>
            {state}
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
          )}
				
			</div>
		</>
	);
};

export default index;
