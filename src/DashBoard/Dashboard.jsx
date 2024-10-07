import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; 
import Infobar from "./Infobar/Infobar";
import { GlobalContext } from "../hooks/GlobalProvider";
import Authenticate from "../gettingstarted/Authenticate/Authenticate";

function Dashboard() {
  const {state,dispatch} = useContext(GlobalContext);
//   const handleLogin = () => {
//     dispatch({ type: "LOGIN" });
// };

const handleRegister = () => {
    dispatch({ type: "REGISTER" });
};

  return (
    <div>
    {state.auth == false ?
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
    </div> : <Authenticate/>
    }
    </div>
  );
}

export default Dashboard;
