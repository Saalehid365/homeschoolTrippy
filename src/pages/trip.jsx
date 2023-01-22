import React from "react";
import "../pages/upcomingTrips.css";
import { Link } from "react-router-dom";

import { FaTicketAlt, FaInfoCircle, FaRegEdit } from "react-icons/fa";

export const Trip = (props) => {
  const { location, activites, price, time, date, spaces } = props.data;
  return (
    <div className="tripCard">
      <div className="tripInnerCard">
        <div>
          <p className="tripDate">{date}</p>
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
        <div className="cardBtns cardBtnEdit">
          <FaRegEdit />
          <p>Edit</p>
        </div>
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
  );
};
