import React from 'react'
import { Link } from 'react-router-dom'
import stocks from "../../assets/StocksImage.avif"

const Investment = () => {
  return (
    <div className="flex flex-col items-center ml-30 mr-30 flex justify-center">
      <h1 className="text-3xl font-medium mt-10 ml-30">
        Investment options with Zerodha demat account
      </h1>
      <div className="flex flex-row items-center justify-center">
        <div>
          <img src={stocks} className='w-20 h-20'/>
          <h2>Stocks</h2>
        <p>Invest in all exchange-listed securities</p>
      </div>
      <div className="">
          <h2> IPO</h2>
          <p>Apply to the latest IPOs instantly via UPI</p>
        </div>
      </div>
      <div className='flex flex-col items-center  justify-center'>
        <div className="">
          <h2>Mutual funds</h2>
          <p>Invest in commission-free direct mutual funds</p>
        </div>
        <div className="">
          <h2>Futures & options</h2>
          <p>Hedge and mitigate market risk through simplified F&O trading</p>
        </div>
      </div>
      <div className="">
        <Link to="/products">
          <button className="text-lg font-medium mt-5 bg-blue-500 text-white px-10 py-2 rounded mb-20 cursor-pointer hover:bg-blue-600 transition-colors">
            Explore Investments
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Investment
