import React from "react";

function FloatingButton({color, content}) {
  return (
    
      <button
        style={{
          color: `var(--${color})`,
          animation: "float 2s ease-in-out infinite",
        }}
        className="absolute -top-10 font-din-round bg-white font-bold rounded-[10px] py-2 px-4 border-2 border-[#E5E5E5] flex justify-center items-center whitespace-nowrap"
      >
        {content}
        <div className="absolute w-0 h-0 border-t-[10px] border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent top-full left-1/2 transform -translate-x-1/2"></div>
      </button>
    
  );
}

export default FloatingButton;
