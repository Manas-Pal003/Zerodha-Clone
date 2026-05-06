
import {Link} from 'react-router-dom';
const Bottom = () => {
  return (
    <div className='mt-20 mb-20 flex justify-center items-center flex-col gap-5'>
      <h2 className='text-2xl font-medium'>Open a Zerodha account</h2>
      <p className='mt-2'>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <Link to="/signup"><button className='bg-blue-500 text-white font-bold px-10 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition-colors'>Sign up for free</button></Link>
    </div>
  );
}

export default Bottom
