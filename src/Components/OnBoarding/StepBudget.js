import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";
import leftarrow from "../../assets/images/arrow-left.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.png";
import logo from "../../assets/images/onBoard/logo svg (1).png";
import step from "../../assets/images/_Step icon base.png";
import Image from "next/image";

function StepBudget() {
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [budget, setBudget] = useState(onBoard.budget);
  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if (budget || budget == 0) {
      let modifyOnboard = onBoard;
      modifyOnboard.budget = budget;
      setOnBoard(modifyOnboard);
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };
  return (
    // <div>
    //   <h3 className="text-2xl font-[Gilroy-SemiBold] mb-5 ml-10">Enter your Budget</h3>
    //   <div>
    //     <input onChange={(e)=>setBudget(Number(e.target.value))} value={budget} type="number" placeholder="Tell me your maximum budget.." className="w-80 border-2" />
    //   </div>
    //   <div className="flex gap-5 mt-5">
    //     <button className="myBtn" onClick={prevStep}>
    //       Prev Step
    //     </button>
    //     <button className="myBtn" onClick={nextStep}>
    //       Next Step
    //     </button>
    //   </div>
    // </div>
    <div className="w-full h-full flex ">
      <div className="  md:h-full w-full  md:pt-[12%]  ">
        <h3 className="hidden md:block text-[#271703] text-[48px] text-center font-[Gilroy-SemiBold] ">
          Enter Your Budget
        </h3>
        <p className="hidden md:block text-[18px] text-[#9D5C0D] text-center mb-[60px]">
          Enter the amount you plan to invest
        </p>

        <div className="md:hidden mb-[16px] w-full px-1 flex  gap-3 items-center py-[10px] bg-[#FEF7EF] justify-center">
          <Image className="" src={step} alt="" />
          <div className="">
            <h3 className=" text-[#271703] text-[16px] font-bold ">
              {" "}
              Enter Your Budget
            </h3>
            <p className="  text-[12px] text-[#9D5C0D] ">
              Enter the amount you plan to invest
            </p>
          </div>
        </div>

        <div className="rounded-[20px] flex flex-col items-center md:items-start px-2 md:px-4  pt-6 pb-5 md:pb-[64px]  bg-[#F7F8F9] mx-4 md:mx-7">
          <p className="mb-[12px] text-[14px] text-center px-2 md:text-left md:text-[16px] font-[Gilroy-SemiBold] md:font-[Gilroy-SemiBold] text-[#76450A] ">
            Pick a Room Type or Craft Your Own! Choose from options, or type in
            your unique space.
          </p>

          {/* .........  input field ........... */}

          <div className="flex bg-white rounded-[10px] w-full md:w-[96%] space-x-[10px] md:space-x-[16px] px-3 py-2  md:py-3 border border-[#D0D5DD] mb-5 shadow-lg md:shadow">
            <Image
              width="50"
              className="p-[6px] rounded-[10px] bg-[#271703] w-[35px] h-[35px]"
              src={logo}
              alt="logo"
            />
            <input
              className="border-0 outline-none w-full "
              onChange={(e) => setBudget(Number(e.target.value))}
              value={budget}
              type="number"
              placeholder="Tell me your maximum budget.."
            />
          </div>
        </div>

        {/* .......  next prev btn.......... */}
        <div className="flex mx-4 md:mx-7  mb-5 items-center justify-end space-x-[18px] mt-20 md:mt-10">
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

export default StepBudget;
