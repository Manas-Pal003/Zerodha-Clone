import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center mt-20 text-gray-700 mb-32'>
            <h2 className="text-4xl font-semibold">Zerodha Products</h2>
            <p className="text-xl font-medium">Sleek, modern, and intuitive trading platforms</p>
            <p className='text-[18px] '>Check out our <a className='text-blue-600'>investment offerings</a></p>
        </div>
    )
}

export default HeroSection