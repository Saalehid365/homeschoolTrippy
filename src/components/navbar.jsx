import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaLightbulb,
  FaArrowCircleLeft,
  FaHome,
} from "react-icons/fa";
import authContext from "../context/shop-context";

export const Navbar = () => {
  const {user, signout, CurrentUser } = useContext(authContext);



  return (
    <div className="navContainer">
      <div className="titleLeft">
        <h2>Home-Ed Tifaal</h2>t
        <div>
          <p>Welcome back {user?.email}</p>
        </div>
        <div className="List">
          <div className="titleList">
            <FaHome className="iconNav" />
            <Link className="nav-link-list" to="/">
              Home
            </Link>
          </div>
          <div className="titleList">
            <FaCalendar className="iconNav" />
            <Link className="nav-link-list" to="/upcomingtrip">
              upcoming trips
            </Link>
          </div>
          <div className="titleList">
            <FaLightbulb className="iconNav" />
            <Link className="nav-link-list" to="/recommendations">
              recommendations
            </Link>
          </div>
          <div className="titleList">
            <FaArrowCircleLeft className="iconNav" />
            <Link className="nav-link-list">previous trips</Link>
          </div>
          <button className="signoutBtn" onClick={signout}>Sign out</button>
          <p className="loggedinUser">{CurrentUser?.email}</p>
        </div>
      </div>

    </div>
  );
};
