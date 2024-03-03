import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Collaborations = () => {
  return(
    <motion.section initial={{opacity: 0, y:"100%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"100%"}} transition={{transition1}} className='section lg:overflow-hidden'>
      <div className='container mx-auto h-full relative flex items-center justify-center'>
        <div className='flex flex-col lg:flex-row h-full items-center'>
          {/* text */}
          <motion.div initial={{opacity: 0, y:"-80%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"-80%"}} transition={{transition1}} className='flex flex-col items-center'>
            <h1 className='h1 text-pink mb-8 text-center'>Collaborations</h1>
            <h2 className='h2 text-left'>Salvaterra Country House</h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Collaborations;