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
       <div className='flex flex-row items-start justify-center gap-10 py-5 pb-20'>
            <Link to="https://www.zerodhafundhouse.com/" target='_blank' className='flex flex-col items-center hover:opacity-80 transition-opacity w-[30%]' >
                <img src={zerodhaFundhouse} alt="zerodhaFundhouse" className='h-[45px] w-auto object-contain mb-4' />
                <p className='text-[14px] text-gray-500 text-center leading-relaxed font-medium'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            </Link>
            <Link to="https://joinditto.in/" target='_blank' className='flex flex-col items-center hover:opacity-80 transition-opacity w-[30%]' >
                <img src={dittoLogo} alt="dittoLogo" className='h-[45px] w-auto object-contain mb-4' />
                <p className='text-[14px] text-gray-500 text-center leading-relaxed font-medium'>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
            </Link>
            <Link to="https://sensibull.com/" target='_blank' className='flex flex-col items-center hover:opacity-80 transition-opacity w-[30%]' >
                <img src={sensibull} alt="sensibull" className='h-[45px] w-auto object-contain mb-4' />
                <p className='text-[14px] text-gray-500 text-center leading-relaxed font-medium'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
            </Link>
       </div>
       <Link to="/signup"><button className='bg-blue-500 text-white font-bold px-10 py-2 rounded-md cursor-pointer hover:bg-gray-800 transition-colors '>Sign up for free</button></Link>
    </div>
  )
}

export default EndPage