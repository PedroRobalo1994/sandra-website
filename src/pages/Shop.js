import React from 'react';
import Sandra1 from '../img/shop/sandra_1.jpg';
import Sandra2 from '../img/shop/sandra_2.jpg';
import Sandra3 from '../img/shop/sandra_3.jpg';
import Sandra4 from '../img/shop/sandra_4.jpg';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useTranslation } from 'react-i18next';

const Shop = () => {
  const { t } = useTranslation();
  return(
    <motion.section initial={{opacity: 0, y:"100%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"100%"}} transition={{transition1}} className='section lg:overflow-hidden'>
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start  gap-x-24 text-center lg:text-left'>
          {/* text */}
          <motion.div initial={{opacity: 0, y:"-80%"}} animate={{opacity: 1, y:0}} exit={{opacity:0, y:"-80%"}} transition={{transition1}} className='flex flex-col lg:items-center text-center'>
            <h1 className='h1 text-pink'>{t('shop')}</h1>
            <p className='mb-12 max-w-sm'>
            <p>{t('shop_description_1')}</p>
            <br/>
            <p>{t('shop_description_2')}</p>
            <p>{t('shop_description_3')}</p>
            <br/>
            <strong>
              <p className='p-1 text-pink'>{t('shop_description_4')}</p>
            </strong>            
            </p>
            <a href="https://go.hotmart.com/B96262929H" target="_blank" rel="noopener noreferrer" className='btn rounded-xl mb-[30px] mx-auto lg:mx-0 bg-green'>{t('visit_my_shop_button')}</a>
          </motion.div>
          {/* image grid */}
          <div className='grid grid-cols-2 gap-2'>
            {/* image */}
            <div className='max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='rounded-xl object-cover w-full h-full lg:h-[300px] hover:scale-110 transition-all dur500' src={Sandra1} alt=''/>            
            </div>
            <div className='max-w-[300px] lg:max-w-[470px] h-[250px] lg:h-[300px] bg-accent overflow-hidden'>
              <img className='rounded-xl object-cover w-full h-full hover:scale-110 transition-all dur500' src={Sandra2} alt=''/>
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
