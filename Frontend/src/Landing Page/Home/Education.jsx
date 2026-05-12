import { Link } from 'react-router-dom'
import education from '../../assets/education.svg'
const Education = () => {
  return (
    <div className="flex flex-row mx-auto w-[65%] mt-20 gap-20">
      <Link to="https://zerodha.com/varsity/">
      <img src={education} alt="education" className="w-[80%] mx-auto mt-10" />
      </Link>
      <div className="flex flex-col w-[50%] justify-center">
        <h2 className="text-xl font-medium mb-6">Free and open market education</h2>
        <p className="text-gray-700">
          Varsity, the largest online stock market education book in the world
          <br />
          covering everything from the basics to advanced trading.
        </p>
        <Link to="https://zerodha.com/varsity/" className='text-[#387ed1] hover:text-gray-800 transition-colors text-[15px] font-medium mt-4 w-fit'>Varsity →</Link>
        
        <p className="mt-8 text-gray-700">
          TradingQ&A, the most active trading and investment community
          <br /> 
          in India for all your market related queries.
        </p>
        <Link to="https://tradingqna.com/" className='text-[#387ed1] hover:text-gray-800 transition-colors text-[15px] font-medium mt-4 w-fit'>TradingQ&A →</Link>
      </div>
    </div>
  );
}

export default Education
