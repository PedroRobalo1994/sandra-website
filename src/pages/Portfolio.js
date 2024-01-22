import React from 'react';
import Image1 from '../img/portfolio/sandra_5.jpg';
import Image2 from '../img/portfolio/sandra_6.jpg';
import Image3 from '../img/portfolio/sandra_3.jpg';
import Image4 from '../img/portfolio/sandra_4.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Portfolio = () => {
  return(
    <motion.section initial={{opacity: 0, y:"100%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"100%"}} transition={{transition1}} className='section lg:overflow-hidden'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start  gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div initial={{opacity: 0, y:"-80%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"-80%"}} transition={{transition1}} className='flex flex-col lg:items-start'>
            <h1 className='h1 text-pink'>Portfolio</h1>
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
            <div className='max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Image1} alt=''/>
            </div>
            <div className='max-w-[300px] lg:max-w-[470px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Image2} alt=''/>
            </div>
            <div className='max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Image3} alt=''/>
            </div>
            <div className='max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Image4} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
