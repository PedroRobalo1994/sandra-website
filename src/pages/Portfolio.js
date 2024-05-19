import React from "react";
import Sandra5 from "../img/portfolio/sandra_5.jpg";
import Sandra6 from "../img/portfolio/sandra_6.jpg";
import Sandra3 from "../img/portfolio/sandra_3.jpg";
import Sandra4 from "../img/portfolio/sandra_4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ transition1 }}
      className="section lg:overflow-hidden"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start  gap-x-24 text-center lg:text-left">
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ transition1 }}
            className="flex flex-col lg:items-center text-center"
          >
            <h1 className="h1 text-pink">{t('portfolio')}</h1>
            <p className="mb-12 max-w-sm">
              {t('portfolio_description_1')}
              <br />
              <br />
              <strong>
                <p className="p-1 text-pink">
                  {t('portfolio_description_2')}
                </p>
              </strong>
            </p>
            <Link
              to={"/portfolio/collaborations"}
              className="btn rounded-xl mb-[30px] mx-auto lg:mx-0 bg-green"
            >
              {t('view_more_button')}
            </Link>
          </motion.div>
          {/* image grid */}
          <div className="grid grid-cols-2 gap-2">
            {/* image */}
            <div className="max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden">
              <img
                className="rounded-xl object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500"
                src={Sandra5}
                alt=""
              />
            </div>
            <div className="max-w-[300px] lg:max-w-[470px] h-[250px] lg:h-[300px] bg-accent overflow-hidden">
              <img
                className="rounded-xl object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500"
                src={Sandra6}
                alt=""
              />
            </div>
            <div className="max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden">
              <img
                className="rounded-xl object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500"
                src={Sandra3}
                alt=""
              />
            </div>
            <div className="max-w-[300px] lg:max-w-[400px] h-[250px] lg:h-[300px] bg-accent overflow-hidden">
              <img
                className="rounded-xl object-cover h-full lg:h-[300px] hover:scale-110 transition-all dur500"
                src={Sandra4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
