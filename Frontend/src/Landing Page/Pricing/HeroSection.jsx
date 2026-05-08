import React from 'react'
import PricingEquity from '../../assets/PricingEquity.png'
const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[60%] mx-auto my-0 py-10'>
        
             <h2 className='text-3xl font-semibold mb-5 mt-15'>Charges</h2>
              <p className='text-[20px] text-gray-800 leading-7 text-center mb-20'>List of all charges and taxes</p>

       <img src={PricingEquity} alt="" className='w-[130%]' />
       
    </div>
  )
}

export default HeroSection