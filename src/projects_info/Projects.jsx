import React from "react";
import { useParams, Link} from "react-router-dom";
import { projects } from "../constants";
import Equity_Investment_Analysis_Platform from "../projects_info/Equity_Investment_Analysis_Platform";
import NLP_Translator_ML from "../projects_info/NLP_Translator_ML";
import Optiver_Market_Making_Challenge from "../projects_info/Optiver_Market_Making_Challenge";
import { SectionWrapper } from "../hoc";


const Projects = () => {
  const { projectId } = useParams();
  const project = projects.find((proj) => proj.info_page === `/${projectId}`);

  if (!project) {
    return <div>Project not found.</div>;
  }

  const { name, description, info_page } = project;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <Link to={info_page}>Learn More</Link>
    </div>
  );
};

export default SectionWrapper(Projects,"");
