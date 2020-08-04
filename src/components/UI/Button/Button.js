import React from "react";

import "./Button.css";

const button = props => (
  <button
    disabled={props.disabled}
    className={["Button", [props.btnType]].join("")}
    type={props.type}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default button;
