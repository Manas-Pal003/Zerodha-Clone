
import {Link} from 'react-router-dom';
import homeHeroImg from '../../assets/homeHero.png';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <img src={homeHeroImg} alt="homeHero" className='w-[65%] mx-auto' />
      <h2 className='text-2xl font-medium mt-10'>Invest in Everything</h2>
      <p className='text-2xl mt-2 mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds and more.</p>
      <Link to="/signup">
      <button className='text-lg font-medium mt-5 bg-blue-500 text-white px-10 py-2 rounded mb-20 cursor-pointer hover:bg-blue-600 transition-colors'>Sign up for free</button>
      </Link>
    </div>
  )
}

export default Home
