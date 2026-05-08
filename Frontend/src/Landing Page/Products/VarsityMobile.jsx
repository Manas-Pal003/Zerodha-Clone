import React from 'react'
import varsityMobileImg from '../../assets/varsitymobile.svg'
import googlePlay from "../../assets/GooglePlayLogo.svg"
import appStore from "../../assets/AppStore.svg"
import { Link } from 'react-router-dom'
const VarsityMobile = () => {
  return (
    <div className='flex flex-row justify-center gap-55 items-center w-[60%] mx-auto my-0 py-10'>
        <img src={varsityMobileImg} alt="varsityMobile" />
        <div>
        <h2 className='text-2xl font-semibold mb-5'>Varsity Mobile</h2>
        <p className='text-lg text-gray-800 leading-7'>An easy to grasp, collection of stock market<br/> lessons with in-depth coverage and <br/>illustrations. Content is broken down into <br/>bite-size cards to help you learn on the go.</p>
        <div className='flex flex-row gap-5 w-[70%] '>
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

export default VarsityMobile