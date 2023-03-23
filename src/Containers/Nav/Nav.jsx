import React from "react";
import logo from "../../assets/images/logo.jpeg";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="nav-content__img-container">
          <img className="nav-content__img" src={logo} alt="skier shredding" />
        </div>
        <div className="nav-content__search-container">Search</div>
        <div className="nav-content__filter-container">Filter</div>
        <div className="nav-content__saved-container">Saved</div>
      </div>
    </div>
  );
};

export default Nav;
