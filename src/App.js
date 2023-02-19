import "./App.css";
import { Navbar } from "./components/navbar";
import { UpcomingTrip } from "./pages/upcomingTrips";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Recommendations } from "./pages/recommendations";
import { Createaccount } from "./pages/createaccount";
import { AuthContextProvider } from "./context/shop-context";

function App() {
  
  return (
    <AuthContextProvider>
    <div className="App">
      <div className="container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Createaccount />} />
            <Route path="upcomingtrip" element={<UpcomingTrip />} />
            <Route path="recommendations" element={<Recommendations />} />
          </Routes>
        </Router>
      </div>
    </div>
    </AuthContextProvider>
  );
}

export default App;
