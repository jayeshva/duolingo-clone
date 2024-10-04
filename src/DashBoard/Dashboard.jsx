import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Sounds from "./Sounds";
import Learn from "./Learn";
import Infobar from "./Infobar";
import Leaderboards from "./Leaderboards";
import Quests from "./Quests";
import Shop from "./Shop";
import Register from "../GettingStarted/Register";

function Dashboard() {
  return (
    <div className="flex justify-items-start h-screen">
      <Sidebar />

      <div className="ml-[400px] mt-5">
        <Routes>
          <Route path="learn" element={<Learn />} />
          <Route path="sounds" element={<Sounds />} />
          <Route path="leaderboards" element={<Leaderboards />} />
          <Route path="quests" element={<Quests />} />
          <Route path="shop" element={<Shop />} />
          <Route path="profile" element={<Learn />} />
          <Route path="more" element={<Learn />} />
          <Route path="*" element={<Sounds />} />
        </Routes>
      </div>

      <Infobar />
    </div>
  );
}

export default Dashboard;
