import "./App.css";
import { Navbar } from "./components/navbar";
import { UpcomingTrip } from "./pages/upcomingTrips";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { Recommendations } from "./pages/recommendations";
import { Hamburger } from "./components/hamburger";
import { useState } from "react";

function App() {
  const [hamState, setHamState] = useState(false);
  function openHamburger() {
    setHamState(!hamState);
  }
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navbar />
          <Hamburger toggle={hamState} action={openHamburger} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="upcomingtrip" element={<UpcomingTrip />} />
            <Route path="recommendations" element={<Recommendations />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
