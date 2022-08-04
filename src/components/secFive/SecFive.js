import React from "react";
import "./SecFive.css";
import SameerKumar from "../../assets/halloffame/SameerKumar.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
function SecFive() {
  return (
    <div className="SecFive">
      <div className="SecFive-header">
        <h1>Hall fo Fame</h1>
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
        </div>{" "}
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
      </div>
      <h5>view More</h5>
    </div>
  );
}

export default SecFive;
