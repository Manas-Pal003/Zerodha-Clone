import pricingImg from '../../assets/pricing.png';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className=" mx-auto w-[65%] mt-20 flex">
      <div className='flex flex-col w-[50%]'>
        <h2 className="text-2xl font-medium">Unbeatable pricing</h2>
        <p className="text-md mt-3">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <Link to="/pricing" className='text-blue-500 text-lg font-medium mt-2'>See pricing →</Link>
      </div>
      <div className='flex flex-col justify-end'>
        <img src={pricingImg} alt="" className='w-[80%] mx-auto'/>
      </div>
    </div>
  );
}

export default Pricing
