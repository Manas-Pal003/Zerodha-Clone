import React from 'react'
import Benefitsimg from '../../assets/Benefits.png'
const Benefits = () => {
  return (
    <div className='flex flex-row items-center justify-center mt-20'>
        <div className='ml-20 pl-10'>
            <img src={Benefitsimg} alt="BenefitsImg" className='w-[80%] mx-auto' />
            <h3 className='text-2xl font-medium text-center'>Benefits of opening a Zerodha demat account</h3>
        </div>
        <div className='flex flex-col pl-10 '>
            <h3 className="font-semibold text-xl mb-4">Unbeatable pricing</h3>
            <p className='mb-6 text-gray-500'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for <br/> intraday and F&O trades.</p>
            <h3 className="font-semibold text-xl mb-4">Best investing experience</h3>
            <p className='mb-6 text-gray-500'>Simple and intuitive trading platform with an easy-to-understand user <br/> interface.</p>
            <h3 className="font-semibold text-xl mb-4">No spam or gimmicks</h3>
            <p className='mb-6 text-gray-500 text-xl'>Committed to transparency — no gimmicks, spam, "gamification", or <br/> intrusive push notifications.</p>
            <h3 className="font-semibold text-xl mb-4">The Zerodha universe</h3>
            <p className='mb-10 text-gray-500 text-xl'>More than just an app — gain free access to the entire ecosystem of our <br/> partner products.</p>
        </div>
    </div>
  )
}

export default Benefits