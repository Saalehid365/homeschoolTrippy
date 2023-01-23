import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaUserAlt,
  FaLightbulb,
  FaArrowCircleLeft,
  FaHome,
} from "react-icons/fa";
import { SignOut } from "./signOut";

export const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="titleLeft">
        <h2>HomeSchool Trippy</h2>
        <div className="List">
          <div className="titleList">
            <FaHome className="icon" />
            <Link to="/">Home</Link>
          </div>
          <div className="titleList">
            <FaCalendar className="icon" />
            <Link to="/upcomingtrip">upcoming trips</Link>
          </div>
          <div className="titleList">
            <FaArrowCircleLeft className="icon" />
            <Link>previous trips</Link>
          </div>
          <div className="titleList">
            <FaLightbulb className="icon" />
            <Link to="/recommendations">recommendations</Link>
          </div>

          <SignOut />
        </div>
      </div>
    </div>
  );
};
