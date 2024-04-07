import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import Carousel from "../components/Carousel";
import Collab1 from "../img/collaborations/collab_1.jpg";
import Collab2 from "../img/collaborations/collab_2.jpg";

const images = [Collab1, Collab2];

const Collaborations = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ transition1 }}
      className="section lg:overflow-auto"
    >
      <div className="container mx-auto h-full relative">
        <h1 className="flex h1 text-pink justify-center">Collaborations</h1>

        {/* First Collaborations Section */}
        <div className="collaborations-section">
          <div className="flex flex-col lg:flex-row h-full items-center justify-center text-center lg:text-left lg:pt-16">
            <div className="flex-1 max-h-96 lg:max-h-full order-2 lg:order-none">
              <Carousel autoSlide={true}>
                {images.map((image) => (
                  <img className="rounded-3xl" alt="Carousel" src={image} />
                ))}
              </Carousel>
            </div>
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={{ transition1 }}
              className="flex-1 pt-24 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center text-center"
            >
              <h2 className="h2 p-4">Salvaterra Country House</h2>
              <p className="mb-12 max-w-sm">
                My name is Sandra and I'm a true enthusiast for travel and
                nature. Another great passion I have is cooking and that's why I
                also share some recipe videos on my page.
                <br />
                <br />
                <p className="p-1">
                  My goal is to inspire people to enjoy the best in life:{" "}
                  <strong>
                    <span className="p-1 text-pink ">
                      Travel and good food!
                    </span>
                  </strong>
                </p>
              </p>
              <Link to={"/portfolio"} className="btn rounded-xl bg-green">
                Visit Link
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Second Collaborations Section */}
        <div className="collaborations-section mt-2">
          <div className="flex flex-col lg:flex-row-reverse h-full items-center justify-center text-center lg:text-left lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: "-80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-80%" }}
              transition={{ transition1 }}
              className="flex-1 pt-24 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-center text-center"
            >
              <h2 className="h2 p-4">Chão do Rio</h2>
              <p className="mb-12 max-w-sm">
                My name is Sandra and I'm a true enthusiast for travel and
                nature. Another great passion I have is cooking and that's why I
                also share some recipe videos on my page.
                <br />
                <br />
                <p className="p-1">
                  My goal is to inspire people to enjoy the best in life:{" "}
                  <strong>
                    <span className="p-1 text-pink ">
                      Travel and good food!
                    </span>
                  </strong>
                </p>
              </p>
              <Link to={"/portfolio"} className="btn rounded-xl bg-green">
                Visit Link
              </Link>
            </motion.div>
            <div className="flex-1 max-h-96 lg:max-h-full order-2 lg:order-none">
              <Carousel autoSlide={true}>
                {images.map((image) => (
                  <img className="rounded-3xl" alt="Carousel" src={image} />
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
