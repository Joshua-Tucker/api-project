import React from "react";
import "./App.scss";
import FullCard from "./Components/FullCard/FullCard";
import Nav from "./Containers/Nav/Nav";
import PageContainer from "./Containers/PageContainer/PageContainer";
import Form from "./Containers/Form/Form";
import { useState, useEffect } from "react";

function App() {
  const [resortsData, setResortsData] = useState([]);
  const [filteredResorts, setFilteredResorts] = useState([]);

  const [selectedOption, setSelectedOption] = useState("");

  const getResorts = async () => {
    let url = "http://localhost:8080/home";
    const res = await fetch(url);
    let data = await res.json();
    setResortsData(data);
    setFilteredResorts(data);
  };

  const handleCost = (event) => {
    const data = [...resortsData];
    handleReset();
    const costing = event.target.value;
    setSelectedOption(costing);
    const checked = event.target.checked;

    if (checked) {
      const filterResorts = data.filter((resort) => resort.cost <= costing);
      setFilteredResorts(filterResorts);
    } else {
      setFilteredResorts(data);
    }
  };

  const handleReset = () => {
    setFilteredResorts(resortsData);
  };

  const hasSnowpark = (event) => {
    const data = [...resortsData];
    const checked = event.target.checked;
    if (checked) {
      const filterResorts = data.filter((resort) => resort.snowpark === true);
      setFilteredResorts(filterResorts);
    } else {
      setFilteredResorts(data);
    }
  };

  const handleArea = (event) => {
    const data = [...resortsData];
    const value = event.target.value;
    const checked = event.target.checked;

    let filterResorts = [];

    if (checked) {
      if (value > 999) {
        filterResorts = data.filter((resort) => {
          const split = resort.skiArea.split("km");
          const parse = parseInt(split);
          console.log(parse);
          return parse >= value;
        });
      } else {
        filterResorts = data.filter((resort) => {
          const split = resort.skiArea.split("km");
          const parse = parseInt(split);
          return parse <= value;
        });
      }

      setFilteredResorts(filterResorts);
    }
  };

  const handleTransfer = (event) => {
    handleReset();

    const data = [...resortsData];
    const time = event.target.value;
    const checked = event.target.checked;
    const splitTime = time.split("h");
    const parseTA = parseInt(splitTime[0]);
    const parseTB = parseInt(splitTime[1]);

    //if LESS THAN 1H30 is checked
    //FOREACH RESORT go to TRANSFERTIME and compare that INDEX[0] is LESS THAN 1h30
    //IF TRUE add RESORT to ARRAYLIST and RETURN IT
    if (checked) {
      const filteredData = data.filter((resort) => {
        const time1 = resort.transferTime[0].split("h");
        const time2 = resort.transferTime[1].split("h");
        const parse1A = parseInt(time1[0]); //hour first time
        const parse1B = parseInt(time1[1]); //minute first time
        const parse2A = parseInt(time2[0]); //hour second time
        const parse2B = parseInt(time2[1]); //minute second time
        // const lower = "1h31";
        // const higher = "2h59";
        // const lowerS = lower.split("h");
        // const lowerPA = parseInt(lowerS[0]); //hour check lower time ===          1
        // const lowerPB = parseInt(lowerS[1]); //minute check lower time==          31
        // const higherS = higher.split("h");
        // const higherPA = parseInt(higherS[0]); //hour check higher time==         2
        // const higherPB = parseInt(higherS[1]); //minute check higher time=        59

        if (
          parse1A <= parseTA &&
          parse1B <= parseTB &&
          parse2A <= parseTA &&
          parse2B <= parseTB
        ) {
          return true; // resort takes less than 1h30 to arrive
        } else if (
          (parse1A >= parseTA && parse1B >= parseTB) ||
          (parse2A >= parseTA && parse2B >= parseTB)
        ) {
          return true; // resort takes over 3h00 to arrive
        } else if ((time = 2)) {
          if (
            parse1A &&
            parse2A == (1 || 2) &&
            parse1B >= 31 &&
            parse2B <= 59
          ) {
            return true;
          }
          // resort takes between 1h30 and 3h00 to arrive
        }
        return false;
      });
      setFilteredResorts(filteredData);
    }
  };

  useEffect(() => {
    getResorts();
  }, []);

  return (
    <div className="App">
      {/* <Form/> */}
      <Nav
        handleCost={handleCost}
        hasSnowpark={hasSnowpark}
        handleArea={handleArea}
        handleTransfer={handleTransfer}
      />
      <PageContainer data={filteredResorts} />
    </div>
  );
}

export default App;

// handleTransfer={handleTransfer}
