import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="px-10 flex justify-center">
      <div className="w-full max-w-[700px] h-2 mt-5  bg-gray-200 rounded">
      <div
        className="h-full bg-[#9D5C0D] rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    </div>
  );
};

export default ProgressBar;
