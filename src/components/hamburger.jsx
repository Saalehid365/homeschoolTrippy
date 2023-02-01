import React from "react";
import { FaGripLines } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./hamburger.css";

export const Hamburger = (props) => {
  const hamburgerState = props.toggle;
  const action = props.action;
  return (
    <div className={`hamburger-container ${hamburgerState ? "action" : ""} `}>
      <div className="hamburger-button-container">
        <button className="openClose" onClick={action}>
          <FaGripLines />
        </button>
      </div>
      <div className="ham-navbar">
        <Link className="nav-link-list" to="/">
          Home
        </Link>
        <Link className="nav-link-list" to="/upcomingtrip">
          upcoming trips
        </Link>
        <Link className="nav-link-list" to="/recommendations">
          recommendations
        </Link>
        <Link className="nav-link-list">previous trips</Link>
      </div>
    </div>
  );
};
