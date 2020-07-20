import React, { useEffect, useRef } from "react";
import classes from "./cockpit.module.css";

const Cockpit = (props) => {
  const btnRef = useRef(null);

  useEffect(() => {
    console.log("[COCKPIT.JS] useEffect");
    //HTTP REQUESTS
    setTimeout(() => {
      alert("Data Parsed to Cloud!");
    }, 1000);
    btnRef.current.click();
  }, []);
  //As now we have controlled the useEffect usage and it will only alert when Companies is updated
  // Now if i dont want to re run the useEffect i will just pass an empty array which will do that it will
  //only run once and there will be no dependencies on it so there wont be any other conditions for it to re run
  const assignedClass = [];

  let BtnClass = [classes.Button];

  if (props.Companies.length <= 2) {
    assignedClass.push(classes.style1);
  }
  if (props.Companies.length <= 1) {
    assignedClass.push(classes.style2);
  }
  if (props.Companies.length === 0) {
    assignedClass.push(classes.style3);
  }
  if (props.showHanlder) {
    BtnClass.push(classes.Red);
  }
  return (
    <div className="cockpit">
      <h1>Hello This is a react app</h1>
      <p className={assignedClass.join(" ")}>
        Hello! I'm Ahsan and i made this custom component
      </p>
      <button ref={btnRef} className={BtnClass.join(" ")} onClick={props.hfunc}>
        Click Me!
      </button>
    </div>
  );
};

export default Cockpit;
