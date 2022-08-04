import React from "react";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import iso from "../../assets/iso.svg";
import ineuron from "../../assets/ineuron-logo-white.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import IconButton from "@mui/material/IconButton";

function Footer() {
  return (
    <div className="footer-containver">
      <div className="container">
        <div className="footer-box">
          <div className="footer-one-head">
            <img src={ineuron} alt="" />
            <div>
              <IconButton>
                <YouTubeIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={{ color: "white" }} />
              </IconButton>
            </div>
          </div>
          <div id="footer-containver-section-one">
            <LocationOnIcon />
            <p>
              17th Floor Tower A, Brigade Signature Towers, Sannatammanahalli,
              Bengaluru, Karnataka 562129.
            </p>
          </div>
          <div id="footer-containver-section-one">
            <EmailIcon />
            <p>
              Email:
              <span>
                <a href="mailto:contact@ineuron.ai">contact@ineuron.ai</a>
              </span>
            </p>
          </div>
          <div className="footer-iso">
            <img src={iso} alt="iso" />
          </div>
        </div>

        <div className="footer-containver-sections">
          <h3>company</h3>
          <p>About us</p>
          <p>Hack-A-Thon</p>
          <p>Job guarantee</p>
          <p>Privacy policy</p>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Job assistance</p>
          <p>Team and conditons</p>
        </div>
        <div className="footer-containver-sections">
          <h3>Products</h3>
          <p>job portal</p>
          <p>internship portal</p>
          <p>Bacome an affiliate</p>
          <p>Hall of fame</p>
          <p>inBlog</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
