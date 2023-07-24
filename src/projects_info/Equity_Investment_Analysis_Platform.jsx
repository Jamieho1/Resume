import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Equity_Investment_Analysis_Platform = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px] relative`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>hi</p>
          <h2 className={styles.sectionHeadText}>test.</h2>
        </motion.div>
      </div>
      <button
        className="absolute top-4 right-4 rounded-full bg-black text-white flex items-center justify-center w-12 h-12"
        onClick={handleGoBack}
      >
        <FiArrowLeft size={20} />
      </button>
    </div>
  );
};

export default SectionWrapper(Equity_Investment_Analysis_Platform, "");
