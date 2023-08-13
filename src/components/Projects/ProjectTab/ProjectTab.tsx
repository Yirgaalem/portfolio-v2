import React from "react";
import "./ProjectTab.css";

export type ProjectTabProps = {
  image: string,
  title: string,
  link: string,
  text: string,
}

export default function ProjectTab(props: ProjectTabProps) {
  const hoverContent: JSX.Element = (
    <>
      <h3 className="hoverTitle">{props.title}</h3>
      <p className="hoverText">{props.text}</p>
      <button className="hoverLinkButton"><a href={props.link} target="_blank">See Code</a></button>  
    </>
  );

  return (
    <div className="projectTabContainer">
      <img className="projectImage"src={props.image}/>
      <div className="projectText">{props.title}</div>
      <div className="hoverContent">{hoverContent}</div>
    </div>
  );
}