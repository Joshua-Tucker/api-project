import React from "react";
import logo from "../../assets/images/skiPicLandscape.jpeg";
import Button from "../../Components/Button/Button";
import Checkbox from "../../Components/Radio/Radio";
import Search from "../../Components/Search/Search";
import "./Nav.scss";

const Nav = ({handleCost,hasSnowpark,handleArea,handleTransfer}) => {
  return (
    <div className="nav-container">
      <div className="nav-content">
        <div className="nav-content__img-container">
          <img className="nav-content__img" src={logo} alt="skier shredding" />
        </div>
        <div className="nav-content__search-container">
          <div className="nav-content__search">
            <Search />
          </div>
        </div>
        <div className="nav-content__user-container">
          <div className="nav-content__filter-container">
            <h4 className="nav-content__filter-title">Cost of Holiday</h4>

            <div className="nav-content__filter-cost">
              <Checkbox label={"£"} value={"£"} handleClick={handleCost}/>
              <Checkbox label={"££"} value={"££"} handleClick={handleCost}/>
              <Checkbox label={"£££"} value={"£££"} handleClick={handleCost}/>
              <Checkbox label={"££££"} value={"££££"} handleClick={handleCost}/>
              <Checkbox label={"£££££"} value={"£££££"} handleClick={handleCost}/>
            </div>
            <h4 className="nav-content__filter-title">
              Transfer times
            </h4>
            <div className="nav-content__filter-transfer">
              <Checkbox label={"Less than 1h30"} value={"1h30"} handleClick={handleTransfer}/>
              <Checkbox label={"Between 1h30 and 3h00"} value={2}handleClick={handleTransfer}/>
              <Checkbox label={"Over 3h00"}value={"3h00"}handleClick={handleTransfer}/>
            </div>
            <h4 className="nav-content__filter-title">Ski Area</h4>
            <div className="nav-content__filter-area">
              <Checkbox label={"Less than 1000km "} value={999} handleClick={handleArea}/>
              <Checkbox label={"More than 1000km "}value={1000} handleClick={handleArea}/>
              <Checkbox label={"Snow Park"} handleClick={hasSnowpark} />

            </div>
          </div>

          <div className="nav-content__utils-container">
            <Button text="Saved" />
            <Button text="Form" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

// value={} handleData={}
