import React from "react";
import "./Input.scss";

export default function Input(props) {
  return (
    <input
      className="input"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
