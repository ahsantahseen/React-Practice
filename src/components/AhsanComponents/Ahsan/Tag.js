import React, { useEffect, useRef } from "react";
import classes from "./Tag.module.css";
import PropTypes from "prop-types";

const Tag = (props) => {
  const inputSelRef = useRef(null);
  useEffect(() => {
    console.log("USE EFFECT [TAG.JS]");
    inputSelRef.current.focus();
  });

  return (
    <div className={classes.card}>
      <h3 onClick={props.click}>
        {props.name} is {props.yrs} years old company
        {""}
      </h3>
      <p>{props.children}</p>
      <input
        ref={inputSelRef}
        onChange={(event) => props.change(event, props.id)}
      ></input>
    </div>
  );
};
// Tag.PropTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   yrs: PropTypes.number,
//   change: PropTypes.func,
// };//for class based only
export default Tag;
