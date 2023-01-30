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
  FaInfo,
} from "react-icons/fa";
import { TripDetailsModal } from "./tripDetailsModal";

export const Trip = (props) => {
  const {
    location,
    activity,
    website,
    address,
    tel,
    price,
    time,
    date,
    spaces,
    event,
    id,
  } = props.data;
  const [modalState, setModalState] = useState(false);

  const datenumber = date.replace(/\D/g, "");

  const myArray = date.split(" ");
  const datemonth = myArray[2];
  const monththree = datemonth.substring(0, 3);

  console.log(monththree);

  function openModal() {
    setModalState(!modalState);
  }

  return (
    <div className="main-card">
      <div className="inner-card">
        <div className="card-date">
          <div className="date-container">
            <div className="date-month">
              <p>{monththree}</p>
            </div>
            <div className="date-day">
              <p>{datenumber}</p>
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
          <button className="more-info-btn" onClick={openModal}>
            <FaInfo className="moreinfo-icon" /> More info
          </button>
        </div>
      </div>
      <TripDetailsModal
        toggle={modalState}
        action={openModal}
        location={location}
        event={event}
        activity={activity}
        price={price}
        date={date}
        spaces={spaces}
        time={time}
        website={website}
        tel={tel}
        address={address}
        id={id}
      />
      {/* <div className="cardBtns cardBtnTicket">
        <FaTicketAlt />
        <p>Buy ticket</p>
      </div>
      <button onClick={openModal} className="cardBtns cardBtnDetails">
        <FaInfoCircle />
        <p>Details</p>
      </button>
      /* */}
    </div>
  );
};
