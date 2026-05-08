import React from 'react'
import {Link} from 'react-router-dom'
import tutorial from '../../assets/image.png'
const Tutorial = () => {
    return (
        <div className='w-full h-[400px] bg-gray-100 border-none flex flex-col justify-center items-center mb-25'>
            <h2 className='text-3xl font-medium mt-15 mb-8'>Steps to open a demat account with Zerodha</h2>
            <div className='flex flex-row gap-2 mt-5'>
                <Link to="https://youtu.be/JFx9tzhBrjE?si=58CYG7Hw_Db4bo6Ys">
                <img src={tutorial} alt="Tutorial" className='h-60 mb-5 pr-10' />
                </Link>
                
                <div className='flex flex-col gap-3 mt-5'>

                    <p className='text-2xl border-b-2 border-gray-200 pb-5'>  <span className='rounded-full border-gray-400 border-2 px-1 mr-1'>01</span> Enter the requested details</p>

                    <p className='text-2xl border-b-2 border-gray-200 pb-5'>  <span className='rounded-full border-gray-400 border-2 px-1 mr-1'>02</span> Complete e-sign & verification</p>

                    <p className='text-2xl border-b-2 border-gray-200 pb-5'>  <span className='rounded-full border-gray-400 border-2 px-1 mr-1'>03</span> Start investing!</p>
                </div>
            </div>
        </div>
    )
}

export default Tutorial