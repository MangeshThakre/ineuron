import React from "react";
import "./partners.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import gim from "../../assets/partner/gim.svg";
import keit from "../../assets/partner/keit.svg";
import mc from "../../assets/partner/malnad-college.svg";
import taxila from "../../assets/partner/taxila.svg";
import vit from "../../assets/partner/vit.svg";

function Partners() {
  return (
    <div className="partners-sec">
      <div className="partners-head">
        <h1>Our Partnered Institutions</h1>
      </div>
      <div className="partners-container">
        <img className="partners-img" src={gim} alt="gim" />
        <img className="partners-img" src={keit} alt="keit" />
        <img className="partners-img" src={mc} alt="mc" />
        <img className="partners-img" src={taxila} alt="taxila" />
        <img className="partners-img" src={vit} alt="vit" />
      </div>
    </div>
  );
}

export default Partners;
