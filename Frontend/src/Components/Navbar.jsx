
import logo from '../assets/logo.svg';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 bg-white flex gap-5 justify-center items-center border-b border-gray-200 p-5'>
      <Link to="/"> <img src={logo} alt="logo" className='w-30' /></Link>
       
        <Link to="/signup">Sign up</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/support">Support</Link>
    </div>
  )
}

export default Navbar
