import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage"

export default function ComponentRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/Experience" element={<MainPage/>}/>
        <Route exact path="/Projects" element={<MainPage/>}/>
        <Route exact path="/About" element={<MainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}