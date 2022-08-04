import React from "react";
import "./Avangers.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";
import amresh from "../../assets/avangers/amresh-square.png";
import hitest from "../../assets/avangers/hitesh-square.png";
import kiran from "../../assets/avangers/Kiran-Sahu-square.png";
import krish from "../../assets/avangers/krish-square.png";
import Mukesh from "../../assets/avangers/Mukesh-Otwani-square.png";
import Souranghsu from "../../assets/avangers/Souranghsu-Pal.png";
import sunny from "../../assets/avangers/sunny-square.png";
import telusko from "../../assets/avangers/telusko-square.png";
import arrowLeft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";

import { useEffect, useState } from "react";

function Avangers() {
  const [projectContainer, setProjectContainer] = useState("");
  useEffect(() => {
    setProjectContainer(document.querySelector(".Avangers-sec-container"));
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
    <div className="Avangers-sec">
      <div className="Avangers-sec-head">
        <h1>Tech Avengers</h1>
      </div>

      <div className="previous" id="previous">
        <IconButton onClick={() => funPrev()}>
          <img src={arrowLeft} alt="arrowLefit" />
        </IconButton>
      </div>
      <div className="Avangers-sec-container">
        <div className="Avangers-sec-box one ">
          <div>
            <div className="Avangers-sec-box-img">
              <img src={amresh} alt="amresh" />
            </div>
            <h4>Amresh Bharti</h4>
            <p>VP marketing</p>
            <span>
              <IconButton>
                <a
                  href="https://www.linkedin.com/in/amresh-bharti-571122166/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </span>
          </div>
        </div>
        <div className="Avangers-sec-box two">
          <div>
            <div className="Avangers-sec-box-img">
              <img src={hitest} alt="amresh" />
            </div>
            <h4>Hitesh Choudhary</h4>
            <p>CTO</p>
            <span>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </span>
          </div>
        </div>
        <div className="Avangers-sec-box one">
          <div>
            <div className="Avangers-sec-box-img">
              <img src={kiran} alt="amresh" />
            </div>
            <h4>kiran Sahu</h4>
            <p>Mentor</p>
            <span>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </span>
          </div>
        </div>
        <div className="Avangers-sec-box two">
          <div>
            <div className="Avangers-sec-box-img">
              <img src={krish} alt="amresh" />
            </div>
            <h4>Krish Naik</h4>
            <p>CIO</p>
            <span>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </span>
          </div>
        </div>
        <div className="Avangers-sec-box one">
          <div>
            <div className="Avangers-sec-box-img">
              <img src={Mukesh} alt="amresh" />
            </div>
            <h4>Mukesh Otwani</h4>
            <p>VP Automation</p>
            <span>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </span>
          </div>
        </div>
        <div className="Avangers-sec-box two">
          <div>
            <div className="Avangers-sec-box-img">
              <img src={Souranghsu} alt="amresh" />
            </div>
            <h4>Souranghsu Pal</h4>
            <p>Mentor</p>
            <span>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </span>
          </div>
        </div>
        <div className="Avangers-sec-box one">
          <div>
            <div className="Avangers-sec-box-img">
              <img src={sunny} alt="amresh" />
            </div>
            <h4>Sunny Bhaveen Chandra</h4>
            <p>Data scientist</p>
            <span>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </span>
          </div>
        </div>
        <div className="Avangers-sec-box two">
          <div>
            <div className="Avangers-sec-box-img">
              <img src={telusko} alt="amresh" />
            </div>
            <h4>Navin Reddy</h4>
            <p>Senior VP</p>
            <span>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </span>
          </div>
        </div>
      </div>
      <div className="next" id="next">
        <IconButton onClick={() => funNext()}>
          <img src={arrowRight} alt="arrowLefit" />
        </IconButton>
      </div>
    </div>
  );
}

export default Avangers;
