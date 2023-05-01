import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import RestaurantList from "../components/restaurant-list/restaurants";
import DishList from "../components/restaurant-list/dishes";

import { fetchRestaurants, topRestaurants } from "../redux/restaurant/restaurant.slice";
import { fetchDishes } from "../redux/dishes/dish.slice";
import { authSelector } from "../redux/auth/auth.slice";
import { fetchCartItems } from "../redux/cart/cart.slice";

const HomePage = ({ setOpenLoginSignup, setLoadLogin }: any) => {
  const [carousel, setCarousel] = useState(0);
  const firstRender = useRef(0);
  const [loading, setLoading] = useState(true);
  const {auth} = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants())
    dispatch(fetchDishes())
  }, [dispatch])

  useEffect(() => {
    auth.isAuth && dispatch(fetchCartItems(null))
  }, [auth])


  useEffect(() => {
    if (firstRender.current < 1) {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    }
  }, []);



  return loading ? (
    <div className='h-screen w-screen grid place-items-center bg-[#fbfbfb]'>
      <span>loading..</span>
    </div>
  ) : (
    <>
      <Navbar
        setOpenLoginSignup={setOpenLoginSignup}
        setLoadLogin={setLoadLogin}
      />
      <div className='h-full min-h-screen'>
        <div className='bg-[#171a29] relative'>
          {carousel > 0 && (
            <button
              onClick={(e) => setCarousel(carousel - 1)}
              className='hidden sm:grid absolute h-16 left-8 rounded-full top-1/2 -translate-y-1/2 w-16 bg-white place-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                />
              </svg>
            </button>
          )}
          <div className=' max-w-[72rem] w-[80%] relative pl-1  mx-auto flex overflow-hidden'>
            <motion.div
              animate={{ left: carousel && `-${carousel * 15 + 3}rem` }}
              className='relative flex justify-between  gap-12 py-8'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='min-w-[15rem] mx-auto w-[15rem] h-[15rem] sm:w-full sm:h-full min-h-[15rem] bg-white'>
                {" "}
                <img
                  className='h-full w-full'
                  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep'
                  alt='meal'
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='hidden sm:flex min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
                <img
                  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym'
                  alt='meal'
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='hidden sm:flex min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
                <img
                  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lyn9at38gjithnogzfui'
                  alt='meal'
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='hidden sm:flex min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
                <img
                  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v'
                  alt='meal'
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='hidden sm:flex min-w-[15rem] w-full h-full min-h-[15rem] bg-white'>
                {" "}
                <img
                  src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3'
                  alt='meal'
                />
              </motion.div>
            </motion.div>
          </div>
          {carousel < 1 && (
            <button
              onClick={(e) => setCarousel(carousel + 1)}
              className='hidden absolute h-16 right-8 rounded-full top-1/2 -translate-y-1/2 w-16 bg-white sm:grid place-items-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-6 h-6'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                />
              </svg>
            </button>
          )}
  

        </div>

        {/* Restaurants List */}
        <DishList />
      </div>
    </>
  );
};

export default HomePage;
