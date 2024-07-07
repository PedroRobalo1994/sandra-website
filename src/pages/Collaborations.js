import React from "react";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import Carousel from "../components/Carousel";
import ChaoDoRio1 from "../img/collaborations/ChaoDoRio/ChaoDoRio1.JPEG";
import ChaoDoRio2 from "../img/collaborations/ChaoDoRio/ChaoDoRio2.JPEG";
import ChaoDoRio3 from "../img/collaborations/ChaoDoRio/ChaoDoRio3.JPEG";
import ChaoDoRio4 from "../img/collaborations/ChaoDoRio/ChaoDoRio4.JPEG";
import SantaMariaBejuco1 from "../img/collaborations/SantaMariaBejuco/SantaMariaBejuco1.JPEG";
import SantaMariaBejuco2 from "../img/collaborations/SantaMariaBejuco/SantaMariaBejuco2.JPEG";
import SantaMariaBejuco3 from "../img/collaborations/SantaMariaBejuco/SantaMariaBejuco3.JPEG";
import SantaMariaBejuco4 from "../img/collaborations/SantaMariaBejuco/SantaMariaBejuco4.JPEG";
import { useTranslation } from 'react-i18next';


const Collaborations = () => {
  const { t } = useTranslation();
  const imagesFirstCollaboration = [SantaMariaBejuco1, SantaMariaBejuco2, SantaMariaBejuco3, SantaMariaBejuco4];
  const imagesSecondCollaboration = [ChaoDoRio1, ChaoDoRio2, ChaoDoRio3, ChaoDoRio4];
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
            <div className="flex-1 order-2 lg:order-none">
              <Carousel autoSlide={true}>
                {imagesFirstCollaboration.map((image) => (
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
              <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDMyNzgzNzUyNTIyMjQw?story_media_id=3188915269371212555&igsh=MWIxcTBtdWhubzkweQ==" target="_blank" rel="noopener noreferrer" className="btn rounded-xl bg-green mb-6">
                {t('view_collaboration_button')}
              </a>
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
              <a href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTg0NjcwMzA1MjU0MzYz?story_media_id=3101124259992513267&igsh=MWd3MndncGpldGk0Nw==" target="_blank" rel="noopener noreferrer" className="btn rounded-xl bg-green mb-6">
                {t('view_collaboration_button')}
              </a>
            </motion.div>
            <div className="flex-1 order-2 lg:order-none">
              <Carousel autoSlide={true}>
                {imagesSecondCollaboration.map((image) => (
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
