import React from 'react';
import './Job.css'

export type JobProps = {
  image: string;
  title: string;
  description: string;
  date: string;
  color: string
}

export default function Job(props: JobProps) { 
  
  return (
    <div style={{backgroundColor: 'white', width:'fit-content'}}>
      <div className="jobContainer">
        <img className="image"src={props.image}/> 
        {/* <div className="date">{props.date}</div> */}
        <div className="title">{props.title}</div> 
        
        <div className="descContainer">
          <div className="desc">{props.description}</div>
        </div>  
      </div>
    </div>
  );
}