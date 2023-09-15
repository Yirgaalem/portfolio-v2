import React from 'react';
import Navbar from '../Navbar/Navbar';
import Copyright from '../Copyright/Copyright';
import './Contact.css';
import resumePic from '../../assets/socials/resume.png';
import linkedin from '../../assets/socials/linkedin.svg';
import github from '../../assets/socials/github.svg';
import mail from '../../assets/socials/mail.png'

export default function Contact() {
  const contactLeft: string = "</";
  const contactMiddle: string = "Contact";
  const contactRight: string = ">";

  return(
    <>
      <Navbar/>
  
      <div className="projectsTitleContainer">
        <h1 className="projectsTitleLeft">{contactLeft}</h1>
        <h1 className="projectsTitle">{contactMiddle}</h1>
        <h1 className="projectsTitleRight">{contactRight}</h1>
      </div>
      
      <div className='contactContainer'>
        <h1 className='contactTitle'>Wan't to get in touch or learn more about me? Here are some ways 👇🏾</h1>
        <div className='socials'>
          <div className='linkedin'><a href="https://linkedin.com/in/nahor" target="_blank"><img className='linkedin' src={linkedin}/></a></div>
          <div className="github"><a href="https://github.com/Yirgaalem" target="_blank"><img className='github' src={github}/></a></div>
          <div className="resume"><a href="src/assets/socials/Resume.pdf" target="_blank"><img className='resume' src={resumePic}/></a></div>
          <div className='email'><a href="mailto:nahoryirgaalem@gmail.com"><img className='email' src={mail}/></a></div>
        </div>
      </div>
      <Copyright/>
    </>
  );
}