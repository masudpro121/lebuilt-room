import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import leftarrow from "../../assets/images/arrow-left.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.png";
import logo from "../../assets/images/onBoard/logo svg (1).png";
import step from "../../assets/images/_Step icon base.png";
import Image from "next/image";
import Link from "next/link";
import lineAuth from "@/data/lineauth";
function StepHaveSpace() {
  const { setOnBoardingStep, onBoardingStep, user } = useContext(MyContext);
  console.log(user, 'usr');
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const [selectedOption, setSelectedOption] = useState(onBoard.haveSpace);
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if (onBoard.haveSpace) {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };
  const handleInput = (selected) => {
    setSelectedOption(selected);
    let myOnBoard = onBoard;
    myOnBoard.haveSpace = selected;
    setOnBoard(myOnBoard);
    if (user.email) {
      if (selected == "yes") {
        nextStep();
      }
      if (selected == "no") {
        localStorage.setItem("onBoardingStep", onBoardingStep + 2);
        setOnBoardingStep(onBoardingStep + 2);
      }
    } else {
      window.open(lineAuth, "_self");
    }
  };
  return (
   
   <div className="h-[90vh] md:h-[86vh] flex items-center">
     <div className="w-full h-full  md:h-auto ">
      <div className="h-full  w-full   ">
        <h3 className=" text-[#271703] text-[25px] md:text-[48px] text-center font-[Gilroy-SemiBold] ">
          Do you have a space image?
        </h3>

        <div className="flex items-center px-4 md:px-6 py-6 space-x-[16px] bg-[#F7F8F9] mx-4 md:mx-[35px] rounded-3xl my-[30px]">
          <Image
            className=" w-[40px] h-[40px] bg-[#9D5C0D] rounded-xl border-4  border-[#f1c28e]"
            src={logo}
            alt=""
          />
          <h2 className=" text-[12px] md:text-[14px] font-[Gilroy-SemiBold] text-[#271703]">
            <Link href="/" className="text-[#667412]">
              {" "}
              Uploading an inspiring image is key! 🌟
            </Link>{" "}
            It guides our AI to tailor the design closely to your vision,
            ensuring each detail reflects your style and preferences. Every
            piece of inspiration counts!
          </h2>
        </div>

        <div className=" mx-auto flex justify-center">
          <div className=" mx-auto text-center">
            <div className=" gap-4 items-center flex  justify-center bg-[#F7F8F9] border border-[#B8C0CC] rounded-[12px] px-3 py-2">
              <button
                onClick={() => handleInput("yes")}
                className="px-10 sm:px-0 sm:w-[147px] h-[44px] border border-[#9D5C0D] text-[14px] text-center md:text-[16px] font-[Gilroy-SemiBold] text-[#9D5C0D] rounded-lg "
              >
                Yes
              </button>
              <button
                onClick={() => handleInput("no")}
                className="px-10 sm:px-0 sm:w-[147px] h-[44px] border border-[#9D5C0D] text-[14px] text-center md:text-[16px] font-[Gilroy-SemiBold] text-[#9D5C0D] rounded-lg "
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* .......  next prev btn.......... */}
      {/* <div className="sticky bottom-0 bg-white w-full px-5 md:mt-4">
        <div className="flex w-full gap-3  items-center justify-center md:justify-end ">
          <div className="myBtn md:hidden" onClick={prevStep}>
            <Image
              className="border w-[55px] rounded-lg bg-gray-50 py-[13px] px-[14px]"
              src={leftarrow}
              alt=""
            />
          </div>
          <div
            onClick={nextStep}
            className="myBtn bg-[#9D5C0D] text-white flex rounded py-[12px]  md:py-3 px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
          >
            <p className="text-[17px] md:text-[20px] font-[Gilroy-SemiBold]">
              Next
            </p>
            <Image className="mb-[-3px]" src={arrow} alt="" />
          </div>
        </div>
      </div> */}
    </div>
   </div>
  );
}

export default StepHaveSpace;
