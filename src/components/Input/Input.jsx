import React from "react";
import "./Input.scss";

export default function Input(props) {
  return (
    <input
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
      className="input"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
