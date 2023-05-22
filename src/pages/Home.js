import React from 'react';
// import images
import WomanImg from '../img/home/woman.png'
// import link
import { Link } from 'react-router-dom';

const Home = () => {
  return <section className='section'>
    <div className='container mx-auto'>
      {/* text & img wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'><h1 className='h1'>Content <br/> Creator
        </h1>
        <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Lisbon, Portugal</p>
        <Link to={'/contact'} className='btn mb-[30px]'>hire me</Link>
        </div>
        {/* img */}
        <div className='flex justify-end'>
          <div className='relative lg:right-40 overflow-hidden'>
            <img src={WomanImg} alt='' className='w-full lg:w-auto'/>
          </div>
        </div>      
      </div>
    </div>
  </section>;
};

export default Home;
