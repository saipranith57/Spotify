import React from 'react';
import { assets } from '../assets/assets';

const NavBar = () => {
  return (
  <>
    <div className='w-full flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
        <img className='w-8 bg-black rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Left Arrow" />
        <img className='w-8 bg-black rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Right Arrow" />
      </div>
      <div className='flex items-center gap-4'>
        <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl md:block'>Explore premium</p>
        <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
        <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>S</p>
      </div> 
    </div>
    <div className='flex items-center gap-2 mt-6'>
    <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
    <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
    <p className='bg-black text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
      </div>
  
  </>
  );
};

export default NavBar;
