import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const RestaurantCard = ({
	restaurantDetails: {
		id: id,
		name,
		city,
    ratings,
    average_price,
		thumbnails,
		description,
		rating,
		deliverTime,
		cheapestPrice,
		dishes,
	},
}: any) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [quickView, setQuickView] = useState(false);

	function handleNavigate(id: any) {
     navigate(`/restaurants/${id}`)
	}

	return (
		<motion.div
			initial={{ opacity: 0, top: "-5rem" }}
			animate={{ opacity: 1, top: "0" }}
			className='h-full relative flex flex-col group/card w-full p-5 px-6 border border-transparent hover:border-gray-200 hover:shadow-md'>
			<div
				className='flex flex-col items-center'
				onClick={(e) => handleNavigate(id)}>
				<img
					src={thumbnails}
					alt={name}
					className='relative h-40  z-0'
				/>
				<p className='text-sm w-full font-semibold mt-4'>{name}</p>
				<p className='text-xs w-full  text-gray-500'>{description}</p>
				<div className='mt-4 flex w-full justify-between pb-4 border-b'>
					<span className='text-xs h-4 items-center  text-white px-2 bg-green-500 flex w-fit'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='white'
							className='h-[80%]'>
							<path
								fillRule='evenodd'
								d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
								clipRule='evenodd'
							/>
						</svg>
						{rating}
					</span>
					<span className='text-xs'>
						{deliverTime > 59
							? `${Math.floor(deliverTime / 60)} HRS ${deliverTime % 60}`
							: deliverTime}{" "}
						MINS{" "}
					</span>
					<span className='text-xs'>{average_price}₹ for Two </span>
				</div>
				<div
					onMouseOver={(e) => setQuickView(true)}
					onMouseLeave={(e) => setQuickView(false)}
					className='invisible relative z-[10000] flex group-hover/card:visible justify-center items-center pt-4 '>
					<p className='text-sm font-semibold text-blue-500'>QUICK VIEW</p>
					<AnimatePresence>
						{quickView && (
							<motion.div
								initial={{ scaleY: 0 }}
								animate={{ scaleY: 1 }}
								exit={{ scaleY: 0 }}
								className='absolute border bg-white shadow-2xl -top-40 h-64 w-60 p-4  z-[10000]'>
								<h1 className='tracking-widest font-bold text-2xl text-center mb-4'>
									{" "}
									MENU{" "}
								</h1>
								<div className='flex flex-col px-4'>
									{dishes?.map((menuItem: any, idx: number) => (
										<p
											className={`text-sm mb-2`}
											key={idx}>
											{menuItem.name}
										</p>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</motion.div>
	);
};

export default RestaurantCard;
