import React from "react";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar/BottomBar";
import Welcome from "./Welcome/Welcome";

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
