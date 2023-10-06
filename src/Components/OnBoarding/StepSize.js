import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";
import logo from "../../assets/images/onBoard/logo svg (1).png";
import step from "../../assets/images/_Step icon base.png";
import Image from "next/image";
import leftarrow from "../../assets/images/arrow-left.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.png";

function StepSize() {
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState(onBoard.size);
  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if (onBoard.size) {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };
  const sizes = [
    "Below 20 Square Feet",
    "20 - 30 Square Feet",
    "More than 30 Feet",
  ];
  const handleInput = (selected) => {
    setSelectedOption(selected);
    let myOnBoard = onBoard;
    myOnBoard.size = selected;
    setOnBoard(myOnBoard);
  };
  return (
    <div className="w-full h-[100vh] ">
      <div className=" h-full  md:h-full w-full  md:pt-[10%]  ">
        <h3 className="hidden md:block text-[#271703] text-[48px] text-center font-[Gilroy-SemiBold] ">
          Select Room Size
        </h3>
        <p className="hidden md:block text-[18px] text-[#9D5C0D] text-center mb-[60px]">
          Please provide the size in square feet.
        </p>

        <div className="md:hidden mb-[16px] w-full px-1 flex  gap-3 items-center py-[10px] bg-[#FEF7EF] justify-center">
          <Image className="" src={step} alt="" />
          <div className="">
            <h3 className=" text-[#271703] text-[16px] font-bold ">
              {" "}
              Select Room Size
            </h3>
            <p className="  text-[12px] text-[#9D5C0D] ">
              Please provide the size in square feet.
            </p>
          </div>
        </div>

        <div className="rounded-[20px] px-4 md:px-6 pt-10 md:pt-6 pb-[64px] bg-[#F7F8F9] mx-4 md:mx-7">
          <div className="flex flex-col  md:flex-row md:justify-start gap-2 lg:gap-3 items-center md:items-start">
            <Image
              className=" w-[30px] h-[30px] bg-[#271703] rounded-lg "
              src={logo}
              alt=""
            />
            <p className="mb-[12px] text-[14px] md:text-[16px] font-[Gilroy-SemiBold] text-[#76450A]">
              Pick a Space! Choose from options.
            </p>
          </div>

          {/* .........  tab option type ........... */}

          <div className=" mt-6  flex justify-center md:justify-start flex-wrap gap-x-4 gap-y-6 rounded-md">
            {sizes.map((size, i) => {
              return (
                <div
                  onClick={() => handleInput(size)}
                  key={i}
                  className={`px-4 py-[6px] cursor-pointer text-[14px] md:text-[18px] font-bold rounded-md md:font-[Gilroy-SemiBold] shadow ${
                    selectedOption == size
                      ? "bg-[#271703] text-white"
                      : "text-[#271703] bg-white"
                  }`}
                >
                  {size}
                </div>
              );
            })}
          </div>
        </div>

        {/* <div>
        {
          sizes.map((size, i) => {
            return (
              <div key={i}>
              <input
                  id={size.replaceAll(" ", "")}
                  type="radio"
                  checked={selectedOption == size}
                  onChange={()=>handleInput(size)}
                />
                <label htmlFor={size.replaceAll(" ", "")}>{size}</label>
              </div>
            );
          })} 
      </div> */}

       
      </div>
       {/* .......  next prev btn.......... */}
       <div className=" sticky bottom-[-2px] bg-white w-full px-5 py-3">
          <div className="flex mx-4 md:mx-7 mb-5 items-center justify-center md:justify-end space-x-[18px] mt-14 md:mt-10">
            <div className="myBtn md:hidden" onClick={prevStep}>
              <Image
                className="border w-[55px] rounded-lg bg-gray-50 py-[13px] px-[14px]"
                src={leftarrow}
                alt=""
              />
            </div>
            <div
              onClick={nextStep}
              className="myBtn bg-[#9D5C0D] text-white flex rounded py-3 md:py-3 px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
            >
              <p className="text-[17px] md:text-[20px] font-[Gilroy-SemiBold]">
                Next Step
              </p>
              <Image className="mb-[-3px]" src={arrow} alt="" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default StepSize;
