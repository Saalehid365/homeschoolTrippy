import React, { useState } from "react";
import { Trip } from "./trip";
import { TRIPS } from "./trips";
import "../pages/upcomingTrips.css";
import { LoginNav } from "../components/loginNav";
import { TripDetailsModal } from "./tripDetailsModal";

export const UpcomingTrip = () => {
  const [modalState, setModalState] = useState(false);
  function openModal() {
    setModalState(!modalState);
  }
  return (
    <div className="tripList">
      <LoginNav />

      <div className="listOfTrips">
        {TRIPS.map((trip) => (
          <button className="tripDetails" onClick={openModal}>
            <Trip data={trip} key={trip.id} />
          </button>
        ))}
        <TripDetailsModal toggle={modalState} action={openModal} />
      </div>
    </div>
  );
};
