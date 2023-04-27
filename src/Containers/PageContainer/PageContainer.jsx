import React from "react";
import CardContainer from '../CardContainer/CardContainer';
import mockData from "../../mockData/mockData"
import Button from '../../Components/Button/Button';
import "./PageContainer.scss";

const PageContainer = ({data}) => {
  return (
    <div className="pageContainer">
      <CardContainer data={data} />
      <div className="backToTop">
        <Button text="Back to top" buttonStyle={"hasBorder"} />
      </div>
    </div>
  );
};

export default PageContainer;
