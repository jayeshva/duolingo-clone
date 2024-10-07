import React from 'react';
import Lottie from 'lottie-react'; 
import animationData from '../assests/animations/Animation - 1728106855086.json'; 

function DuolingoLoading() {
    return (
        <div className="flex justify-center items-center h-screen">
          <Lottie 
            animationData={animationData} 
            loop 
            autoplay 
            style={{ height: '320px', width: '300px' }} 
            speed={2}
          />
        </div>
    );
}

export default DuolingoLoading;
