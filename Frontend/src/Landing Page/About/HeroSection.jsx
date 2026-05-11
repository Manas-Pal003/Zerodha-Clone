import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col gap-8 py-10 justify-center items-center '>
        <h1 className="text-2xl mx-auto leading-tight mt-16 mb-4 font-medium">
            We pioneered the discount broking model in India.<br/>Now, we are breaking ground with our technology.
        </h1>
        <div className='flex flex-row justify-center gap-10 border-t-2 border-gray-300 w-[80%] pt-18  mb-16 mt-20 font-inter'>
            <div className='flex flex-col text-[18px] text-[#424242] leading-tight w-1/2 pr-5'>
                <p className="mt-[16px] mb-[15px]">
                    We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                </p>
                <p className='mt-[16px] mb-[15px]'>
                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                </p>
                <p className='mt-[16px] mb-[15px]'>
                    Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                </p>
            </div>
            <div className='flex flex-col text-[18px] text-[#424242] leading-[1.8] w-1/2 pl-5'>
                <p className='mt-[16px] mb-[15px]'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                 <p className='mt-[16px] mb-[15px]'><a className='text-blue-600 hover:text-black font-medium' href='https://rainmatter.com/'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                 <p className='mt-[16px] mb-[15px]'>And yet, we are always up to something new every day. Catch up on the latest updates on our <a className='text-blue-600 hover:text-black font-medium' href='https://zerodha.com/z-connect/'>blog</a> or see what the media is <a className='text-blue-600 hover:text-black font-medium' href='https://zerodha.com/media'>saying about us</a> or learn more about our business and product <a className='text-blue-600 hover:text-black font-medium' href='https://zerodha.com/philosophy'>philosophies</a>.</p>
            </div>
        </div>
       
    </div>
  )
}

export default HeroSection