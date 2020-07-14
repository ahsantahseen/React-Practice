import React, { useEffect } from "react";
import classes from "./cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[COCKPIT.JS] useEffect");
    //HTTP REQUESTS
    setTimeout(() => {
      alert("Data Parsed to Cloud!");
    }, 1000);
  }, [props.Companies]);
  //As now we have controlled the useEffect usage and it will only alert when Companies is updated
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
      <button className={BtnClass.join(" ")} onClick={props.hfunc}>
        Click Me!
      </button>
    </div>
  );
};

export default Cockpit;
