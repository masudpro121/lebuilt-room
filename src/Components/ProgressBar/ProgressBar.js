import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className=" flex justify-center">
      <div className="w-full h-2.5 mt-5  bg-gray-200 rounded">
      <div
        className="h-full bg-[#9D5C0D] rounded "
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    </div>
  );
};

export default ProgressBar;
