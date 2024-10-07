import React from 'react'
import DuolingoLoading from '../animations/DuolingoLoading';

function LoadingState(Component) {
    return (props) => {
        console.log(props)
        if (props?.error) return <div className="text-center text-red-500 p-4 bg-gray-100">Error: {props?.error}</div>;
        if (props?.isLoading)
          return (
            <DuolingoLoading/>
          );
        if (!props.data?.length) return <div>No data</div>;
        return <Component {...props} />;
      };
}

export default LoadingState