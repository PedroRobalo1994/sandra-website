import React from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Shop = () => {
  return(
    <motion.section initial={{opacity: 0, y:"100%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"100%"}} transition={{transition1}} className='section lg:overflow-hidden'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start  gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div initial={{opacity: 0, y:"-80%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"-80%"}} transition={{transition1}} className='flex flex-col lg:items-start'>
            <h1 className='h1 text-pink'>Shop</h1>
            <p className='mb-12 max-w-sm'>
            Loren ipsum dolor sit amet consecutor
            <br/>
            <br/>
            <p className='p-1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0 bg-green'>View More</Link>
          </motion.div>
          {/* image grid */}
          <div className='grid grid-cols-2 lg:gap-2'>
            {/* image */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all dur500' src={Image1} alt=''/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all dur500' src={Image2} alt=''/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all dur500' src={Image3} alt=''/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all dur500' src={Image4} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Shop;