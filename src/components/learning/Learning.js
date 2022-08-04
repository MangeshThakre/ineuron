import React from "react";
import "./Learning.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import l1 from "../../assets/lerning/live/62cbe68f696079a76b3d5d89.png";
import l2 from "../../assets/lerning/live/62d142aa5af3c767d4428edf.jpg";
import l4 from "../../assets/lerning/live/62d144bf5af3c72263428ffd.jpg";
import l3 from "../../assets/lerning/live/62dbfcbf8a6db091f84577dd.jpg";
import l5 from "../../assets/lerning/live/62dc015a8a6db0614a457d66.jpg";
function Learning() {
  const [currentPage, setCurrrentPage] = useState("Live");

  const Live = <div>Live</div>;
  const Affortable = <div>Affortable</div>;
  const Community = <div>Community</div>;
  const OneNeuron = <div>OneNeuron</div>;
  const Test = <div>Test</div>;

  const learn = [
    {
      img: l1,
      name: "Advance Facebook Marketing Course in Hindi",
      aut: "Amresh Bharti",
      price: "3000",
    },
    {
      img: l1,
      name: "Advance Facebook Marketing Course in Hindi",
      aut: "Amresh Bharti",
      price: "3000",
    },
    {
      img: l1,
      name: "Advance Facebook Marketing Course in Hindi",
      aut: "Amresh Bharti",
      price: "3000",
    },
    {
      img: l1,
      name: "Advance Facebook Marketing Course in Hindi",
      aut: "Amresh Bharti",
      price: "3000",
    },
  ];

  function box(learn) {
    return learn.map((e, i) => {
      return (
        <div className="Learning-sec-box">
          <div>
            <img src={e.img} alt="" />
            <div className="Learning-sec-box-body">
              <h5 className="Learning-sec-box-name">{e.name}</h5>
              <p className="Learning-sec-box-dis"></p>
              <p className="Learning-sec-box-aut">{e.aut}</p>
              <h5 className="Learning-sec-box-price">{e.price}</h5>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="Learning-sec">
      <div className="Learning-head">
        <h1>What you will learn</h1>
      </div>
      <div className="Learning-sec-buttons">
        <Stack spacing={3} direction="row">
          <Button
            onClick={() => setCurrrentPage("Live")}
            variant={currentPage == "Live" ? "contained" : "outlined"}
          >
            Live Programs
          </Button>
          <Button
            onClick={() => setCurrrentPage("Affortable")}
            variant={currentPage == "Affortable" ? "contained" : "outlined"}
          >
            Affortable Programs
          </Button>
          <Button
            onClick={() => setCurrrentPage("Community")}
            variant={currentPage == "Community" ? "contained" : "outlined"}
          >
            Community Programs
          </Button>
          <Button
            onClick={() => setCurrrentPage("OneNeuron")}
            variant={currentPage == "OneNeuron" ? "contained" : "outlined"}
          >
            One Neuron
          </Button>
          <Button
            onClick={() => setCurrrentPage("Test")}
            variant={currentPage == "Test" ? "contained" : "outlined"}
          >
            Test Series
          </Button>
        </Stack>
      </div>
      {currentPage == "Live" ? (
        <div className="Learning-sec-container-head">
          <h2>Live Programs</h2>
          <p>Get your program with live "instructor led" learning.</p>
        </div>
      ) : null}
      {currentPage == "Affortable" ? (
        <div className="Learning-sec-container-head">
          <h2>Affordable Programs</h2>
          <p>Find your favourite courses in pocket-friendly ways.</p>
        </div>
      ) : null}
      {currentPage == "Community" ? (
        <div className="Learning-sec-container-head">
          <h2>Community Programs</h2>
          <p>Open to all pro-live classes on Youtube for free.</p>
        </div>
      ) : null}
      {currentPage == "OneNeuron" ? (
        <div className="Learning-sec-container-head">
          <h2>One Neuron</h2>
          <p>New Neurons all day, every day.</p>
        </div>
      ) : null}
      {currentPage == "Test" ? (
        <div className="Learning-sec-container-head">
          <h2>Test Series</h2>
          <p>Quiz-based courses to prepare you for interviews.</p>
        </div>
      ) : null}
      <div className="Learning-sec-container">
        {currentPage == "Live" ? box(learn) : null}
      </div>
    </div>
  );
}

export default Learning;
