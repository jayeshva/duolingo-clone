import React from "react";
import BlueButton from "./BlueButton";
import GreenButton from "./GreenButton";
function Welcome() {
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
         <GreenButton/>
         <BlueButton/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
