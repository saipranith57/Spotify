import React from 'react'
import {assets, songsData} from '../assets/assets.js'
const Player = () => {
  return (
    <div className='h-[10%] bg-black  justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={songsData[0].image} alt="" />
            <div>
                <p>{songsData[0].name}</p>
                <p>{songsData[0].desc.slice(0,12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m -auto '>
            <div className='flex gap-4'>
                <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
                <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
                <p>1:06</p>
                <div className='w-[60vw] max-w-[500px] bg-gray-500 rounded-full cursor-pointer'>
                    <hr className='h-1 border-none w-2 bg-green-500 rounded-full'/>
                </div>
                <p>3:20</p>
            </div>
        </div>
    </div>
  )
}

export default Player