import React from 'react';
import ChangeLanguage from './ChangeLanguage';
import Socials from './Socials';
import MobileNav from './MobileNav';
import Logo from '../img/header/logorb.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return <header className='relative w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
      {/*logo*/}
      <Link to={'/'} className='max-w-[50px] mt-11 '>
        <img src={Logo} alt='' />
      </Link>
      {/* nav - initialy hidden - show on desktop mode */}
      <nav className='hidden lg:flex  gap-x-12 font-semibold'>
        <Link to={'/'} className='text-green hover:text-pink text-xl transition' data-test="nav-link-home">{t('home')}</Link>
        <Link to={'/about'} className='text-green hover:text-pink text-xl transition' data-test="nav-link-about">{t('about')}</Link>
        <Link to={'/portfolio'} className='text-green hover:text-pink text-xl transition' data-test="nav-link-portfolio">{t('portfolio')}</Link>
        <Link to={'/shop'} className='text-green hover:text-pink text-xl transition' data-test="nav-link-shop">{t('shop')}</Link>
        <Link to={'/contact'} className='text-green hover:text-pink text-xl transition' data-test="nav-link-contact">{t('contact')}</Link>
      </nav>
      <ChangeLanguage/>
      <Socials/>
      <MobileNav/>
    </div> 
  </header>;
};

export default Header;
