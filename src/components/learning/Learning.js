import React from "react";
import "./Learning.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import l1 from "../../assets/lerning/live/62cbe68f696079a76b3d5d89.png";
import l2 from "../../assets/lerning/live/62d142aa5af3c767d4428edf.jpg";
import l4 from "../../assets/lerning/live/62d144bf5af3c72263428ffd.jpg";
import l3 from "../../assets/lerning/live/62dbfcbf8a6db091f84577dd.jpg";
import l5 from "../../assets/lerning/live/62dc015a8a6db0614a457d66.jpg";

import a1 from "../../assets/lerning/aff/1.png";
import a2 from "../../assets/lerning/aff/2.png";
import a3 from "../../assets/lerning/aff/3.png";
import a4 from "../../assets/lerning/aff/4.png";
import a5 from "../../assets/lerning/aff/5.jpg";

import c1 from "../../assets/lerning/comm/1.jpg";
import c2 from "../../assets/lerning/comm/2.png";
import c3 from "../../assets/lerning/comm/3.png";
import c4 from "../../assets/lerning/comm/4.jpg";
import c5 from "../../assets/lerning/comm/5.jpg";

import o1 from "../../assets/lerning/one/1.png";
import o2 from "../../assets/lerning/one/2.png";

import t1 from "../../assets/lerning/tes/1.jpg";
import t2 from "../../assets/lerning/tes/2.jpg";
import t3 from "../../assets/lerning/tes/3.jpg";
import t4 from "../../assets/lerning/tes/4.jpg";
import t5 from "../../assets/lerning/tes/5.jpg";

import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

import { useEffect, useState } from "react";

function Learning() {
  const [currentPage, setCurrrentPage] = useState("Live");

  const [projectContainer, setProjectContainer] = useState("");
  useEffect(() => {
    setProjectContainer(document.querySelector(".Learning-sec-container"));
  }, []);

  function funPrev() {
    projectContainer.scrollBy({
      left: -835,
      behavior: "smooth",
    });
  }

  function funNext() {
    projectContainer.scrollBy({
      // top: 0,
      left: +835,
      behavior: "smooth",
    });
  }

  const learn = [
    {
      img: l1,
      name: "Advance Facebook Marketing Course in Hindi",
      aut: "Amresh Bharti",
      price: (
        <p>
          <CurrencyRupeeIcon /> 3000
        </p>
      ),
    },
    {
      img: l2,
      name: "DSA for FAANG preparation with Python and JavaScript",
      aut: "anurag tiwari",
      price: (
        <p>
          <CurrencyRupeeIcon /> 4000
        </p>
      ),
    },
    {
      img: l4,
      name: "Full Stack Web Development using Python in Hindi",
      aut: "Navin Reddy",
      price: (
        <p>
          <CurrencyRupeeIcon /> 4000
        </p>
      ),
    },
    {
      img: l5,
      name: "YouTube Mastery Batch 2 in Hindi",
      aut: "Amresh Bharti",
      price: (
        <p>
          <CurrencyRupeeIcon /> 4000
        </p>
      ),
    },
  ];

  const aff = [
    {
      img: a1,
      name: "Full Stack Django Developer",
      aut: "Hitest chaudhry",
      price: (
        <p>
          <CurrencyRupeeIcon /> 499
        </p>
      ),
    },
    {
      img: a2,
      name: "Mastering DSA with Python",
      aut: "Hitest chaudhry",
      price: (
        <p>
          <CurrencyRupeeIcon /> 499
        </p>
      ),
    },
    {
      img: a3,
      name: "Mastering DSA with java",
      aut: "Hitest chaudhry",

      price: (
        <p>
          <CurrencyRupeeIcon /> 499
        </p>
      ),
    },
    {
      img: a4,
      name: "Mastering DSA with c++",
      aut: "Hitest chaudhry",

      price: (
        <p>
          <CurrencyRupeeIcon /> 499
        </p>
      ),
    },
    {
      img: a5,
      name: "Android P with Machine Learning Apps",
      aut: "Hitest chaudhry",
      price: (
        <p>
          <CurrencyRupeeIcon /> 499
        </p>
      ),
    },
  ];

  const Comm = [
    {
      img: c1,
      name: "ReactJS Crash Course",
      aut: "Hitest chaudhry",
      price: "FREE",
    },
    {
      img: c2,
      name: "Angular Crash Course",
      aut: "Hitest chaudhry",
      price: "FREE",
    },
    {
      img: c3,
      name: "Python Crash Course by Hitesh",
      aut: "Hitest chaudhry",
      price: "FREE",
    },
    {
      img: c4,
      name: "Write quicker HTML5 and CSS 3; productivity hacks....",
      aut: "Hitest chaudhry",
      price: "FREE",
    },
    {
      img: c5,
      name: "Publishing Custom Cocoapads",
      aut: "Hitest chaudhry",
      price: "FREE",
    },
  ];
  const One = [
    {
      img: o1,
      name: "Tech Neuron",
      aut: "200+ courses, 500+ projects, raise your demand option,....",
      price: (
        <p>
          <CurrencyRupeeIcon />
          25000
        </p>
      ),
    },
    {
      img: o2,
      name: "Kids Neuron",
      aut: "Lifetime access, Raise your demand option, Live ,.....",
      price: (
        <p>
          <CurrencyRupeeIcon />
          25000
        </p>
      ),
    },
  ];
  const Tes = [
    {
      img: t1,
      name: "Android Technical Interview Preparation",
      aut: "",
      price: (
        <p>
          <CurrencyRupeeIcon />
          499
        </p>
      ),
    },
    {
      img: t2,
      name: "C Coding Interview Preparation",
      aut: "",
      price: (
        <p>
          <CurrencyRupeeIcon />
          499
        </p>
      ),
    },
    {
      img: t3,
      name: "C++ Coding Interview Preparation",
      aut: "",
      price: (
        <p>
          <CurrencyRupeeIcon />
          499
        </p>
      ),
    },
    {
      img: t4,
      name: "Data Structure and Algorithm Interview Preparation",
      aut: "",
      price: (
        <p>
          <CurrencyRupeeIcon />
          499
        </p>
      ),
    },
    {
      img: t5,
      name: "HTML CSS Coding Interview Preparation",
      aut: "",
      price: (
        <p>
          <CurrencyRupeeIcon />
          499
        </p>
      ),
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
        <Stack
          spacing={3}
          direction="row"
          sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            xs={{ margin: "2rem" }}
            onClick={() => setCurrrentPage("Live")}
            variant={currentPage == "Live" ? "contained" : "outlined"}
          >
            Live
          </Button>
          <Button
            onClick={() => setCurrrentPage("Affortable")}
            variant={currentPage == "Affortable" ? "contained" : "outlined"}
          >
            Affortable
          </Button>
          <Button
            onClick={() => setCurrrentPage("Community")}
            variant={currentPage == "Community" ? "contained" : "outlined"}
          >
            Community
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
      <div className="previous" id="previous">
        <IconButton onClick={() => funPrev()}>
          <img src={arrowLeft} alt="arrowLefit" />
        </IconButton>
      </div>
      <div className="Learning-sec-container">
        {currentPage == "Live" ? box(learn) : null}
        {currentPage == "Affortable" ? box(aff) : null}
        {currentPage == "Community" ? box(Comm) : null}
        {currentPage == "OneNeuron" ? box(One) : null}
        {currentPage == "Test" ? box(Tes) : null}
      </div>
      <div className="next" id="next">
        <IconButton onClick={() => funNext()}>
          <img src={arrowRight} alt="arrowLefit" />
        </IconButton>
      </div>
    </div>
  );
}

export default Learning;
