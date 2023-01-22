import React from "react";
import "./loginNav.css";
import { FaCalendarPlus } from "react-icons/fa";

export const LoginNav = () => {
  return (
    <div className="addTrip">
      <button className="addTripBtn">
        <p>add new trip</p>
        <FaCalendarPlus className="calenderI" />
      </button>
    </div>
  );
};
