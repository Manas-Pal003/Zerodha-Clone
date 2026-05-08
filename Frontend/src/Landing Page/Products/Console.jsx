import React from 'react'
import consoleImg from '../../assets/Console.png'
const Console = () => {
  return (
    
        <div className='flex flex-row justify-center gap-25 items-center border-gray-300 w-[60%] mx-auto my-0 py-10'>
            <div>
                <h2 className='text-2xl font-semibold mb-5'>Console</h2>
                <p className='text-lg text-gray-800 leading-7'>The central dashboard for your Zerodha <br />account. Gain insights into your trades and <br />investments with in-depth reports and<br /> visualisations.</p>
            </div>
            <div>
                <img src={consoleImg} alt="console" />
            </div>
        </div>
  
  )
}

export default Console