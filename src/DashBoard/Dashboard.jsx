import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; 
import Infobar from "./Infobar";

function Dashboard() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2">
        <Sidebar />
      </div>

      <div className="col-span-10 grid grid-cols-12">
        <div className="col-span-7 pl-32">
          <Outlet />
        </div>

        <div className="col-span-5 px-9">
          <Infobar />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
