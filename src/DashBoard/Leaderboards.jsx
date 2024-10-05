import React from "react";

function Leaderboards() {
  return (
    <div className="flex flex-col items-center mt-5 -ml-3">
      <img src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/660a07cd535396f03982f24bd0c3844a.svg" />
      <h1 className="text-2xl md:text-[25px] font-bold mb-2 mt-2 font-din-round text-[#4B4B4B] text-center">
        Unlock Leaderboards!
      </h1>
      <p className="text-gray-500  font-din-round-light text-[19px]  text-center">
        Complete 10 more lessons to start competing
      </p>
      <button
        className="bg-white mt-5 mb-8 text-[#1CB0F6] shadow-[0_2px_0_#E5E5E5] tracking-wide font-din-round
    text-[16px] font-bold px-[60px] py-[10px] rounded-2xl border-2 border-[#E5E5E5] active:shadow-none active:translate-y-[5px] hover:bg-gray-100 transition"
      >
        START A LESSON
      </button>
      <div className="relative w-full mt-6">
        <div className="absolute bottom-0 left-0 w-full h-[250px] z-20  bg-gradient-to-t from-white via-white to-transparent"></div>

        <div className="flex justify-between w-full px-10 relative z-10">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/66cc61ca4afdfeb838aafa9828c4be07.svg"
            alt="league-1"
          />
          <img
            className="-ml-60"
            src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/57708658a81384750325296995face91.svg"
            alt="league-2"
          />
          <img
            className="-ml-4"
            src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/25acac0956f9ff91bc9fd184000da9aa.svg"
            alt="league-3"
          />
        </div>
      </div>
    </div>
  );
}

export default Leaderboards;
