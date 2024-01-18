import React from 'react';
// import icons
import { ImInstagram} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden lg:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
          <ImInstagram className='text-2xl text-[#696c6d] hover:text-primary transition'/>
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
