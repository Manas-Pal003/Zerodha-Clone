import React from 'react'
import kiteConnectImg from '../../assets/KiteConnect.png'
const ConnectApi = () => {
    return (
        <div className='flex flex-row justify-center gap-25 items-center w-[60%] mx-auto my-0 py-10'>
            <div>
            <h2 className='text-2xl font-semibold mb-5'>Kite Connect API</h2>
            <p className='text-lg text-gray-800 leading-7'>Build powerful trading platforms and<br /> experiences with our super simple<br /> HTTP/JSON APIs. If you are a startup,<br /> build your investment app and showcase it<br /> to our clientbase.</p>
            </div>
            <img src={kiteConnectImg} alt="kiteConnect" />
        </div>
    )
}

export default ConnectApi