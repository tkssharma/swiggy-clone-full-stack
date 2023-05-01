import { AnyARecord } from "dns";
import React from "react";
import { useSelector } from "react-redux";

function CartItem({ dish }: any) {
	return (
		<div className='my-4'>
			<div className='flex justify-between border-b pb-2'>
				<h1 className=' first-letter:capitalize text-sm max-w-[13rem] font-medium text-gray-500'>
					{dish.name}{" "}
				</h1>
				<p className='text-xs'>₹ {dish.price * dish.count} </p>
        <p className='text-xs'>Item: {dish.count} </p>
			</div>
		</div>
	);
}

export default CartItem;
