import React from 'react';
import Navbar from '../Navbar/Navbar';
import Copyright from '../Copyright/Copyright';
import './About.css';

import C from '../../assets/technologies/C.svg';
import Cpp from '../../assets/technologies/Cpp.svg';
import CSS from '../../assets/technologies/CSS.svg';
import html from '../../assets/technologies/html.svg'
import Java from '../../assets/technologies/Java.svg';
import JS from '../../assets/technologies/JS.svg';
import Python from '../../assets/technologies/Python.svg';
import react from '../../assets/technologies/React.svg';
import TS from '../../assets/technologies/TS.svg';

export default () => {
  const aboutLeft: string = "</";
  const aboutMiddle: string = "About";
  const aboutRight: string = ">";

  return(
    <>
      <Navbar/>
  
      <div className="projectsTitleContainer">
        <h1 className="projectsTitleLeft">{aboutLeft}</h1>
        <h1 className="projectsTitle">{aboutMiddle}</h1>
        <h1 className="projectsTitleRight">{aboutRight}</h1>
      </div>

      <h2 className='introduction'>Hey, I'm Nahor Yirgaalem! 👋</h2>

      <div className='about'>
        I am a computer science student at Wilfrid Laurier Univeristy. I have a passion for programming and am actively working to improve my skills every day.
      </div>
      <div className='about'>
        Outside of programing, I enjoy playing basketball with my friends, learning about the world and my faith <span className='cross'>✝️☦️</span>
      </div>

      <div className='skillsContainer'>
        <h2 className='skillsTitle'>Some technology I'm familiar with includes</h2>
        <div className='imageContainer'>
          <img src={C}/>
          <img src={Cpp}/>
          <img src={CSS}/>
          <img src={html}/>
          <img src={Java}/>
          <img src={JS}/>
          <img src={Python}/>
          <img src={react}/>
          <img src={TS}/>
        </div>
      </div>
      <Copyright/>
    </>
  );
}