import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*logo*/}
      <Link to={'sandra-website/home/'} className='max-w-[200px]'>
        <img src={Logo} alt='' />
      </Link>
      {/* nav - initialy hidden - show on desktop mode */}
      <nav className='hidden lg:flex  gap-x-12 font-semibold'>
        <Link to={'sandra-website/home/'} className='text-[#373D17] hover:text-primary transition'>Home</Link>
        <Link to={'sandra-website/about'} className='text-[#373D17] hover:text-primary transition'>About</Link>
        <Link to={'sandra-website/portfolio'} className='text-[#373D17] hover:text-primary transition'>Portfolio</Link>
        <Link to={'sandra-website/contact'} className='text-[#373D17] hover:text-primary transition'>Contact</Link>
      </nav>
      <Socials/>
      <MobileNav/>
    </div> 
  </header>;
};

export default Header;
