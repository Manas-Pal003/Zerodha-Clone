import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import appstorebadge from '../assets/appstorebadge.svg'
import googleplaybadge from '../assets/googleplaybadge.svg'
const Footer = () => {
  return (
    <footer className='bg-gray-50 border-t border-gray-200 mt-10 pt-10 pb-10'>
      <div className='max-w-6xl mx-auto px-4'>
        
        {/* Top Section with Columns */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-10'>
          {/* Logo and Socials Column */}
          <div className='flex flex-col gap-4'>
            <Link to="/">
              <img src={logo} alt="Zerodha Logo" className='h-5 w-auto' />
            </Link>
            <div>
              <p className='text-sm text-gray-500'>© 2010 - 2026, Zerodha Broking Ltd.</p>
              <p className='text-sm text-gray-500'>All rights reserved.</p>
            </div>
            <div className='flex flex-row gap-4 mt-2'>
              <Link to="https://x.com/zerodha" className='text-gray-500 hover:text-blue-500'><BsTwitterX size={18} /></Link>
              <Link to="https://www.facebook.com/zerodha.social" className='text-gray-500 hover:text-blue-600'><FaFacebook size={18} /></Link>
              <Link to="https://www.instagram.com/zerodhaonline/" className='text-gray-500 hover:text-pink-600'><FaSquareInstagram size={18} /></Link>
              <Link to="https://www.linkedin.com/company/zerodha/" className='text-gray-500 hover:text-blue-700'><FaLinkedin size={18} /></Link>
            </div>
            <div className='flex gap-4 mt-2'>
              <Link to="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                <img src={googleplaybadge} alt="playstore" className='h-8' />
              </Link>
              <Link to="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
                <img src={appstorebadge} alt="appstore" className='h-8' />
              </Link>
            </div>
          </div>
          
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Account</h3>
            <Link to="/SignUp" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Open DEMAT account</Link>
            <Link to="https://zerodha.com/open-account/minor/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Minor DEMAT account</Link>
            <Link to="https://zerodha.com/open-account/nri/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>NRI DEMAT account</Link>
            <Link to="https://zerodha.com/fund-transfer/#tab-deposit_funds" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Fund Transfer</Link>
            <Link to="https://zerodha.com/mtf/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>MTF</Link>
          </div>
          
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Support</h3>
            <Link to="https://zerodha.com/contact/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Contact us</Link>
            <Link to="/support" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Support portal</Link>
            <Link to="https://zerodha.com/resources/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Downloads</Link>
            <Link to="https://zerodha.com/marketintel/circulars/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Circulars</Link>
            <Link to="https://zerodha.com/z-connect/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Z-Connect blog</Link>
          </div>
          
          <div className='flex flex-col gap-3'>
            <h3 className='text-lg font-medium text-gray-700 mb-2'>Company</h3>
            <Link to="/about" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>About</Link>
            <Link to="https://careers.zerodha.com/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Careers</Link>
            <Link to="/about" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Press</Link>
            <Link to="https://zerodha.com/about/philosophy/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Philosophy</Link>
            <Link to="https://zerodha.com/market/giftnifty/" className='hover:text-blue-500 text-[15px] text-gray-600 font-medium'>Gift Nifty</Link>
          </div>
        </div>
        
        {/* Disclaimers Section */}
        <div className='text-[11px] text-[#9b9b9b] leading-relaxed space-y-4'>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className='text-blue-500 hover:text-black'>complaints@zerodha.com</a>, for DP related to <a href="mailto:dp@zerodha.com" className='text-blue-500 hover:text-black'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on <a href="#" className='text-blue-500 hover:text-black font-medium'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="#" className='text-blue-500 hover:text-black font-medium'>Smart Online Dispute Resolution</a> | <a href="#" className='text-blue-500 hover:text-black font-medium'>Grievances Redressal Mechanism</a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE. <a href="#" className='text-blue-500 hover:text-black font-medium'>NSE broker factsheet</a>
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" className='text-blue-500 hover:text-black font-medium'>create a ticket here</a>.
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.
          </p>
          <p>
            Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).
          </p>
        </div>

        {/* Bottom Links */}
        <div className='flex flex-wrap justify-center gap-6 mt-8 pt-6 text-[13px] text-gray-500 font-medium'>
          <a href="https://www.nseindia.com/" className='hover:text-blue-500'>NSE</a>
          <a href="https://www.bseindia.com/" className='hover:text-blue-500'>BSE</a>
          <a href="https://www.mcxindia.com/" className='hover:text-blue-500'>MCX</a>
          <a href="https://zerodha.com/terms-and-conditions/" className='hover:text-blue-500'>Terms & conditions</a>
          <a href="https://zerodha.com/policies-and-procedures/" className='hover:text-blue-500'>Policies & procedures</a>
          <a href="https://zerodha.com/privacy-policy/" className='hover:text-blue-500'>Privacy policy</a>
          <a href="https://zerodha.com/disclosure/" className='hover:text-blue-500'>Disclosure</a>
          <a href="https://zerodha.com/investor-attention/" className='hover:text-blue-500'>For investor's attention</a>
          <a href="https://zerodha.com/tos/investor-charter/" className='hover:text-blue-500'>Investor charter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer