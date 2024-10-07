import React from "react";

function Scorecard() {
  return (
    <div className="flex justify-between items-center mb-6 space-x-4 font-din-round-light font-extrabold text-[15px]">
   <div className="px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
   <svg
        viewBox={"0 0 82 66"}
        className="w-[36px] h-[28.98px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image
          xlinkHref={
            "https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg"
          }
          height="3168"
          width="82"
        />
      </svg>
   </div>
      <div className="flex justify-between items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
        <img
          className="w-8 h-7"
          src="https://d35aaqx5ub95lt.cloudfront.net/images/icons/ba95e6081679d9d7e8c132da5cfce1ec.svg"
        />
        <span className="text-[#E5E5E5] pl-[5px]">0</span>
      </div>
      <div className="flex items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
        <img
          className="w-8 h-7"
          src="https://d35aaqx5ub95lt.cloudfront.net/images/gems/45c14e05be9c1af1d7d0b54c6eed7eee.svg"
        />
        <span className="text-[#1CB0F6] pl-[5px]">500</span>
      </div>
      <div className="flex items-center px-3 py-2 rounded-xl hover:bg-gray-100 transition-colors duration-200">
        <img
          className="w-8 h-7"
          src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/8fdba477c56a8eeb23f0f7e67fdec6d9.svg"
        />
        <span className="text-[#FF4B4B] pl-[6px]">5</span>
      </div>
    </div>
  );
}

export default Scorecard;
