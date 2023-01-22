import React from "react";
import { Trip } from "./trip";
import { TRIPS } from "./trips";
import "../pages/upcomingTrips.css";
import { LoginNav } from "../components/loginNav";

export const UpcomingTrip = () => {
  return (
    <div className="tripList">
      <LoginNav />
      <div className="listOfTrips">
        {TRIPS.map((trip) => (
          <Trip data={trip} key={trip.id} />
        ))}
      </div>
    </div>
  );
};
