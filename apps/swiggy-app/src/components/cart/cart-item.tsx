import { AnyARecord } from "dns";
import React from "react";
import { useSelector } from "react-redux";

function CartItem({ dish }: any) {
	const dishes = useSelector((state: any) => state?.restaurant.dishes);
	const [dishItem] = dishes?.filter((elem: any) => elem._id === dish.dishId);
	return (
		<div className='my-4'>
			<div className='flex justify-between border-b pb-2'>
				<h1 className=' first-letter:capitalize text-sm max-w-[13rem] font-medium text-gray-500'>
					{dishItem.name}{" "}
				</h1>
				<p className='text-xs'>₹ {dish.totalPrice} </p>
			</div>
		</div>
	);
}

export default CartItem;
