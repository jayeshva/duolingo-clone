import React from "react";

function Flag({ viewBox, index, flagname }) {
  const spriteUrl =
    "https://d35aaqx5ub95lt.cloudfront.net/vendor/87938207afff1598611ba626a8c4827c.svg";

  return (
    <div key={index} className="flex items-center space-x-2">
      <svg
        viewBox={viewBox}
        className="w-[36px] h-[28.98px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image xlinkHref={spriteUrl} height="3168" width="82" />
      </svg>
      <span className="text-[#777777] font-medium font-din-round">
        {flagname}
      </span>
    </div>
  );
}

export default Flag;
