import React, { useState } from 'react';

const Tiles = ({ color,url }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  return (
    <div
      style={{
        backgroundColor: `var(--${color})`,
        boxShadow: isActive ? 'none' : `0 7px 0 var(--${color}-shadow)`
      }}
      onMouseDown={handleMouseDown} 
      onMouseUp={handleMouseUp} 
      onMouseLeave={handleMouseUp}
      className="w-16 h-16 rounded-full flex justify-center items-center text-white active:translate-y-[5px] transition"
    >
      <img
        draggable="false"
        className="w-11 h-8"
        src={url}
      />
    </div>
  );
};

export default Tiles;
