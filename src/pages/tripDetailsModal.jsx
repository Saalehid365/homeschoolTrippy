import React from "react";
import {
  FaCalendarAlt,
  FaMapMarker,
  FaPoundSign,
  FaRegClock,
  FaUser,
} from "react-icons/fa";
import "./tripDetailsModal.css";

export const TripDetailsModal = (props) => {
  const modalState = props.toggle;
  const action = props.action;

  return (
    <div className={`modal-container ${modalState ? "active" : ""}`}>
      <div className="modal">
        <div className="closeBtn" onClick={action}>
          X
        </div>
        <div className="modal-card">
          <div className="modal-info">
            <p>{props.event}</p>
          </div>
          <div className="modal-info-one">
            <div className="modal-inner-info class1">
              <p>Activity: {props.activity}</p>
            </div>
            <div className="modal-inner-info ">
              <div className="modal-date-time class1">
                <FaCalendarAlt className="info-icon" />
                <p> Date: {props.date}</p>
              </div>
              <div className="modal-date-time class1">
                <FaRegClock className="info-icon" />
                <p> Time: {props.time}</p>
              </div>
            </div>
            <div className="modal-inner-info class1">
              <FaUser className="info-icon" />
              <p> Spaces: {props.spaces}</p>
            </div>

            <div className="modal-inner-info class1">
              <FaPoundSign className="info-icon" />
              <p>price: {props.price}</p>
            </div>
          </div>
          <div className="modal-location">
            <p className="location-tab">
              <FaMapMarker className="info-icon-map" /> Location
            </p>
            <div className="inner-address">
              <p>{props.event}</p>
            </div>
            <div className="inner-address">
              <p className="address-span">{props.address}</p>
              <p>{props.tel}</p>
              <a href="{props.website}">{props.website}</a>
            </div>
          </div>
          <div>
            <p>pay for ticket</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/*event={event}
activity={activity}
price={price}
date={date}
spaces={spaces}
time={time}
website={website}
tel={tel}
address={address}*/
