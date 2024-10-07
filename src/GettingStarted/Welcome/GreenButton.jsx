import React from "react";
import { useNavigate } from "react-router";

function GreenButton() {
    const navigate = useNavigate();
    const handleGetStartedClick = () => {
        navigate("/learn"); 
    }
  return (
    <button
      type="submit"
      className="
    bg-[#58cc05] text-white font-bold py-3 px-6 rounded-2xl
    font-din-round
    shadow-[0_5px_0_#58a700]
    hover:bg-[#58cc02]/90
    active:shadow-none active:translate-y-[5px]
    transition-all duration-150 ease-in-out
  "
      onClick={handleGetStartedClick}
    >
      GET STARTED
    </button>
  );
}

export default GreenButton;
