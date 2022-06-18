import React from "react";
import "./Button.scss";

const Button = (props) => {
  return <button className="button">{props.content}</button>;
};

export default Button;
