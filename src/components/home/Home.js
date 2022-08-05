import React from "react";
import "./home.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Card from "react-bootstrap/Card";
import homeImgone from "../../assets/hero-influencers1.png";
import Carousel from "react-bootstrap/Carousel";

function Home({ showCompany, setShowCompany, showCourses, setShowCourses }) {
  const coursesList = (
    <ul className="coureses-list">
      <li>
        DATA SCIENCE <KeyboardArrowRightIcon />
      </li>
      <li>
        BIG DATA <KeyboardArrowRightIcon />
      </li>
      <li>
        DATA ANALITICS <KeyboardArrowRightIcon />
      </li>
      <li>
        WEB DEVELOMENT <KeyboardArrowRightIcon />
      </li>
      <li>
        MOBILE DEVELOPMENT
        <KeyboardArrowRightIcon />
      </li>
      <li>
        BLOCKCHAIN <KeyboardArrowRightIcon />{" "}
      </li>
      <li>
        PROGRAMMING <KeyboardArrowRightIcon />
      </li>
      <li>
        CYBER SECURITY <KeyboardArrowRightIcon />{" "}
      </li>
      <li>
        TESTING <KeyboardArrowRightIcon />
      </li>
      <li>
        DIGITAL MARKETING <KeyboardArrowRightIcon />{" "}
      </li>
      <li>
        CLOUD <KeyboardArrowRightIcon />
      </li>
      <li>
        DEVOPS <KeyboardArrowRightIcon />
      </li>
      <li>
        IOT <KeyboardArrowRightIcon />
      </li>
      <li>
        RPA <KeyboardArrowRightIcon />
      </li>
      <li>
        AR VR <KeyboardArrowRightIcon />
      </li>
      <li>
        SALEFORCE <KeyboardArrowRightIcon />
      </li>
      <li>
        DATA STRUCTURE <KeyboardArrowRightIcon />
      </li>
      <li>
        SYSTEM DESIGN <KeyboardArrowRightIcon />
      </li>
      <li>
        DATABASE <KeyboardArrowRightIcon />
      </li>
      <li>
        APTITUDE <KeyboardArrowRightIcon />
      </li>
      <li>
        RESUME <KeyboardArrowRightIcon />
      </li>
      <li>
        K12 <KeyboardArrowRightIcon />
      </li>
    </ul>
  );

  const companyList = (
    <ul className="company-list">
      <li>About us</li>
      <li>Contact us</li>
      <li>Hack-A-Thon</li>
      <li>Job guarantee</li>
      <li>Privacy policy</li>
      <li>term and conditions</li>
      <li>FAQs</li>
      <li>Job assistance</li>
    </ul>
  );

  return (
    <section className="section-home">
      {/* popup */}
      <div className="coursesPopup">
        {showCourses ? coursesList : null}
        <div
          className="coursesPopupTriggre"
          onClick={() => setShowCourses(!showCourses)}
        >
          <div></div>
        </div>
      </div>
      <div className="companyPopup">
        <div
          className="companyPopupTriggre"
          onClick={() => setShowCompany(!showCompany)}
        >
          <div></div>
        </div>
        {showCompany ? companyList : null}
      </div>

      <div className="home"></div>

      <div className="container home">
        <Card className="text-white">
          <Card.Img className="homeimage" variant="right" src={homeImgone} />
          <div id="card-content">
            <h5>Learn from the best of industry</h5>
            <h1>
              Highest in quality, affordable
              <br /> in price
            </h1>
            <p>
              Digital entrepreneurs, Youtubers and content creators provide
              affordable courses across technologies.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Home;
