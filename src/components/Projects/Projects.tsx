import React from "react";
import ProjectTab from "./ProjectTab/ProjectTab";
import Navbar from "../Navbar/Navbar";
import Copyright from '../Copyright/Copyright';

import portfolioImage from "../../assets/images/projectImages/portfolio.png";
import discordImage from "../../assets/images/projectImages/loggy.png"
import simpleViewImage from "../../assets/images/projectImages/SimpleView.png"
import "./Projects.css";

export default function Projects() {
  const projectsTitleLeft: string = "</";
  const projectsTitle: string = "Projects";
  const projectsTitleRight: string = ">";

  return (
    <>
      <Navbar/>
      <div className="projectsTitleContainer">
        <h1 className="projectsTitleLeft">{projectsTitleLeft}</h1>
        <h1 className="projectsTitle">{projectsTitle}</h1>
        <h1 className="projectsTitleRight">{projectsTitleRight}</h1>
      </div>

      <div className="projectsContainer">
        <ProjectTab image={portfolioImage} 
                    title="Portfolio Website" 
                    link="https://github.com/Yirgaalem/portfolio-v2" 
                    text="A web page to display introduce myself and my work."
        />
        <ProjectTab image={discordImage} 
                    title="Loggy Discord Bot" 
                    link="https://github.com/Yirgaalem/Loggy-Discord-Bot" 
                    text="Discord bot that logs activity within discord channels and returns in a organized file."
        />
        <ProjectTab image={simpleViewImage} 
                    title="SimpleView Raceway" 
                    link="https://github.com/Yirgaalem/OpenGL-RaceWay" 
                    text="Driving game simulating real life with car acceleration and crash detection."
        />  
        
      </div>
      <Copyright/>
    </>
  );
}