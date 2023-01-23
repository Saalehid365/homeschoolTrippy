import React, { useState } from "react";
import { FaFootballBall, FaPaintBrush, FaBookOpen } from "react-icons/fa";
import "./recommendations.css";

export const Recommendations = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [duration, setDuration] = useState();

  const [catergory, setCategory] = useState("");
  const [privatpublic, setPrivatepublic] = useState("");
  const [tripname, setTripname] = useState("");

  const [tripcostadult, setTripcostadult] = useState("");
  const [tripcostchild, setTripcostchild] = useState("");
  const [tripmin, setTripmin] = useState("");
  const [tripmax, setTripmax] = useState("");

  function handleData(e) {
    e.preventDefault();
    console.warn(
      "all data",
      catergory,
      privatpublic,
      tripname,
      tripcostadult,
      tripcostchild,
      tripmax,
      tripmin
    );
  }

  return (
    <div className="recContainer">
      <p className="trip-questions">Trip Quesions</p>
      <form onSubmit={handleData} className="questionForm">
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
                onChange={(e) => setCategory(e.target.value)}
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
                onChange={(e) => setCategory(e.target.value)}
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
                onChange={(e) => setCategory(e.target.value)}
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
                onChange={(e) => setCategory(e.target.value)}
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
                onChange={(e) => setPrivatepublic(e.target.value)}
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
                onChange={(e) => setPrivatepublic(e.target.value)}
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
              onChange={(e) => setTripname(e.target.value)}
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
          <div className="date-picker">
            <div className="date-picker-date">
              <p>Date</p>
              <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="date-picker-date">
              <h1>selected Date : {date}</h1>
            </div>
          </div>
          <div className="date-picker">
            <div className="time-picker-time">
              <p>Date</p>
              <input type="time" onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className="time-picker-time">
              <h1>start time : {time}</h1>
            </div>
            <div className="time-picker-time">
              <p>Duration</p>
              <input
                type="number"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="time-picker-time">
              <h1>
                Duration: {duration} {duration && <>hr</>}{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="trip-question-title">
            <div className="question-number">
              <p>5</p>
            </div>
            <p className="TripQuestion">
              Is this a Free Trip or is there a cost
            </p>
          </div>
          <div className="optionsList">
            <div className="cost-question">
              <div className="cost-question-option">
                <div className="cost">
                  <p>Cost per Adult</p>
                  <input
                    type="number"
                    name="costAdult"
                    id="costAdult"
                    placeholder="cost per adult"
                    onChange={(e) => setTripcostadult(e.target.value)}
                  />
                </div>
                <div className="cost">
                  <p>Cost per Child</p>
                  <input
                    type="number"
                    name="costChild"
                    id="costChild"
                    placeholder="cost per child"
                    onChange={(e) => setTripcostchild(e.target.value)}
                  />
                </div>
              </div>
              <div className="free-text">
                <p>if free please leave blank </p>
              </div>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="trip-question-title">
            <div className="question-number">
              <p>6</p>
            </div>
            <p className="TripQuestion">
              Is there a minimun and maximum amount of attendees
            </p>
          </div>
          <div className="optionsList">
            <div className="cost-question">
              <div className="cost-question-option">
                <div className="cost">
                  <p>minimun Children</p>
                  <input
                    type="number"
                    name="minChildren"
                    id="minChildren"
                    placeholder="minimum children"
                    onChange={(e) => setTripmin(e.target.value)}
                  />
                </div>
                <div className="cost">
                  <p>Maximum Child</p>
                  <input
                    type="number"
                    name="maxChildren"
                    id="macChildren"
                    placeholder="maximum child"
                    onChange={(e) => setTripmax(e.target.value)}
                  />
                </div>
              </div>
              <div className="free-text">
                <p>if theres no Min/Max please leave blank </p>
              </div>
            </div>
          </div>
        </div>
        <div className="submitBtn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
