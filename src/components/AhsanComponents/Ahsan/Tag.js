import React from "react";
import classes from "./Tag.module.css";
import PropTypes from "prop-types";

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
// Tag.PropTypes = {
//   click: PropTypes.func,
//   name: PropTypes.string,
//   yrs: PropTypes.number,
//   change: PropTypes.func,
// };
export default Tag;
