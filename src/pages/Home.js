import React from "react";
import SandraImg from "../img/home/sandra.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ transition1 }}
      className="section lg:overflow-hidden"
    >
      <div className="container mx-auto">
        {/* text & img wrapper */}
        <div className="flex flex-col justify-center">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ transition1 }}
            className="w-full pb-14 lg:mb-12 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            {/* Mobile title: horizontal display */}
            <h1 className="h1 text-pink block lg:hidden">
              {t('sandra')} {t('camilo')}
            </h1>

            {/* Desktop title: vertical display */}
            <h1 className="h1 text-pink hidden lg:block">
              {t('sandra')}<br />{t('camilo')}
            </h1>

            <p className="h2 text-[20px] lg:text-[26px]">
            {t('home_description')}
            </p>
            <Link to={"/contact"} className="btn rounded-xl bg-green mx-10">
            {t('contact_me_button')}
            </Link>
          </motion.div>
          {/* img */}
          <div className="flex justify-end ml-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ transition1 }}
              className="relative lg:right-20 overflow-hidden rounded-3xl"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={SandraImg}
                alt=""
                className="w-full lg:w-auto rounded-3xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
