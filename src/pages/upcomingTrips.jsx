import React, { useState } from "react";
import { Trip } from "./trip";
import { TRIPS } from "./trips";
import { LoginNav } from "../components/loginNav";

export const UpcomingTrip = () => {
  return (
    <div className="tripList">
      <LoginNav />

      <div className="listOfTrips">
        {TRIPS.map((trip) => (
          <div className="tripDetails">
            <Trip data={trip} key={trip.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
