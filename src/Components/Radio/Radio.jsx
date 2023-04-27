import React from "react";
import "./Radio.scss";

const Radio = ({ label,value, handleClick}) => {
  return (
    <div className="radio">
        <label htmlFor="radio" className="radio__label">
         {label}
        </label>
        <input
          onChange={handleClick}
          className="radio-box"
          type="radio"
          id={label}
          name="radioOne"
          value={value}
        ></input>
      </div>
  );
};

export default Radio;
