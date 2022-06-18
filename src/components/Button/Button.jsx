import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className="button" onClick={props.onclick}>
      {props.content}
    </button>
  );
};

export default Button;
