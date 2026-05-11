import React from 'react'
import kite from "../../assets/kite.png"
import googlePlay from "../../assets/GooglePlayLogo.svg"
import appStore from "../../assets/AppStore.svg"
import { Link } from 'react-router-dom'
const Kite = () => {
  return (
    <div className='flex flex-row justify-center items-center border-t border-gray-300 w-[60%] mx-auto my-0 py-20'>
        <div className='flex flex-col'>
          <Link to="https://zerodha.com/products/kite" target="_blank">
            <img className='w-[558px] h-[421px] max-w-full' src={kite} alt="kite" />
          </Link>
        </div>
        <div className='flex flex-col  gap-3 w-1/2 pl-40 '>
            <h2 className='text-2xl font-semibold mb-5'>Kite</h2>
            <p className='text-lg text-gray-800 leading-7'>Our ultra-fast flagship trading platform with <br /> streaming market data, advanced charts, an <br />elegant UI, and more. Enjoy the Kite<br/> experience seamlessly on your Android and <br />iOS devices.</p>
            <div className='flex flex-row  w-[80%]'> 
                <Link to='https://play.google.com/store/apps/details?id=com.zerodha.kite3' target='_blank' >
                <img src={googlePlay} alt="googlePlay" />
                </Link>
                <Link to='https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802' target='_blank' >
                <img src={appStore} alt="appStore" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Kite