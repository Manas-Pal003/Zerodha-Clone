import React from 'react'
import { IoSearchOutline } from "react-icons/io5"
const Front = () => {
  return (
    <div className=' bg-gray-100 pb-10'>
      <div className='w-[65%] m-auto pt-10'>
        <div className='flex gap-3 justify-between items-center mb-10'>
          <h2 className='text-4xl font-bold'>Support Portal</h2>
          <button className='text-md bg-blue-500 text-white font-semibold border  px-4 py-2 rounded cursor-pointer hover:bg-gray-700'>My Tickets</button>
        
        </div>
        <div className='flex items-center py-2  rounded overflow-hidden bg-white shadow-sm focus-within:border-[#387ed1] focus-within:ring-1 focus-within:ring-[#387ed1] transition-all duration-200'>
          <div className='px-4 bg-white text-gray-600'>
            <IoSearchOutline className='text-2xl' />
          </div>
          <input 
            type="text" 
            placeholder='Eg: How do i open my account,How do i activate F&O...' 
            className='flex-1 px-4 py-2 outline-none border-none bg-transparent placeholder-gray-400 text-gray-900 text-xl'
          />
        </div>

      </div>
    </div>
  )
}

export default Front