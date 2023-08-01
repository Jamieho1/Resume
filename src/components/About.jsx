import React from 'react';
import Tilt from 'react-tilty';
import { motion } from 'framer-motion';

import { styles } from '../styles';
// import { services } from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ResumeSection from './ResumeSection';
import ImperialCollegeLondon from '../assets/Imperial_College_London.png'; 
import Jamie_Shing_Him_Ho_Resume from '../assets/Jamie_Shing_Him_Ho_Resume.jpg';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10">
        {/* Left side content (resume section) */}
        <div className="flex flex-col flex-1">
          <motion.div>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Education.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            <ResumeSection />
          </motion.p>
        </div>

        {/* Right side content (picture) */}
        <div className="flex flex-1 justify-center items-center">
          <motion.img
            variants={fadeIn("right", "spring", 0.2, 0.75)}
            src={Jamie_Shing_Him_Ho_Resume}
            alt="My Picture"
            className="w-100 h-100 object-cover"
          />
        </div>
      </div>
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}

    </>
  );
}

export default SectionWrapper(About, "about");
