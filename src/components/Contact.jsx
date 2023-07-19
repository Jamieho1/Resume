import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import linkedin from '/Users/shinghimho/Desktop/programming/3d_portfolio/src/assets/linkedin.png';
import github from '/Users/shinghimho/Desktop/programming/3d_portfolio/src/assets/github.png';
import gmail from '/Users/shinghimho/Desktop/programming/3d_portfolio/src/assets/gmail.png';
import phone from '/Users/shinghimho/Desktop/programming/3d_portfolio/src/assets/phone.jpeg';
const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <ul className="mt-12 flex flex-col gap-4">
          <li className="text-white flex items-center">
            <img src={linkedin} alt="Logo" className="w-6 h-6 mr-2" />
            <a href="https://www.linkedin.com/in/jamie-ho-15a90719a/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className="text-white flex items-center">
            <img src={gmail} alt="Logo" className="w-6 h-6 mr-2" />
            <span>shinghimho@gmail.com</span>
          </li>
          <li className="text-white flex items-center">
            <img src={phone} alt="Logo" className="w-6 h-6 mr-2" />
            <span>+44 07523 228 362</span>
          </li>
          <li className="text-white flex items-center">
            <img src={github} alt="Logo" className="w-6 h-6 mr-2" />
            <a href="https://github.com/Jamieho1" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
