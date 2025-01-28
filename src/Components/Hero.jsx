import React from 'react';
import { HERO_CONTENT } from "../constants/index.js"; // Make sure you have HERO_CONTENT in your constants
import profilePic from "../assets/NWijayasekara.jpg"; // Profile picture path
import { motion } from "framer-motion"; // Corrected import for framer-motion

// Animation container function with dynamic delay
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }, // Dynamic delay
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            {/* Left section: Text */}
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    {/* Name Animation */}
                    <motion.h1
                        variants={container(0)} // No delay for the name
                        initial="hidden" 
                        animate="visible"
                        className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                        Neluni Wijayasekara
                    </motion.h1>

                    {/* Developer Text Animation */}
                    <motion.span 
                        variants={container(0.5)} // Slight delay for the developer text
                        initial="hidden" 
                        animate="visible"
                        className='bg-gradient-to-r from-green-200 via-green-500 to-sky-950  bg-clip-text text-3xl tracking-tight text-transparent'>
                        Full Stack Developer
                    </motion.span>

                    {/* Hero Content Animation */}
                    <motion.p
                        variants={container(0.9)} // Slight delay for the paragraph text
                        initial="hidden" 
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>

            {/* Right section: Image */}
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    {/* Profile Image Animation */}
                    <motion.img  className='rounded'
                        src={profilePic} 
                        alt="Profile Picture"
                        initial={{ opacity: 0 }}    // Start with opacity 0
                        animate={{ opacity: 1 }}    // Animate to opacity 1
                        transition={{ duration: 2 }} // Transition duration for image fade-in
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
