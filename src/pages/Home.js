import React from 'react';
import WomanImg from '../img/home/sandra.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Home = () => {
  return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} transition={{transition1}} className='section'>
    <div className='container mx-auto'>
      {/* text & img wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <motion.div initial={{opacity: 0, y:"-50%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"-50%"}} transition={{transition1}} className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'><h1 className='h1 text-[#b78a8a]'>Content <br/> Creator
        </h1>
        <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Lisbon, Portugal</p>
        <Link to={'/contact'} className='btn bg-[#373D17] mb-[-25px]'>hire me</Link>
        </motion.div>
        {/* img */}
        <div className='flex justify-end'>
          <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale:0}} transition={{transition1}} className='relative lg:right-40 overflow-hidden'>
            <motion.img whileHover={{scale: 1.1}} transition={transition1} src={WomanImg} alt='' className='w-full lg:w-auto'/>
          </motion.div>
        </div>      
      </div>
    </div>
  </motion.section>;
};

export default Home;
