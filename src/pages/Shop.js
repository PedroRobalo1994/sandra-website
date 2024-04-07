import React from 'react';
import Sandra5 from '../img/portfolio/sandra_5.jpg';
import Sandra6 from '../img/portfolio/sandra_6.jpg';
import Sandra3 from '../img/portfolio/sandra_3.jpg';
import Sandra4 from '../img/portfolio/sandra_4.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

const Shop = () => {
  return(
    <motion.section initial={{opacity: 0, y:"100%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"100%"}} transition={{transition1}} className='section lg:overflow-hidden'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start  gap-x-24 text-center lg:text-left'>
          {/* text */}
          <motion.div initial={{opacity: 0, y:"-80%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"-80%"}} transition={{transition1}} className='flex flex-col lg:items-center text-center'>
            <h1 className='h1 text-pink'>Shop</h1>
            <p className='mb-12 max-w-sm'>
            <p>Embark on a global adventure and explore the very destinations that have left me spellbound. 🌎✨</p>
            <br/>
            <p>Dive into my curated collection of travel guides, brimming with insider tips, hidden gems, and practical tricks to transform your journey into an unforgettable odyssey.</p>
            <p>My guides will ensure you make the most of every moment.</p>
            <br/>
            <strong>
              <p className='p-1 text-pink'>Ready to create memories that last a lifetime? </p>
            </strong>            
            </p>
            <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0 bg-green'>Visit my shop</Link>
          </motion.div>
          {/* image grid */}
          <div className='grid grid-cols-2 lg:gap-2'>
            {/* image */}
            <div className='max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='rounded-xl object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Sandra5} alt=''/>
            </div>
            <div className='max-w-[300px] lg:max-w-[470px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='rounded-xl object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Sandra6} alt=''/>
            </div>
            <div className='max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='rounded-xl object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Sandra3} alt=''/>
            </div>
            <div className='max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='rounded-xl object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Sandra4} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Shop;
