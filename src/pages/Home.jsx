import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { HeroSection } from '../components/UI/HeroSection';
import { About } from './About';

export const Home = () => {
  return (
    <>
       <HeroSection />
       <About />
    </>
 
  );
};
