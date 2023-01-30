import React, { useState } from "react";
import { Trip } from "./trip";
import { TRIPS } from "./trips";

export const UpcomingTrip = () => {
  return (
    <div className="tripList">
      <p className="upcomingtrips-title">Upcoming trips</p>
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
