import React from 'react';
import { ImInstagram } from 'react-icons/im';
import { FaTiktok } from 'react-icons/fa';

const Socials = () => {
  return <div className='hidden lg:flex ml-24'>
    <ul className='flex gap-x-5'>
      <li>
        <a href='https://www.instagram.com/sandra_camil0' target='_blank' rel='noreferrer'>
          <ImInstagram className='text-2xl text-green hover:text-pink transition'/>
        </a>
      </li>
      <li>
        <a href='https://www.tiktok.com/@sandra_camil0' target='_blank' rel='noreferrer'>
          <FaTiktok className='text-2xl text-green hover:text-pink transition'/>
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
