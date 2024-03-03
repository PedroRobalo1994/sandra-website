import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import {Routes, Route, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Collaborations from '../pages/Collaborations';

 
const AnimRoutes = () => {
  const location = useLocation();
  return(
  <AnimatePresence initial={true} mode="wait">
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/portfolio/collaborations" element={<Collaborations/>}/>
    </Routes>;
  </AnimatePresence>);
};

export default AnimRoutes;
