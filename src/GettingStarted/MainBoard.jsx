import React from "react";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";
import Welcome from "./Welcome";

function MainBoard() {
  return (
    <div className="min-h-screen">
      <Topbar />
      <Welcome/>
      <BottomBar />
    </div>
  );
}

export default MainBoard;
