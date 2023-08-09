import React from 'react'
import './MainPage.css'
import Navbar from './components/Navbar/Navbar'
import menuSelected from "./assets/images/nahor.jpg";

export default function App() {

  return (
    <>
      <Navbar/>
      <div className="titleContainer">
        <p className="Hello">Hello, I'm </p>
        <p className="Nahor">Nahor</p>
        <img className="picture" src={menuSelected}/>
      </div>
      <p className="developer">Full Stack Developer</p>
    </>
  );
}