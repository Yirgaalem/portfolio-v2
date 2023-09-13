import React from 'react';
import Navbar from '../Navbar/Navbar'
import Job from "./Job/Job";
import amazon from "../../assets/images/projectImages/amazon.png";

export default function Experience() {
  const expLeft: string = "</";
  const expMiddle: string = "Experience";
  const expRight: string = ">";

  return(
    <>
      <Navbar/>
  
      <div className="projectsTitleContainer">
        <h1 className="projectsTitleLeft">{expLeft}</h1>
        <h1 className="projectsTitle">{expMiddle}</h1>
        <h1 className="projectsTitleRight">{expRight}</h1>
      </div>
  
      <Job image={amazon} 
           title={'Software Development Intern'} 
           description={'Created a React based web application' +
          ' which displayed data and allowed for the updating of data. \n Signficantly improved time required to update data by creating a API gateway.'}
           date={"05/23-08/23"}
           color={"#232F3E"}
           />
    </>
  );
}