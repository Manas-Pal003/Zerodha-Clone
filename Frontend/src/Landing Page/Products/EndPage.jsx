import React from 'react'
import sensibull from '../../assets/sensibullLogo.svg'
import dittoLogo from '../../assets/dittoLogo.png'
import zerodhaFundhouse from '../../assets/zerodhaFundhouse.png'
import { Link } from 'react-router-dom'
const EndPage = () => {
  return (
    <div className='flex flex-col justify-center  items-center w-[60%] mx-auto my-0 py-10 pb-20'>
       <p className='text-[20px]  text-gray-800 leading-7 pb-20'>Want to know more about our technology stack? Check out the <Link to="https://zerodha.tech/" target='_blank' className='text-blue-800 font-medium hover:underline' >Zerodha.tech</Link> blog.</p>
       <h2 className='text-2xl font-medium pb-5'>The Zerodha Universe</h2>
       <p className='text-[20px]  text-gray-800 leading-7 pb-20 '>Extend your trading and investment experience even further with our partner platforms</p>
       <div className='flex flex-row py-5 pb-20'>
        <Link to="https://www.zerodhafundhouse.com/" className='w-[25%] mx-auto' target='_blank' >
            <img src={zerodhaFundhouse} alt="zerodhaFundhouse" />
            </Link>
            <Link to="https://joinditto.in/" className='w-[25%] mx-auto' target='_blank' >
            <img src={dittoLogo} alt="dittoLogo" />
            </Link>
            <Link to="https://sensibull.com/" className='w-[25%]  mx-auto' target='_blank' >
            <img src={sensibull} alt="sensibull" />
            </Link>
       </div>
       <Link to="/signup"><button className='bg-blue-500 text-white font-bold px-10 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition-colors '>Sign up for free</button></Link>
    </div>
  )
}

export default EndPage