import React from "react";
import "./toggle.css";

const Toggle = (props) => {
  return (
    <button className="toggle" onClick={props.click}>
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  );
};

export default Toggle;
