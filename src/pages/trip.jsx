import React from "react";
import "../pages/upcomingTrips.css";
import { useState } from "react";
import "./tripDetailsModal.css";

import {
  FaTicketAlt,
  FaInfoCircle,
  FaUser,
  FaThumbtack,
  FaRegClock,
  FaRegDotCircle,
} from "react-icons/fa";
import { TripDetailsModal } from "./tripDetailsModal";

export const Trip = (props) => {
  const { location, activites, price, time, date, spaces, event } = props.data;
  const [modalState, setModalState] = useState(false);
  function openModal() {
    setModalState(!modalState);
  }

  return (
    <div className="main-card">
      <div className="inner-card">
        <div className="card-date">
          <div className="date-container">
            <div className="date-month">
              <p>Jul</p>
            </div>
            <div className="date-day">
              <p>10</p>
            </div>
          </div>
        </div>
        <div className="card-info">
          <div className="card-info-inner">
            <p className="card-info-inner-p">{event}</p>
            <div className="card-open">
              <FaRegDotCircle className="card-open-icon" />
              <p>Open</p>
            </div>
          </div>
          <div className="card-info-inner">
            <div className="cii-inner">
              <FaUser className="card-inner-icons" />
              <div className="ciii-inner">
                <p>Capacity: &nbsp; </p>
                <p> {spaces}</p>
              </div>
            </div>
            <div className="cii-inner">
              <FaThumbtack className="card-inner-icons" />
              <div className="ciii-inner">
                <p>{location}</p>
              </div>
            </div>
          </div>
          <div className="card-info-inner-date">
            <FaRegClock className="card-inner-icons" />
            <div className="ciii-inner">
              <p>{date}</p>
            </div>
          </div>
        </div>
        <div className="card-cost">
          <div className="cost-box">
            {price === "free" ? (
              <p className="cost-free">Free</p>
            ) : (
              <p className="cost-price">£{price}</p>
            )}
          </div>
        </div>
      </div>
      {/* <div className="cardBtns cardBtnTicket">
        <FaTicketAlt />
        <p>Buy ticket</p>
      </div>
      <button onClick={openModal} className="cardBtns cardBtnDetails">
        <FaInfoCircle />
        <p>Details</p>
      </button>
      <TripDetailsModal toggle={modalState} action={openModal} />/* */}
    </div>
  );
};
