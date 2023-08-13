import React from "react";
import "./DelayedPage.css";

export default function DelayedPage() {
  const welcomeString: string = "</Welcome>";
  const elements = document.querySelectorAll("hr");

  setTimeout(() => {
    for (const element of elements) {
      element.classList.toggle("transformed-state");
    }
  }, 1000);
  return (
    <>
      <hr/>
      <h1>{welcomeString}</h1>
    </>
  );
}