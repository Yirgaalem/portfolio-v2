import React from "react";
import ProjectTab from "./ProjectTab/ProjectTab";
import portfolioImage from "../../assets/images/projectImages/portfolio.png";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div className="projectsContainer">
        <ProjectTab image={portfolioImage} 
                    title="Portfolio Website" 
                    link="https://github.com/Yirgaalem/portfolio-v2" 
                    text="A web page to display introduce myself and my work"
        />  
      </div>
    </>
  );
}