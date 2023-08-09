import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuUnSelected from "../../assets/icons/burger-menu.svg";
import menuSelected from "../../assets/icons/left-arrow.png";
import DropdownMenuItem from "./DropdownMenuItem/DropdownMenuItem";
import "./Navbar.css"

export default function Navbar() {
  const [menuImage, setMenuImage] = useState(menuUnSelected);
  
  let imageStyle = {
    maxWidth: "1.5em",
    float: "right",
    margin: "2em",
    padding: ".2em",
    border: "solid"
  };
  
  let menuItems: JSX.Element|undefined;
  if (menuImage === menuSelected) {
     menuItems= (
      <>
        <Link to="/"><DropdownMenuItem text="Home"/></Link>
        <Link to="/Experience"><DropdownMenuItem text="Experience"/></Link>
        <Link to="/Projects"><DropdownMenuItem text="Projects"/></Link>
        <Link to="/About"><DropdownMenuItem text="About"/></Link>
        <DropdownMenuItem text="Contact"/>
      </>
    );
  }
  
  return (
    <>
      <img id="navImage" className="navbarImage" src={menuImage} onClick={ () => openMenu(menuImage, setMenuImage) }/>
      <div className="menuItems">
        {menuItems}
      </div>
    </>
    );
}

function openMenu(menuImage: HTMLImageElement, setMenuImage: Function) {
  menuImage === menuUnSelected ? setMenuImage(menuSelected) : setMenuImage(menuUnSelected);
  let backgroundColour: string|undefined = document.getElementById("navImage")?.style.backgroundColor;
  
  if (backgroundColour == "" || backgroundColour == "rgb(25, 25, 25)") {
    document.getElementById("navImage").style.backgroundColor = "#232323";
  } else {
    document.getElementById("navImage").style.backgroundColor = "#191919";
  }
  
}