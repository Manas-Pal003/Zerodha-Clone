import React from 'react'

const Charge = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[60%] mx-auto my-0 py-10'>
        <h2 className='flex w-full text-3xl font-semibold mb-10 mt-15'>Charges Explained</h2>
        <div className='flex flex-row gap-8 text-gray-800'>
        <div className='flex flex-col w-[50%]'>
             <p className='font-medium text-[18px] pb-6'>Securities/Commodities transaction tax </p  >
            <p className='text-[13px]  leading-5 pb-4'>

          Tax by the government when transacting on the exchanges. Charged as above on both buy 
          <br/> and sell sides when trading equity delivery. Charged only on selling side when trading 
          <br/> intraday or on F&O.
            </p>
          <p className='text-[13px]  leading-5 pb-4'>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge.<br/> Important to keep a tab.</p>
            

          <p className='font-medium text-[18px] pb-6'>Transaction/Turnover Charges</p>
          <p className='text-[13px]  leading-5 pb-4'>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>

          <p className='text-[13px]  leading-5 pb-4'>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>

          <p className='text-[13px]  leading-5 pb-4'>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>

          <p className='text-[13px]  leading-5 pb-4'>BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>

          <p className='text-[13px]  leading-5 pb-4'>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>

          <p className='font-medium text-[18px] pb-6'>Call & trade</p>
          <p className='text-[13px]  leading-5 pb-4'>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>

          <p className='font-medium text-[18px] pb-6'>Stamp charges</p>

        <p className='text-[13px]  leading-5 pb-4'>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

          <p className='font-medium text-[18px] pb-6'>NRI brokerage charges</p>

        <p className='text-[13px]  leading-5 pb-4'>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</p>
        <p className='text-[13px]  leading-5 pb-4'>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</p>
        <p className='text-[13px]  leading-5 pb-4'>₹500 + GST as yearly account maintenance charges (AMC) charges.</p>

        <p className='font-medium text-[18px] pb-6'>Account with debit balance</p>
        <p className='text-[13px]  leading-5 pb-4'>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
        <p className='font-medium text-[18px] pb-6'>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>

        <p className='text-[13px]  leading-5 pb-4'>Equity and Futures - ₹0.01 per crore + GST of the traded value.</p>
        <p className='text-[13px]  leading-5 pb-4'>Options - ₹0.01 per crore + GST traded value (premium value).</p>
        <p className='text-[13px]  leading-5 pb-4'>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</p>
        <p className='font-medium text-[18px] pb-6'>Margin Trading Facility (MTF)</p>
        <p className='text-[13px]  leading-5 pb-4'>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</p>
        <p className='text-[13px]  leading-5 pb-4'>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</p>
        <p className='text-[13px]  leading-5 pb-4'>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</p>

            
        </div>
        <div className='flex flex-col w-[50%]'>
            <p className='font-medium text-[18px] pb-6'>GST</p>
            <p className='text-[13px]  leading-5 pb-4'>
Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

          <p className='font-medium text-[18px] pb-6'>SEBI Charges</p>
          <p className='text-[13px]  leading-5 pb-4'>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
            
          <p className='font-medium text-[18px] pb-6'>DP (Depository participant) charges</p>
          <p className='text-[13px]  leading-5 pb-4'>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
          <p className='text-[13px]  leading-5 pb-4'>Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee.</p>

          <p className='text-[13px]  leading-5 pb-4'>Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee.</p>

          <p className='font-medium text-[18px] pb-6'>Pledging charges</p>

          <p className='text-[13px]  leading-5 pb-4'>₹30 + GST per pledge request per ISIN.</p>

          <p className='font-medium text-[18px] pb-6'>AMC (Account maintenance charges)</p>

          <p className='text-[13px]  leading-5 pb-4'>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>

          <p className='text-[13px]  leading-5 pb-4'>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>

          <p className='font-medium text-[18px] pb-6'>Corporate action order charges</p>

          <p className='text-[13px]  leading-5 pb-4'>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

          <p className='font-medium text-[18px] pb-6'>Off-market transfer charges</p>

          <p className='text-[13px]  leading-5 pb-4'>₹25 per transaction.</p>

          <p className='font-medium text-[18px] pb-6'>Physical CMR request</p>

          <p className='text-[13px]  leading-5 pb-4'>First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

          <p className='font-medium text-[18px] pb-6'>Payment gateway charges</p>

          <p className='text-[13px]  leading-5 pb-4'>₹9 + GST (Not levied on transfers done via UPI)</p>

          <p className='font-medium text-[18px] pb-6'>Delayed Payment Charges</p>

          <p className='text-[13px]  leading-5 pb-4'>Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>

          <p className='font-medium text-[18px] pb-6'>Trading using 3-in-1 account with block functionality</p>

          <p className='text-[13px]  leading-5 pb-4'>Delivery & MTF Brokerage: 0.5% per executed order.</p>
          <p className='text-[13px]  leading-5 pb-4'>Intraday Brokerage: 0.05% per executed order.</p>
          
        </div>

    </div>
    </div>
  )
}

export default Charge