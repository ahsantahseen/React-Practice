import React from "react";
import classes from "./Tag.module.css";

const Tag = (props) => {
  return (
    <div className={classes.card}>
      <h3 onClick={props.click}>
        {props.name} is {props.yrs} years old company
        {""}
      </h3>
      <p>{props.children}</p>
      <input onChange={(event) => props.change(event, props.id)}></input>
    </div>
  );
};

export default Tag;
