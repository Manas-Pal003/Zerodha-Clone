import React, { useState } from 'react'
import { FiPlus, FiMinus, FiChevronUp, FiChevronDown, FiAtSign, FiUser } from "react-icons/fi";
import { SiZerodha } from "react-icons/si";
import { BsCurrencyRupee } from "react-icons/bs";
import { Link } from 'react-router-dom';

const sections = [
  {
    id: 'account',
    title: 'Account Opening',
    icon: <FiPlus className='text-[#387ed1] text-[14px]' strokeWidth={2.5} />,
    openIcon: <FiMinus className='text-[#387ed1] text-[14px]' strokeWidth={2.5} />,
    links: [
      { text: 'Resident individual', url: 'https://support.zerodha.com/category/account-opening/resident-individual' },
      { text: 'Minor', url: 'https://support.zerodha.com/category/account-opening/minor' },
      { text: 'Non Resident Indian (NRI)', url: 'https://support.zerodha.com/category/account-opening/nri-account-opening' },
      { text: 'Company, Partnership, HUF and LLP', url: 'https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening' },
      { text: 'Glossary', url: 'https://support.zerodha.com/category/account-opening/glossary' },
    ]
  },
  {
    id: 'zerodha',
    title: 'Your Zerodha Account',
    icon: <FiUser className='text-[#387ed1] text-[14px]' strokeWidth={2.5} />,
    openIcon: <FiUser className='text-[#387ed1] text-[14px]' strokeWidth={2.5} />,
    links: [
      { text: 'Your Profile', url: 'https://support.zerodha.com/category/your-zerodha-account/your-profile' },
      { text: 'Account modification', url: 'https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition' },
      { text: 'Client Master Report(CMR) and Depository Participant(DP)', url: 'https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details' },
      { text: 'Nomination', url: 'https://support.zerodha.com/category/your-zerodha-account/nomination-process' },
      { text: 'Transfer and conversion securities', url: 'https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares' },
    ]
  },
  {
    id: 'kite',
    title: 'Kite',
    icon: <SiZerodha className='text-[#387ed1] text-[14px]' />,
    openIcon: <SiZerodha className='text-[#387ed1] text-[14px]' />,
    links: [
      { text: 'IPO', url: 'https://support.zerodha.com/category/trading-and-markets/ipo' },
      { text: 'Trading faqs', url: 'https://support.zerodha.com/category/trading-and-markets/trading-faqs' },
      { text: 'Margin Trading Facility (MTF) & Margins', url: 'https://support.zerodha.com/category/trading-and-markets/margins' },
      { text: 'Charts and orders', url: 'https://support.zerodha.com/category/trading-and-markets/charts-and-orders' },
      { text: 'Alerts and nudges', url: 'https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges' },
    ]
  },
  {
    id: 'funds',
    title: 'Funds',
    icon: <BsCurrencyRupee className='text-[#387ed1] text-[14px]' strokeWidth={0.5} />,
    openIcon: <BsCurrencyRupee className='text-[#387ed1] text-[14px]' strokeWidth={0.5} />,
    links: [
      { text: 'Add money', url: 'https://support.zerodha.com/category/funds/adding-funds' },
      { text: 'Withdraw money', url: 'https://support.zerodha.com/category/funds/fund-withdrawal' },
      { text: 'Add bank accounts', url: 'https://support.zerodha.com/category/funds/adding-bank-accounts' },
      { text: 'eMandate', url: 'https://support.zerodha.com/category/funds/mandate' },
    ]
  },
  {
    id: 'console',
    title: 'Console',
    icon: <FiAtSign className='text-[#387ed1] text-[14px]' strokeWidth={2.5} />,
    openIcon: <FiAtSign className='text-[#387ed1] text-[14px]' strokeWidth={2.5} />,
    links: [
      { text: 'Reports', url: 'https://support.zerodha.com/category/console/reports' },
      { text: 'Ledger', url: 'https://support.zerodha.com/category/console/ledger' },
      { text: 'Portfolio', url: 'https://support.zerodha.com/category/console/portfolio' },
      { text: '60 Day Challenge', url: 'https://support.zerodha.com/category/console/60-day-challenge' },
      { text: 'Profile', url: 'https://support.zerodha.com/category/console/profile' },
      { text: 'IPOs', url: 'https://support.zerodha.com/category/console/ipo' },
    ]
  }
];

const Bottom = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className='w-[65%] m-auto mt-10 mb-20 gap-10 flex flex-row '>
        <div className='w-[75%] border border-gray-100 bg-white flex flex-col gap-5 font-medium'>
            {sections.map((section) => (
            <div key={section.id} className='bg-white'>
                {/* Accordion Header */}
                <div 
                className='flex justify-between items-center py-4 border border-gray-100 hover:bg-gray-50 cursor-pointer select-none '
                onClick={() => toggleSection(section.id)}
                >
                    <div className='flex items-center'>
                        <div className='px-6 border-r border-gray-100 flex items-center justify-center'>
                            <div className='w-[22px] h-[22px] rounded-full border border-[#387ed1] flex justify-center items-center'>
                            {openSections[section.id] ? section.openIcon : section.icon}
                            </div>
                        </div>
                        <h3 className='px-6 text-[17px] text-[#424242]'>{section.title}</h3>
                    </div>
                    <div className='px-6'>
                        {openSections[section.id] ? (
                            <FiChevronUp className='text-[#387ed1] text-xl' strokeWidth={2} />
                        ) : (
                            <FiChevronDown className='text-[#387ed1] text-xl' strokeWidth={2} />
                        )}
                    </div>
                </div>
                
                {/* Accordion Content */}
                {openSections[section.id] && (
                    <div className='px-20 py-8 border border-t-0 border-gray-100'>
                        <ul className='list-disc list-outside text-[#387ed1] space-y-4 ml-4 marker:text-[#387ed1]'>
                            {section.links.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.url} className='text-[#387ed1] hover:text-gray-800 transition-colors text-[15px]'>{link.text}</a>
                            </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            ))}
        </div>
        <div className='w-[25%] border border-gray-100 flex flex-col text-[20px]'>
            <table className='w-full border border-gray-100  border-collapse text-left'>
                <thead>
                    <tr className='border-b border-gray-100'>
                        <th className='text-lg bg-gray-100 p-4 font-semibold text-gray-700'>Quick Links</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b border-gray-100'>
                        <td className='py-4 px-4 text-gray-600'>
                            <Link to="https://zerodha.com/open-account" className='text-[#387ed1] hover:text-gray-800 transition-colors'>
                            1. Track account opening</Link>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-100'>
                        <td className='py-4 px-4 text-gray-600'>
                            <Link to="https://kite.zerodha.com/connect/login?api_key=console&sess_id=2bjcgNoL9SNGw9lJUFiRnQlgneoeKsR1" className='text-[#387ed1] hover:text-gray-800 transition-colors'>
                            2. Track segment activation</Link>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-100'>
                        <td className='py-4 px-4 text-gray-600'>
                            <Link to="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co" className='text-[#387ed1] hover:text-gray-800 transition-colors'>
                            3. Intraday margins</Link>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-100'>
                        <td className='py-4 px-4 text-gray-600'>
                            <Link to="https://kite.trade/docs/kite/" className='text-[#387ed1] hover:text-gray-800 transition-colors'>
                            4. Kite user manual</Link>
                        </td>
                    </tr>
                    <tr className='border-b border-gray-100'>
                        <td className='py-4 px-4 text-gray-600'>
                            <Link to="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha" className='text-[#387ed1] hover:text-gray-800 transition-colors'>
                            5. Learn how to create a ticket</Link>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Bottom