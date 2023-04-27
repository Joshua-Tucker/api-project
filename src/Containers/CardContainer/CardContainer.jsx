import React from "react";
import DisplayCard from "../../Components/DisplayCard/DisplayCard";
import "./CardContainer.scss";
import { useState } from "react";
import FullCard from "../../Components/FullCard/FullCard";

const CardContainer = ({data}) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isCard, setIsCard] = useState("");

  const handleToggle = (event) => {
    chosenCard(event);
    setShowOverlay(!showOverlay);
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(!isActive);
    setShowOverlay(!showOverlay);
  };

  const displayCard = data.map((resort) => {
    
    return (
      <DisplayCard
        id={resort.id}
        img1={resort.images[0]}
        img2={resort.images[1]}
        img3={resort.images[2]}
        name={resort.name}
        cost={resort.cost}
        country={resort.country}
        website={resort.website}
        handleToggle={handleToggle}
      />
    );
  });
  const chosenCard = (event) => {
    data.forEach((resort) => {
      if (resort.id == event.target.id) {
        setIsCard(resort);
      }
    });
  };
  


  return (
    <>
      <div className={isActive ? "cardContainer + active" : "cardContainer"}>
        {displayCard}
      </div>
      {showOverlay && (
        <FullCard
          id={isCard.id}
          name={isCard.name}
          location={isCard.location}
          country={isCard.country}
          cost={isCard.cost}
          website={isCard.website}
          transfer={isCard.transferTime}
          highest={isCard.highestPoint}
          audience={isCard.audience}
          snowpark={isCard.snowpark}
          area={isCard.skiArea}
          images={isCard.images}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
export default CardContainer;
