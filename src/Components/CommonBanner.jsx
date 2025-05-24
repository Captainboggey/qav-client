import React from 'react';

const CommonBanner = ({header}) => {
    return (
        <div className="hero bg-base-200 h-[200px]">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-blue-500">{header}</h1>
     
    </div>
  </div>
</div>
    );
};

export default CommonBanner;