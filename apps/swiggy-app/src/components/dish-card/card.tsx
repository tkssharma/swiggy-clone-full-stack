import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const DishCard = ({
	dishDetails: {
		id: id,
    restaurant,
		name,
    rating,
    food_type,
		meal_type,
    cuisine_type,
    price,
    delivery_time,
    thumbnails,
		description,
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
				onClick={(e) => handleNavigate(restaurant.id)}>
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
						{rating || 4.3}
					</span>
					<span className='text-xs'>
						{delivery_time} Min
					</span>
					<span className='text-xs'>{price}₹ for Two </span>
				</div>
			</div>
		</motion.div>
	);
};

export default DishCard;
