import React from "react";
import Button from "../Button/Button";
import "./DisplayCard.scss";
// import heartOutline from "../../assets/images/heart-outline2.png";

const DisplayCard = ({ id,img1, img2, img3, name, cost, country, website,handleToggle }) => {
  return (
      <div className="displayCard" >
        <div className="displayCard__img-container">
          <div className="displayCard__grid1">
            <img className="displayCard__img-1" src={img1} alt={name} />
          </div>
          <div className="displayCard__grid2">
            <img className="displayCard__img-2" src={img2} alt={name} />
          </div>
          <div className="displayCard__grid3">
            <img className="displayCard__img-3" src={img3} alt={name} />
          </div>
        </div>
        <div className="displayCard__content-container">
          <div className="displayCard__content-top">
            <h1 className="displayCard__name">{name}</h1>
          </div>
          <div className="displayCard__content-middle">
            <h2 className="displayCard__cost">{cost}</h2>
            <h2 className="displayCard__country">{country}</h2>
          </div>
          <div className="displayCard__content-bottom">
            <h3 className="displayCard__website">{website}</h3>
            <Button id={id} text={"Show more"} buttonStyle={"hasBorder"} handleClick={handleToggle}/>
            {/* <img className="displayCard__img-saved" src={heartOutline}/> */}
          </div>
        </div>
      </div>
  );
};

export default DisplayCard;
