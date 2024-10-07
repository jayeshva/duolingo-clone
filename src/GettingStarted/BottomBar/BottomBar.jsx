import React, { useRef } from "react";
import Flag from "./Flag";

const flags = [
  { name: "English", viewBox: "0 0 82 66" },
  { name: "Spanish", viewBox: "0 66 82 66" },
  { name: "French", viewBox: "0 132 82 66" },
  { name: "German", viewBox: "0 198 82 66" },
  { name: "Japanese", viewBox: "0 264 82 66" },
  { name: "Italian", viewBox: "0 330 82 66" },
  { name: "Korean", viewBox: "0 396 82 66" },
  { name: "Chinese", viewBox: "0 462 82 66" },
  { name: "Portuguese", viewBox: "0 528 82 66" },
  { name: "Dutch", viewBox: "0 594 82 66" },
  { name: "Turkish", viewBox: "0 660 82 66" },
  { name: "Danish", viewBox: "0 726 82 66" },
  { name: "Swedish", viewBox: "0 792 82 66" },
];


function BottomBar() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-center justify-center border-t-2 border-b-2 border-gray-300 h-[80px] px-10">
      <nav className="flex items-center max-w-[1036px] w-full">
        <button
          onClick={scrollLeft}
          className="w-6 h-6 text-gray-400 cursor-pointer"
        >
          <svg fill="none" viewBox="0 0 16 16">
            <path
              d="M10 2L4 8L10 14"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex items-center overflow-x-scroll no-scrollbar space-x-6 h-[74px] mx-4"
        >
          {flags.map((flag, index) => (
           <Flag flagname={flag.name} viewBox={flag.viewBox} index={index}/>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="w-6 h-6 text-gray-400 cursor-pointer"
        >
          <svg fill="none" viewBox="0 0 16 16">
            <path
              d="M6 2L12 8L6 14"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default BottomBar;
