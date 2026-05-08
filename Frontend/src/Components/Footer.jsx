import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex flex-row justify-center   mt-10 border-t-2 bg-gray-100 border-gray-300 p-8 gap-4 pb-20'>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <Link to="/">
          <img src={logo} alt="Zerodha Logo" className='w-60 h-15' /></Link>
         <p className=''>© 2010 - 2026, Zerodha Broking Ltd.
          <p className=''>All rights reserved.</p> 
          <div className='flex flex-row gap-2 mt-5'>
            <Link to="https://www.facebook.com/zerodha.social" className='cursor-pointer' > <FaFacebook size={25} /></Link>
            <Link to="https://www.instagram.com/zerodhaonline/" className='cursor-pointer'> <FaSquareInstagram size={25}/></Link>
            <Link to="https://www.linkedin.com/company/zerodha/" className='cursor-pointer' > <FaLinkedin size={25}/></Link>

          </div>


        </p>
      </div>
      <div className='flex flex-col gap-3 ml-10 '>
        <p className='text-2xl font-medium'>Account</p>
        <Link to="/SignUp" className=' hover:text-blue-400'>Open DEMAT account</Link>
        <Link to="/SignUp" className=' hover:text-blue-400'>Minor DEMAT account</Link>
        <Link to="/SignUp" className=' hover:text-blue-400'>NRI DEMAT account</Link>
         <Link to="https://zerodha.com/mtf/" className=' hover:text-blue-400'>MTF</Link> 
      </div>
      <div className='flex flex-col gap-3 ml-10'>
         <p className='text-2xl font-medium'>Support</p>
         <Link to="https://zerodha.com/contact/" className=' hover:text-blue-400'>Contact us</Link>
         <Link to="https://support.zerodha.com/" className=' hover:text-blue-400'>Support portal</Link>
         <Link to="https://zerodha.com/resources/" className=' hover:text-blue-400'>Downloads</Link>
         <Link to="https://zerodha.com/z-connect/" className=' hover:text-blue-400'>Z-Connect blog</Link>
      </div>
      <div className='flex flex-col gap-3 ml-10'>
        <p className='text-2xl font-medium'>Company</p>
        <Link to="/about" className=' hover:text-blue-400'>About</Link>
        <Link to="https://careers.zerodha.com/" className=' hover:text-blue-400'>Creers</Link>
        <Link to="/about" className=' hover:text-blue-400'>Press</Link>
        <Link to="https://zerodha.com/about/philosophy/" className=' hover:text-blue-400'>Philosophy</Link>
        
      </div>
      <div className='flex flex-col gap-3 ml-10'>
         <p className='text-2xl font-medium'>Quick Linkst</p>
         <Link to="https://zerodha.com/ipo/">Upcomig IPOS</Link>
         <Link to="https://zerodha.com/charges/#tab-equities">Brokerage Charges</Link>
         <Link to="https://zerodha.com/marketintel/holiday-calendar/">Market Holidays</Link>
         <Link to="https://zerodha.com/market/giftnifty/">Gift Nifty</Link>
      </div>
      
    </div> 
  )
}

export default Footer