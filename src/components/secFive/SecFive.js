import React from "react";
import "./SecFive.css";
import SameerKumar from "../../assets/halloffame/SameerKumar.jpeg";
import m2 from "../../assets/halloffame/2.jpeg";
// import m3 from "../../assets/halloffame/3.jpeg";
import m4 from "../../assets/halloffame/4.jpeg";
import m5 from "../../assets/halloffame/5.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import { useEffect, useState } from "react";

function SecFive() {
  const [projectContainer, setProjectContainer] = useState("");
  useEffect(() => {
    setProjectContainer(document.querySelector(".SecFive-box-container"));
  }, []);

  function funPrev() {
    projectContainer.scrollBy({
      left: -835,
      behavior: "smooth",
    });
  }
  function funNext() {
    projectContainer.scrollBy({
      left: +835,
      behavior: "smooth",
    });
  }

  return (
    <div className="SecFive">
      <div className="SecFive-header">
        <h1>Hall fo Fame</h1>
      </div>

      <div className="previous" id="previous">
        <IconButton onClick={() => funPrev()}>
          <img src={arrowLeft} alt="arrowLefit" />
        </IconButton>
      </div>

      <div className="SecFive-box-container">
        <div className="SecFive-box">
          <div>
            <div className="SecFive-box-head">
              <img src={SameerKumar} alt="SameerKumar" />
              <h3>Sameer Kumar</h3>
            </div>
            <div className="SecFive-box-body">
              <p>Data Scientist, Bajaj Finserv</p>
              <p>
                Hello everyone, My name is Sameer Kumar and I am a final year
                B.Tech student from Symbiosis Institute of Technology, Pune. I
              </p>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="SecFive-box">
          <div>
            <div className="SecFive-box-head">
              <img src={m2} alt="SameerKumar" />
              <h3>Sameer Kumar</h3>
            </div>
            <div className="SecFive-box-body">
              <p>Data Scientist, Bajaj Finserv</p>
              <p>
                Hello everyone, My name is Sameer Kumar and I am a final year
                B.Tech student from Symbiosis Institute of Technology, Pune. I
              </p>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="SecFive-box">
          <div>
            <div className="SecFive-box-head">
              <img src={m4} alt="SameerKumar" />
              <h3>Sameer Kumar</h3>
            </div>
            <div className="SecFive-box-body">
              <p>Data Scientist, Bajaj Finserv</p>
              <p>
                Hello everyone, My name is Sameer Kumar and I am a final year
                B.Tech student from Symbiosis Institute of Technology, Pune. I
              </p>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="SecFive-box">
          <div>
            <div className="SecFive-box-head">
              <img src={m5} alt="SameerKumar" />
              <h3>Sameer Kumar</h3>
            </div>
            <div className="SecFive-box-body">
              <p>Data Scientist, Bajaj Finserv</p>
              <p>
                Hello everyone, My name is Sameer Kumar and I am a final year
                B.Tech student from Symbiosis Institute of Technology, Pune. I
              </p>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className="next" id="next">
        <IconButton onClick={() => funNext()}>
          <img src={arrowRight} alt="arrowLefit" />
        </IconButton>
      </div>
      <h5>view More</h5>
    </div>
  );
}

export default SecFive;
