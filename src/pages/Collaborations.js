import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import Carousel from "../components/Carousel";
import Collab1 from "../img/collaborations/collab_1.jpg";
import Collab2 from "../img/collaborations/collab_2.jpg";
import { useTranslation } from 'react-i18next';


const Collaborations = () => {
  const { t } = useTranslation();
  const images = [Collab1, Collab2];
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ transition1 }}
      className="section lg:overflow-auto"
    >
      <div className="container mx-auto h-full relative">
      <h1 className="flex h1 text-pink justify-center mt-6 md:mt-0">{t('collaborations')}</h1>

        {/* First Collaborations Section */}
        <div className="collaborations-section">
          <div className="flex flex-col lg:flex-row h-full items-center justify-center text-center lg:text-left lg:pt-16">
            <div className="flex-1 max-h-full order-2 lg:order-none">
              <Carousel autoSlide={true}>
                {images.map((image) => (
                  <img className="rounded-3xl mb-1 p-2" alt="Carousel" src={image} />
                ))}
              </Carousel>
            </div>
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={{ transition1 }}
              className="flex-1 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center text-center"
            >
              <h2 className="h2">{t('collaboration_1_title')}</h2>
              <p className="mb-12 max-w-sm">
                {t('collaboration_1_description_1')}
                <br />
                <br />
              </p>
              <Link to={"/portfolio"} className="btn rounded-xl bg-green mb-6">
                {t('view_collaboration_button')}
              </Link>
            </motion.div>
          </div>
          <div> </div>
        </div>

        {/* Second Collaborations Section */}
        <div className="collaborations-section mt-12">
          <div className="flex flex-col lg:flex-row-reverse h-full items-center justify-center text-center lg:text-left lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={{ transition1 }}
              className="flex-1 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center text-center"
            >
              <h2 className="h2">{t('collaboration_2_title')}</h2>
              <p className="mb-12 max-w-sm">
              {t('collaboration_1_description_1')}
                <br />
                <br />
              </p>
              <a href="https://www.instagram.com/stories/highlights/18027758197825062/" target="_blank" rel="noopener noreferrer" className="btn rounded-xl bg-green mb-6">
                {t('view_collaboration_button')}
              </a>
            </motion.div>
            <div className="flex-1 lg:max-h-full order-2 lg:order-none">
              <Carousel autoSlide={true}>
                {images.map((image) => (
                  <img className="rounded-3xl mb-1 p-2" alt="Carousel" src={image} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Collaborations;
