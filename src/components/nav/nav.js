import React from "react";
import "./nav.css";
import ineuronImg from "../../assets/ineuron-logo.png";
import Search from "../../assets/icons/search.svg";
function Nav() {
  return (
    <div className="navBar">
      <div className="nav-top">
        <img src={ineuronImg} alt="" />
        <div className="nav-search">
          <img src={Search} alt="search" />
          <input type="text" placeholder="What do you want to learn?" />
        </div>
        <div className="nav-right">
          <button className="Signup">Sign up</button>
          <button className="signin">Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
