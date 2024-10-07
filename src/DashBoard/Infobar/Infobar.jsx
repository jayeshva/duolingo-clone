import React, { useContext, useState } from "react";
import Scorecard from "./Scorecard";
import Footer from "../Footer";
import Register from "../../gettingstarted/Authenticate/Register"; 
import { GlobalContext } from "../../hooks/GlobalProvider";

function Infobar() {
  const {state, dispatch} = useContext(GlobalContext);
  const [showRegister, setShowRegister] = useState(false);

  const toggleRegister = () => {
    setShowRegister(!showRegister);
  };

  return (
    <aside className="flex-col p-4 pt-1 pl-0 w-[380px] fixed top-5 right-28 h-screen overflow-auto">
     
          <Scorecard />

          <div className="bg-white rounded-2xl p-5 pt-4 pb-6 mb-4 border-2 border-[#E5E5E5]">
            <h2 className="font-bold tracking-wide font-din-round text-[#4B4B4B] text-lg">
              Unlock Leaderboards!
            </h2>
            <div className="flex items-center space-x-4 mt-[30px] ml-3">
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg"
                alt="lock"
                className="w-14 h-12"
              />
              <p className="font-din-round-light text-gray-500 pl-4">
                Complete 10 more lessons to start competing
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 mb-4 border-2 border-[#E5E5E5]">
            <div className="flex justify-between">
              <h2 className="font-bold font-din-round text-[#4B4B4B] text-lg">
                Daily Quests
              </h2>
              <a href="#" className="text-[#1CB0F6] font-din-round text-sm">
                VIEW ALL
              </a>
            </div>
            <div className="flex items-center mt-2 p-2">
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                alt="quest"
                className="w-16 h-16"
              />
              <div className="mt-2 ml-4">
                <p className="font-din-round text-[#4B4B4B] font-bold">
                  Earn 10 XP
                </p>
                <div className="flex justify-between items-center mt-2">
                  <div className="w-[200px] h-[20px] bg-gray-200 rounded-full rounded-tr-none rounded-br-none">
                    <p className="font-din-round absolute text-gray-400 mx-[85px] text-[14px]">
                      0 / 10
                    </p>
                    <div className="top-0 left-0 w-[0%] h-full bg-yellow-400 rounded-full text-sm"></div>
                  </div>
                  <img
                    className="w-8 h-9 ml-1"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/df7eda7cc1cc833ba30cd1e82781b68f.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center tracking-normal bg-white rounded-2xl p-4 pb-5 border-2 border-[#E5E5E5]">
            <h2 className="font-bold font-din-round text-[#4B4B4B] mb-6 text-lg">
              Create a profile to save your progress!
            </h2>
            <button
              type="submit"
              onClick={()=>{
                dispatch({type:"REGISTER"})
              }} 
              className="tracking-wider bg-[#58cc05] text-white font-bold py-3 w-full rounded-2xl shadow-[0_5px_0_#58a700] font-din-round text-[14px] hover:bg-[#58cc02]/90 active:shadow-none active:translate-y-[5px] transition-all duration-150 ease-in-out"
            >
              CREATE A PROFILE
            </button>
            <button
              onClick={()=>{
                dispatch({type:"LOGIN"})
              }} 
              className="bg-[#1CB0F6] text-white tracking-wider shadow-[0_5px_0_#1999D6] font-din-round text-[14px] font-bold w-full mt-4 py-3 rounded-2xl active:shadow-none active:translate-y-[5px] hover:bg-sky-400 transition"
            >
              SIGN IN
            </button>
          </div>

          <Footer />
    </aside>
  );
}

export default Infobar;
