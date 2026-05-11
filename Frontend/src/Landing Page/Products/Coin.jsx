import React from 'react'
import coinImg from '../../assets/Coin.png'
import { Link } from 'react-router-dom'
import googleplaybadge from '../../assets/googleplaybadge.svg'
import appstorebadge from '../../assets/appstorebadge.svg'
import { FaArrowRight } from "react-icons/fa";

const Coin = () => {
  return (
    <div className='flex flex-row justify-center gap-25 items-center border-gray-300 w-[60%] mx-auto my-0 py-10'>
      <Link to="https://coin.zerodha.com/" target="_blank">
        <img src={coinImg} className='max-w-full' alt="coin" />
      </Link>
        <div>
            <h2 className='text-2xl font-semibold mb-5'>Coin</h2>
            <p className='text-lg text-gray-800 leading-7 mb-5'>Buy direct mutual funds online, commission-<br />
            free, delivered directly to your Demat<br /> account. Enjoy the investment experience<br /> on your Android <br /> and iOS devices.</p>
            <Link to="https://coin.zerodha.com/" target='_blank' className='text-blue-600 font-medium flex flex-row gap-2 items-center' >Coin <span className='text-xs'><FaArrowRight /></span></Link>
            <div className='flex flex-row gap-5 w-fit mt-5'> 
                            <Link to="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                              <img src={googleplaybadge} alt="playstore" className='h-10' />
                            </Link>
                            <Link to="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
                              <img src={appstorebadge} alt="appstore" className='h-10' />
                            </Link>
                        </div>
        </div>

    </div>
  )
}

export default Coin