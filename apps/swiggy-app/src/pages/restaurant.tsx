import React, { Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DishCategoryWise from "../components/restaurant-list/dish-category-wise";
import Skeleton from "react-loading-skeleton";
import Cart from "../components/cart";
import styles from "../styles/restaurant.module.css";
import DishSearchComponent from "../components/restaurant-list/dish-search-component";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import TopLoading from "../components/top-loading";
import { fetchRestaurantDishes, selectedRestaurants } from "../redux/restaurant/restaurant.slice";
import { fetchCartItems } from "../redux/cart/cart.slice";
import { authSelector } from "../redux/auth/auth.slice";

const Restaurant = ({ setOpenLoginSignup, setLoadLogin }: any) => {

  const dispatch = useDispatch()
	const { id } = useParams();
	const {status, data} = useSelector(selectedRestaurants);
  const {auth} = useSelector(authSelector);

	let dishes = data?.dishes
	const [selectedMenu, setSelectedMenu] = useState(0);
	const [dishSearch, setDishSearch] = useState("");
	const [onlyDishesId, setOnlyDishesId] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [vegOnly, setVegOnly] = useState(false);

  useEffect(() => {
    const filtered: any = []
    
    for(const i in dishes) {
      for(const dish of dishes[i]) {
        if(dish.name.toLowerCase().includes(dishSearch.toLowerCase())) {
          filtered.push(dish);
        }
      }
    }
    setSearchResults(filtered)
  }, [dishSearch])


	function handleDishSearch(e: any) {
		setDishSearch(e.target.value);
	}

  useEffect(() => {
    dispatch(fetchRestaurantDishes(id!))
  }, [id])

  useEffect(() => {
    auth.isAuth && dispatch(fetchCartItems(null))
  }, [auth])


	return status === 'idle' ?  (
		<>
			<Navbar
				setOpenLoginSignup={setOpenLoginSignup}
				setLoadLogin={setLoadLogin}
			/>
			<div className='mx-auto mb-12'>
				<ul className='text-xs mx-auto max-w-[1200px] flex py-1 gap-3'>
					<li>Home</li>
					<li>/</li>
					<li>{data.name}</li>
				</ul>
				<div
					className={`bg-[#171a29] md:h-60 flex items-center text-white relative`}>
					<div className='h-10 md:w-[35rem]  flex gap-8  absolute -bottom-5 left-1/2 -translate-x-1/2'>
						<div className='h-full flex w-full  items-center px-2 bg-white shadow-xl'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='black'
								className='w-4 h-4'>
								<path
									fillRule='evenodd'
									d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
									clipRule='evenodd'
								/>
							</svg>
							<input
								type='text'
								value={dishSearch}
								onChange={handleDishSearch}
								placeholder='Search for Dishes'
								className='h-full md:w-[18rem] text-xs  text-black ml-2  border-0 outline-none  '
							/>
						</div>
						<div className='h-full items-center flex bg-white px-2 gap-2 shadow-xl'>
							<input
								className='h-5 w-5'
								type='checkbox'
								name='vegOnly'
								id='vegOnly'
								value={vegOnly + ''}
								onChange={(e) => setVegOnly(!vegOnly)}
							/>
							<label
								htmlFor='vegOnly'
								className='text-black text-xs font-bold'>
								Veg Only
							</label>
						</div>
					</div>
					<div className='max-w-[1200px] mx-auto flex h-[70%] items-end justify-between w-full  '>
						<div className='flex h-full py-12 md:py-0 flex-col md:flex-row gap-8 items-center md:items-end'>
							<img
								className='h-full w-60'
								src={ data.thumbnails && data.thumbnails[0]}
								alt='name'
							/>
							<div className='w-[80%] md:w-full'>
								<h1 className='text-4xl leading-10'>{data.name}</h1>
								<h1 className='text-sm text-gray-300 mb-4 font-semibold'>
									{data?.description?.substring(0,200)}
								</h1>
								<h1 className=' text-gray-200 first-letter:capitalize mb-4 font-semibold'>
									{data?.address?.city}
                  {data?.address?.state}
								</h1>
								<div className='mt-4 flex justify-between'>
									<div className='pr-8 border-r flex flex-col justify-end'>
										<span className='font-bold h-4 items-center mb-2 gap-2  text-white  flex w-fit'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='white'
												className='h-full'>
												<path
													fillRule='evenodd'
													d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
													clipRule='evenodd'
												/>
											</svg>
											{data.ratings}
										</span>
										<p className='text-xs text-gray-300'>20+ Ratings</p>
									</div>
									<div className='px-8  border-r flex flex-col justify-end'>
										<span className=''>
											{data.delivery_time}
											mins{" "}
										</span>
										<p className='text-xs text-gray-300'>Delivery Time</p>
									</div>
									<div className='px-8'>
										<span className=''>{data.average_price} ₹ </span>
										<p className='text-xs text-gray-300'>price</p>
									</div>
								</div>
							</div>
						</div>
						<div className='h-[80%] hidden md:block border-white w-60 border-2 relative pt-8 px-4'>
							<p className='absolute font-bold -top-5 -left-7 bg-[#171a29] p-2 pr-3 text-xl'>
								OFFER
							</p>
							<span className='flex text-sm gap-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='white'
									className='w-6 h-6 '>
									<path
										fillRule='evenodd'
										d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
										clipRule='evenodd'
									/>
								</svg>
								60% off up to ₹120 | Use code TRYNEW
							</span>
							<span className='flex text-sm gap-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='white'
									className='w-6 h-6 '>
									<path
										fillRule='evenodd'
										d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
										clipRule='evenodd'
									/>
								</svg>
								60% off up to ₹120 | Use code TRYNEW
							</span>
						</div>
					</div>
				</div>
				<div className='max-w-[1200px] mt-8 w-full flex columns-1 justify-center sm:justify-start sm:columns-3 md:columns-4 mx-auto'>
					<div className=' col-span-1 w-1/3 hidden sm:flex flex-col items-end'>
						{dishSearch.length > 0 && (
							<p
								className={`text-sm pr-8 border-r-4 cursor-pointer border-transparent mb-2 ${
									selectedMenu === -1
										? "text-[tomato] font-bold border-[tomato]"
										: ""
								}`}
							>
								Search
							</p>
						)}
						{dishes && Object.keys(dishes)?.map((key: any, idx: number) => (
							<p
								className={`text-sm pr-8 border-r-4 cursor-pointer border-transparent mb-2 ${
									selectedMenu === idx
										? "text-[tomato] font-bold border-[tomato]"
										: ""
								}`}
								onClick={(e) => setSelectedMenu(idx)}
								key={idx}>
								{key}
							</p>
						))}
					</div>

					<div className='col-span-2 w-2/3  '>
						{dishes ? (
							<div
								className={` ${styles.dishListContainer} h-[calc(100vh-10rem)] overflow-y-scroll`}>
								{dishSearch.length > 0
									? searchResults && searchResults.map((dish: any) => (
											<div className='flex flex-col px-8 py-4'>
												<DishSearchComponent
													key={dish.id}
                          isSearch={true}
													dish={dish}
													restaurantId={id}
													vegOnly={vegOnly}
												/>
											</div>
									  ))
									: Object.keys(dishes)?.map((key: any, idx: number) => (
											<DishCategoryWise
												key={idx}
												id={idx}
												restaurantId={id}
												vegOnly={vegOnly}
												category={key}
												dishes={dishes[`${key}`]}
											/>
									  ))}
							</div>
						) : (
							<div className='mt-16 flex gap-4 flex-col items-center justify-center'>
								<Skeleton
									height={100}
									width={400}
									enableAnimation={true}
								/>
								<Skeleton
									height={100}
									width={400}
									enableAnimation={true}
								/>
								<Skeleton
									height={100}
									width={400}
									enableAnimation={true}
								/>
							</div>
						)}
					</div>

					<div className='hidden md:block col-span-1 w-1/3 '>
						<Cart restaurantId={data.id} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	):
  <div className='h-screen w-screen grid place-items-center bg-[#fbfbfb]'>
  <span>loading..</span>
</div>
};

export default Restaurant;
