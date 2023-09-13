import React from "react";
import "./DelayedPage.css";

export default function DelayedPage() {
  const welcomeLeft: string = "</";
  const welcomeMiddle: string = "Welcome";
  const welcomeRight: string = ">";
  // const elements = document.querySelectorAll("hr");

  // setTimeout(() => {
  //   for (const element of elements) {
  //     element.classList.toggle("transformed-state");
  //   }
  // }, 1000);
  return (
    <div className="welcomeContainer">
      {/* <hr/> */}
      <h1 className="welcomeLeft">{welcomeLeft}</h1>
      <h1 className="welcomeMiddle">{welcomeMiddle}</h1>
      <h1 className="welcomeRight">{welcomeRight}</h1>
    </div>
  );
}