import React from 'react'

export const SoundCard = ({ symbol, word }) => {return (
    <div className=" flex flex-col items-center border-2 border-gray-200 shadow-[0_2px_0_#E5E5E5] cursor-pointer text-[#4B4B4B] active:shadow-none active:translate-y-[5px] rounded-2xl  pb-2 text-center w-[150px] md:w-[155px]">
      <h3 className="text-[18px] font-din-round-light">{symbol}</h3>
      <p className="text-[#AFAFAF] font-din-round-light text-[16px]">{word}</p>
      <div className="border-t-8 border-gray-300 w-10 bg-[#E5E5E5] rounded-3xl opacity-60"></div>
    </div>
  );
}

