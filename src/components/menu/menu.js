import React from "react";
import "./menu.css";
import { useRef, useState } from "react";
function Menu({ showCompany, setShowCompany, showCourses, setShowCourses }) {
  const [menu, setMenu] = useState("");

  window.onload = (event) => {
    setMenu(document.querySelector(".nev-menu"));
  };
  if (menu) {
    menu.children[0].style.fontWeight = showCourses ? "bold" : null;
    menu.children[menu.children.length - 1].style.fontWeight = showCompany
      ? "bold"
      : null;
  }

  console.log();
  return (
    <div className="menu-container">
      <ul className="nev-menu">
        <li
          onClick={(e) => {
            setShowCourses(!showCourses);
          }}
        >
          Course
        </li>
        <li>One Neuron</li>
        <li>Job Portal</li>
        <li>Internship Portal</li>
        <li>Become an affiliate</li>
        <li>Hall of fame</li>
        <li>Blog</li>
        <li
          onClick={(e) => {
            setShowCompany(!showCompany);
          }}
        >
          Company
        </li>
      </ul>
    </div>
  );
}

export default Menu;
