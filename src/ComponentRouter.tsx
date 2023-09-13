import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage"
import Projects from "../src/components/Projects/Projects";
import DelayedPage from "./components/DelayedPage/DelayedPage";
import { useState } from "react";

export default function ComponentRouter() {
  let initalDisplay: JSX.Element = (<DelayedPage/>);
  let delayedDisplay: JSX.Element = (
   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/Experience" element={<MainPage/>}/>
        <Route exact path="/Projects" element={<Projects/>}/>
        <Route exact path="/About" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
  // const url = /[]/g;
  
  // if (url.test(window.location.href)) {
  //   console.log(url);
  // }
  const [pageToDisplay, setPageToDisplay] = useState(delayedDisplay);
  // const [pageToDisplay, setPageToDisplay] = useState(initalDisplay);

  // setTimeout(() => {
  //   setPageToDisplay(delayedDisplay);
  // }, 2000);

  return (
    <>
    {pageToDisplay}
    </>
  );
}