import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DelayedPage from "./components/DelayedPage/DelayedPage";
import MainPage from "./components/MainPage/MainPage"
import Projects from "../src/components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import { useState } from "react";
import Contact from "./components/Contact/Contact";

export default function ComponentRouter() {
  let initalDisplay: JSX.Element = (<DelayedPage/>);
  let delayedDisplay: JSX.Element = (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );

  const [pageToDisplay, setPageToDisplay] = useState(initalDisplay);

  setTimeout(() => {
    setPageToDisplay(delayedDisplay);
  }, 2200);

  return (
    <>
    {pageToDisplay}
    </>
  );
}