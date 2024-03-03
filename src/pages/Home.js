import React from 'react';
import SandraImg from '../img/home/sandra.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Home = () => {
  return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{transition1}} className='section lg:overflow-hidden'>
    <div className='container mx-auto'>
      {/* text & img wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <motion.div initial={{opacity: 0, y:"-50%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"-50%"}} transition={{transition1}} className='w-full pt-28  pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1 text-pink'>Sandra<br/>Camilo</h1>
        <p className='text-[26px] lg:text-[26px] font-primary mb-4 lg:mb-12'>Travel, Food & Lifestyle</p>
        <Link to={'/contact'} className='btn bg-green mx-10'>Contact Me</Link>
        </motion.div>
        {/* img */}
        <div className='flex justify-end'>
          <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale:0}} transition={{transition1}} className='relative lg:right-40 overflow-hidden -mt-4'>
            <motion.img whileHover={{scale: 1.1}} transition={transition1} src={SandraImg} alt='' className='w-full lg:w-auto'/>
          </motion.div>
        </div>      
      </div>
    </div>
  </motion.section>;
};

export default Home;
