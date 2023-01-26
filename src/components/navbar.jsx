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

export const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="titleLeft">
        <h2>Home-Ed Trippers</h2>
        <div className="List">
          <div className="titleList">
            <FaHome className="iconNav" />
            <Link to="/">Home</Link>
          </div>
          <div className="titleList">
            <FaCalendar className="iconNav" />
            <Link to="/upcomingtrip">upcoming trips</Link>
          </div>
          <div className="titleList">
            <FaArrowCircleLeft className="iconNav" />
            <Link>previous trips</Link>
          </div>
          <div className="titleList">
            <FaLightbulb className="iconNav" />
            <Link to="/recommendations">recommendations</Link>
          </div>

          <div className="signInBtn">
            <Link to="/signIn">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
