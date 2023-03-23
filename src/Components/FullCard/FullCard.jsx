import React from "react";

const FullCard = () => {
  return (
    <div className="fullCard-container">
      <div className="fullCard">
        <div className="fullCard__img-container">
          <Carousel />
        </div>
        <div className="fullCard__info-container">
          <div className="fullCard__info-top"></div>
          <div className="fullCard__info-left"></div>
          <div className="fullCard__info-right"></div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
