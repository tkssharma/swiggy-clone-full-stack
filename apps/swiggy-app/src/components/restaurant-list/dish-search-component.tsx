import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { addCartItems, removeCartItems } from "../../redux/cart/cart.slice";

function DishSearchComponent({ dish: food, restaurantId, isSearch, vegOnly }: any) {

  const [currentUserCartDishes, setCurrentUserCartDishes] = useState([]);
  const cartItems = []
  const { auth } = useSelector(authSelector);
  const isAuth = auth.isAuth;
  const currentUser = auth.currentUser

  const dispatch = useDispatch();
  
	async function handleAddToCart(dish: any) {
    dispatch(addCartItems({
      restaurant_id: restaurantId,
      menu_item: dish
    }))
}

async function handleRemoveFromCart(dish: any) {
  dispatch(removeCartItems({
    restaurant_id: restaurantId,
    menu_item: dish
  }))
}

  return (

    <>
      <div
        className={`py-4 ${!isSearch && "border-b"
          } flex justify-between items-end`}>
        <div className='w-2/3'>
          {food.food_type ? (
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
            {food.name?.substring(0, 55)}{" "}
          </h1>
          <h5 className='font-small text-base first-letter:capitalize'>
            {food.description.substring(0, 100)}{" "}
          </h5>
          <h1 className='text-sm mb-2'>₹ {food.price} </h1>
        </div>
        <div className='relative px-4 flex w-1/3'>
          <img
            className='h-[80px] w-[120px] rounded-md'
            src={food.thumbnails}
            alt={food.name}
          />
          {(
            <div className='absolute text-xs flex justify-between items-center h-8 w-24 shadow-lg px-2  -bottom-2 left-1/2 -translate-x-1/2  bg-white'>
              <button
                onClick={(e) => handleRemoveFromCart(food)}
                className='text-lg font-bold text-green-400 w-4 h-full'>
                {" "}
                {"-"}{" "}
              </button>


              <button
                onClick={(e) => handleAddToCart(food)}
                className='text-lg font-bold text-green-400 w-4 h-full'>
                {" "}
                {"+"}{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default DishSearchComponent;
