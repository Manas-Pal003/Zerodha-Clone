import React from 'react'

const Value = () => {
    return (
        <div className='flex flex-col justify-center items-center w-[60%] mx-auto my-0 py-10'>
            <h2 className='flex items-start w-full text-2xl font-semibold mb-5 mt-15'>Charges for account opening</h2>
            <div className='w-full'>
                <table className='w-full border border-gray-200 border-collapse text-left'>
                    <thead>
                        <tr className='border-b border-gray-200'>
                            <th className='py-4 px-4 font-medium text-gray-700'>Type of account</th>
                            <th className='py-4 px-4 font-medium text-gray-700'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-gray-200 hover:bg-gray-50'>
                            <td className='py-4 px-4 text-gray-600'>Online account</td>
                            <td className='py-4 px-4'>
                                <span className='bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded'>FREE</span>
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50'>
                            <td className='py-4 px-4 text-gray-600'>Offline account</td>
                            <td className='py-4 px-4'>
                                <span className='bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded'>FREE</span>
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 hover:bg-gray-50'>
                            <td className='py-4 px-4 text-gray-600'>NRI account (offline only)</td>
                            <td className='py-4 px-4 text-gray-600'>₹ 500</td>
                        </tr>
                        <tr className='hover:bg-gray-50 bg-gray-50/50'>
                            <td className='py-4 px-4 text-gray-600'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td className='py-4 px-4 text-gray-600'>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className='flex items-start w-full text-2xl font-semibold mb-10 mt-15'>Demat AMC (Annual Maintenance Charge)</h2>
            <div className='w-full'>
                <table className='w-full border border-gray-200 border-collapse text-left'>
                    <thead>
                        <tr className='border-b border-gray-200'>
                            <th className='py-4 px-4 font-medium text-gray-700'>Value of holdings</th>
                            <th className='py-4 px-4 font-medium text-gray-700'>AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-gray-200 hover:bg-gray-50'>
                            <td className='py-4 px-4 text-gray-600'>Up to ₹4 lakh</td>
                            <td className='py-4 px-4'>
                                <span className='bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded'>FREE</span>
                            </td>
                        </tr>
                        <tr className='border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50'>
                            <td className='py-4 px-4 text-gray-600'>₹4 lakh - ₹10 lakh</td>
                            <td className='py-4 px-4 text-gray-600'>₹100 per year, charged quarterly</td>
                        </tr>
                        <tr className='border-b border-gray-200 hover:bg-gray-50'>
                            <td className='py-4 px-4 text-gray-600'>Above ₹10 lakh</td>
                            <td className='py-4 px-4 text-gray-600'>₹300 per year, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2 className='flex items-start w-full text-2xl font-semibold mb-10 mt-15'>Charges for optional value added services</h2>
            <div className='w-full'>
                <table className='w-full border border-gray-200 border-collapse text-left'>
                    <thead>
                        <tr className='border-b border-gray-200'>
                            <th className='py-4 px-4 font-medium text-gray-700'>Service</th>
                            <th className='py-4 px-4 font-medium text-gray-700'>Billing Frequency</th>
                            <th className='py-4 px-4 font-medium text-gray-700'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b border-gray-200 hover:bg-gray-50'>
                            <td className='py-4 px-4 text-gray-600'>Tickertape</td>
                            <td className='py-4 px-4 text-gray-600'>Monthly / Annual</td>
                            <td className='py-4 px-4 text-gray-600'>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr className='border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50'>
                            <td className='py-4 px-4 text-gray-600'>Smallcase</td>
                            <td className='py-4 px-4 text-gray-600'>Per transaction</td>
                            <td className='py-4 px-4 text-gray-600'>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr className='border-b border-gray-200 hover:bg-gray-50'>
                            <td className='py-4 px-4 text-gray-600'>Kite Connect</td>
                            <td className='py-4 px-4 text-gray-600'>Monthly</td>
                            <td className='py-4 px-4 text-gray-600'>Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Value