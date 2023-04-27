import React from "react";
import "./Button.scss";

const Button = ({ text, buttonStyle, handleClick, id}) => {
  let buttonName = "button";
  buttonName += " " + buttonStyle;

  return (
    <button id={id} className={buttonName} onClick={handleClick}>
      {text}
      {/* <h2 className="button-text">{text}</h2> */}
    </button>
  );
};

export default Button;
