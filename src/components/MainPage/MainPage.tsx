import React from 'react'
import './MainPage.css'
import Navbar from '../Navbar/Navbar'
import Copyright from '../Copyright/Copyright';
import myImage from "../../assets/images/nahor.jpg";

export default function App() {

  return (
    <>
      <Navbar/>
      <div className="titleContainer">
        <div className="Hello">Hello, I'm <div className="myName">Nahor Yirgaalem</div></div>
        <img className="picture" src={myImage}/>
      </div>
      <p className="developer">Full Stack Developer</p>
      <Copyright/>
    </>
  );
}