import React from "react";
import "../pages/upcomingTrips.css";

import { FaTicketAlt, FaInfoCircle } from "react-icons/fa";

export const Trip = (props) => {
  const { location, activites, price, time, date, spaces } = props.data;
  return (
    <div className="main-card">
      <p className="date-tripcard">{date}</p>
      <div className="tripCard">
        <div className="tripInnerCard">
          <div>
            <p className="tripInfo">
              Location: <span className="tripLocation">{location}</span>
            </p>
            <p className="tripInfo">
              capacity: <span className="tripSpaces">{spaces}</span>
            </p>
          </div>
          <div>
            <p>completed</p>
          </div>
        </div>
        <div className="editCard">
          <button className="cardBtns cardBtnDetails">
            <FaInfoCircle />
            <p>Details</p>
          </button>
          <div className="cardBtns cardBtnTicket">
            <FaTicketAlt />
            <p>Buy ticket</p>
          </div>
        </div>
      </div>
    </div>
  );
};
