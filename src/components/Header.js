import React from 'react';
import Socials from './Socials';
import MobileNav from './MobileNav';
import Logo from '../img/header/logorb.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='relative w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*logo*/}
      <Link to={'/'} className='max-w-[50px] mt-11 '>
        <img src={Logo} alt='' />
      </Link>
      {/* nav - initialy hidden - show on desktop mode */}
      <nav className='hidden lg:flex  gap-x-12 font-semibold'>
        <Link to={'/'} className='text-green hover:text-pink transition'>Home</Link>
        <Link to={'/about'} className='text-green hover:text-pink transition'>About</Link>
        <Link to={'/portfolio'} className='text-green hover:text-pink transition'>Portfolio</Link>
        <Link to={'/shop'} className='text-green hover:text-pink transition'>Shop</Link>
        <Link to={'/contact'} className='text-green hover:text-pink transition'>Contact</Link>
      </nav>
      <Socials/>
      <MobileNav/>
    </div> 
  </header>;
};

export default Header;
