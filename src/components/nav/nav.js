import React from "react";
import "./nav.css";
import ineuronImg from "../../assets/ineuron-logo.png";
import Search from "../../assets/icons/search.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
function Nav() {
  const [menu, setMenu] = useState(false);
  const menucontainer = (
    <div className="menu">
      <div class="menu-top">
        <img src={ineuronImg} alt="ineruon" />
        <IconButton onClick={() => setMenu(!menu)}>
          <CancelIcon />
        </IconButton>
      </div>
      <ul>
        <li>Coursees</li>
        <li>One Neuron</li>
        <li>Job portal</li>
        <li>Become an affilliate</li>
        <li>hall of fame</li>
        <li>internship</li>
        <li>Company</li>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Sign in</Button>
          <Button variant="outlined">Sign up</Button>
        </Stack>
      </ul>
    </div>
  );

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

        {!menu ? (
          <div className="threeDot">
            <IconButton onClick={() => setMenu(!menu)}>
              <MoreHorizIcon />
            </IconButton>
          </div>
        ) : null}
      </div>
      {menu ? menucontainer : null}
    </div>
  );
}

export default Nav;
