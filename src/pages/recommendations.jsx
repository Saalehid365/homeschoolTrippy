import React from "react";
import { FaFootballBall, FaPaintBrush, FaBookOpen } from "react-icons/fa";
import "./recommendations.css";

export const Recommendations = () => {
  return (
    <div className="recContainer">
      <form action="" className="questionForm">
        <div className="questions">
          <div className="trip-question-title">
            <div className="question-number">
              <p>1</p>
            </div>
            <p className="TripQuestion">What is the catergory of the Trip</p>
          </div>
          <div className="optionsList">
            <div className="options">
              <input
                type="radio"
                name="option-type"
                id="option-1"
                className="hidebx"
                value="Sports"
              />
              <label className="label label-1" for="option-1">
                <FaFootballBall className="Trip-icon" />
                <p>Sports</p>
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="option-type"
                id="option-2"
                className="hidebx"
                value="Arts and Crafts"
              />
              <label className="label label-2" for="option-2">
                <FaPaintBrush className="Trip-icon" />
                <p>Arts and Crafts</p>
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="option-type"
                id="option-3"
                className="hidebx"
                value="Education"
              />
              <label className="label label-3" for="option-3">
                <FaBookOpen className="Trip-icon" />
                <p>Education</p>
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="option-type"
                id="option-4"
                className="hidebx"
                value="Education"
              />
              <label className="label label-4" for="option-4">
                <FaBookOpen className="Trip-icon" />
                <p>Food and Drink</p>
              </label>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="trip-question-title">
            <div className="question-number">
              <p>2</p>
            </div>
            <p className="TripQuestion">Is this a Private or Public Trip</p>
          </div>
          <div className="optionsList">
            <div className="options">
              <input
                type="radio"
                name="option2-type"
                id="option2-1"
                className="hidebx"
                value="private"
              />
              <label className="label label-Q2-1" for="option2-1">
                <p>Private</p>
              </label>
            </div>
            <div className="options">
              <input
                type="radio"
                name="option2-type"
                id="option2-2"
                className="hidebx"
                value="public"
              />
              <label className="label label-Q2-2" for="option2-2">
                <p>Public</p>
              </label>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="trip-question-title">
            <div className="question-number">
              <p>3</p>
            </div>
            <p className="TripQuestion">What is the Name of the Trip venue</p>
          </div>
          <div>
            <input
              type="text"
              name="venue-location"
              id="venue-location"
              placeholder="Trip Name"
            />
          </div>
        </div>
        <div className="questions">
          <div className="trip-question-title">
            <div className="question-number">
              <p>4</p>
            </div>
            <p className="TripQuestion">When will this Trip be</p>
          </div>
        </div>
      </form>
    </div>
  );
};
