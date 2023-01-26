import "./App.css";
import { Navbar } from "./components/navbar";
import { UpcomingTrip } from "./pages/upcomingTrips";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProfile } from "./components/userProfile";
import { HomePage } from "./pages/homePage";
import { Recommendations } from "./pages/recommendations";
import { SignIn } from "./components/signIn";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="upcomingtrip" element={<UpcomingTrip />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="signIn" element={<SignIn />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
