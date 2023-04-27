import React from "react";
import "./FullCard.scss";
import cross from "../../assets/images/whiteCross.png";
import Carousel from "../Carousel/Carousel";

const FullCard = ({
  name,
  location,
  country,
  cost,
  website,
  transfer,
  highest,
  audience,
  snowpark,
  area,
  images,
  handleClose,
}) => {
  const transferTimeStr = () => {
    const join = transfer.join(" and ");
    const str = "It takes between " + join + " to get here.";
    return str;
  };
  const transferString = transferTimeStr();

  const audienceString = () => {
    const join = audience.join(", ");
    const str = "The typical Snow users here are: " + join + ".";
    return str;
  };
  const audStr = audienceString();

  const costString = () => {
    const costSymbol = cost.length;
    switch (costSymbol) {
      case 1:
        return "This is a cheap resort!";
      case 2:
        return "This resort is below the budget!";
      case 3:
        return "This is an average priced resort";
      case 4:
        return "A fantastic resort that is worth the price!";
      case 5:
        return "You are paying for class and quality in this resort!";
    }
  };
  const costStr = costString();

  const areaStr = "This resort has "+ area + " worth of Skiing!"
  
  return (
    <div className="fullCard-container">
      <div className="fullCard">
        <div>
          <img
            className="fullCard__cross"
            onClick={handleClose}
            src={cross}
            alt="exit cross"
          />
        </div>
        <div className="fullCard__img-container">
          <Carousel images={images} />
        </div>
        <div className="fullCard__content">
          <div className="fullCard__info-top">
            <h1 className="fullCard__name">{name}</h1>
            <h2 className="fullCard__location">{location}</h2>
            <h2 className="fullCard__country">{country}</h2>
          </div>
          <div className="fullCard__secondary-containers">
            <div className="fullCard__info-left">
              <h2 className="fullCard__cost">
                {cost}<br/>
                {costStr}
              </h2>
              <h3 className="fullCard__website">{website}</h3>
              <h3 className="fullCard__transfer">{transferString}</h3>
            </div>
            <div className="fullCard__info-right">
              <h3 className="fullCard__highest">{highest}</h3>
              <h3 className="fullCard__audience">{audStr}</h3>
              <h3 className="fullCard__snowpark">{snowpark}</h3>
              <h3 className="fullCard__area">{areaStr}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
