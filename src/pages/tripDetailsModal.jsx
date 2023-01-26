import React from "react";
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
      </div>
    </div>
  );
};
