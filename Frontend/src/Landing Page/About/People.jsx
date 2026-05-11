import React from 'react'
import founder from '../../assets/nithinKamath.jpg'

const People = () => {
  return (
    <div className='flex flex-row justify-center   gap-10 '>
        <h1 className=' text-center text-2xl  font-medium'>People</h1>
        <div className='flex justify-center items-center flex-col'>
            <img src={founder} alt='founder' className='w-80 h-80 rounded-full mb-5'/>
            <h2 className='font-medium text-lg'>Nithin Kamath</h2>
            <p>Founder, CEO</p>
        </div>
        <div className='flex flex-col justify-center w-[50%] text-slate-600 font-medium' style={{marginBottom: '80px'}}>
            <p className='mt-4'>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles <br/> he faced during his decade long stint as a trader. Today,<br/> Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className=' mt-4'>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) <br/> and the Market Data Advisory Committee (MDAC).
            </p>
            <p className=' mt-4'>
            Playing basketball is his zen.
            </p>
            <p className=' mt-4'>
            Connect on <a href="https://nithinkamath.me/" className="text-blue-600 cursor-pointer">Homepage</a> / <a href="https://tradingqna.com/u/nithin/summary"className="text-blue-600 cursor-pointer">TradingQnA</a> / <a href="https://x.com/Nithin0dha" className="text-blue-600 cursor-pointer">Twitter</a>
            </p>
        </div>
        

    </div>
  )
}

export default People