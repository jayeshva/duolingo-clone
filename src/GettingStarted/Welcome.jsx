import React from "react";
import { useNavigate } from "react-router";
function Welcome() {
    const navigate = useNavigate();
    const handleGetStartedClick = () => {
        navigate("/learn"); 
    }

  return (
    <div className="flex h-[780px] flex-col justify-center items-center bg-white">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-center lg:w-1/2 w-full mb-8 lg:mb-0">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/ded26f174e26ad19d0a35cad7747c28c.png"
            alt="Characters Image"
            className="max-h-[424px] lg:max-h-[424px]"
          />
        </div>

        <div className="flex flex-col items-center lg:w-1/2 w-full text-center lg:text-left space-y-6">
          <h1 className="text-[#4B4B4B] w-[480px]  font-din-round font-bold text-[32px]">
            The free, fun, and effective way to learn a language!
          </h1>

          <div className="flex flex-col space-y-3 w-full lg:w-auto">
            <button 
          type="submit"
          className="
          bg-[#58cc05] text-white font-bold py-3 px-6 rounded-2xl
          font-din-round
          shadow-[0_5px_0_#58a700]
          hover:bg-[#58cc02]/90
          active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out
        "        onClick={handleGetStartedClick}>
          GET STARTED
        </button>

            {/* I Already Have an Account Button */}
            <button className="border-2 border-gray-300 text-[#1CB0F6] text-[15px] font-din-round font-bold py-3 px-8 rounded-[12px] shadow-[0_3px_0_#D1D5DB]  hover:bg-gray-100 active:shadow-none active:translate-y-[5px]
          transition-all duration-150 ease-in-out">
              I ALREADY HAVE AN ACCOUNT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
