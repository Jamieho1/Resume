import React from "react";
import { useParams, Link} from "react-router-dom";
import { projects } from "../constants";
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
