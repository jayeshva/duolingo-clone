import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./GettingStarted/NotFound";
import MainBoard from "./GettingStarted/MainBoard";
import Dashboard from "./DashBoard/Dashboard"; // Layout with Outlet
import Learn from "./DashBoard/Learn"; // Dynamic Components
import Sounds from "./DashBoard/Sounds";
import Leaderboards from "./DashBoard/Leaderboards";
import Quests from "./DashBoard/Quests";
import Shop from "./DashBoard/Shop";
import Profile from "./DashBoard/Profile";
import Register from "./GettingStarted/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainBoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/learn" element={<Dashboard />}>
            <Route index element={<Learn />} />
          </Route>
          <Route path="/sounds" element={<Dashboard />}>
            <Route index element={<Sounds />} /> 
          </Route>
          <Route path="/leaderboards" element={<Dashboard />}>
            <Route index element={<Leaderboards />} /> 
          </Route>
          <Route path="/quests" element={<Dashboard />}>
            <Route index element={<Quests />} /> 
          </Route>
          <Route path="/shop" element={<Dashboard />}>
            <Route index element={<Shop />} /> 
          </Route>
          <Route path="/profile" element={<Dashboard />}>
            <Route index element={<Profile />} /> 
          </Route>
          <Route path="/more" element={<Dashboard />}>
            <Route index element={<Profile />} /> 
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
