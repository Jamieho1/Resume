import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  info_page
}) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    if (info_page) {
      navigate(info_page);
      const worksSection = document.getElementById('works-section');
      worksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleGitHubClick = (event) => {
    event.stopPropagation();
    if (source_code_link) {
      window.open(source_code_link, "_blank");
    }
  };

  const hasGitHubLink = !!source_code_link;
  const isClickable = !!info_page;
  const imageCursor = isClickable ? "pointer" : "default";

  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      style={{ cursor: imageCursor }}
      onClick={handleImageClick}
    >
      <div
        onClick={handleImageClick}
        className="relative w-full h-[260px]"
        style={{ cursor: imageCursor }}
      >
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt="project_image"
            className="object-cover rounded-2xl"
          />
        </div>

        {hasGitHubLink && (
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={handleGitHubClick}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-5" onClick={handleImageClick}>
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="show">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.div
        className="w-full flex"
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1.25 } }} // Apply the animation only for larger screen sizes
        initial={{ opacity: 1, y: 0 }} // Make the section visible initially
      >
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          initial="show"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
