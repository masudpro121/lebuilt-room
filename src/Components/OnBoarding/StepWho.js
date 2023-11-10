import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";
import home from "../../assets/images/onBoard/ion_home.png";
import land from "../../assets/images/onBoard/mdi_land-fields.png";
import business from "../../assets/images/onBoard/ic_round-business-center.png";
import brush from "../../assets/images/onBoard/ri_brush-fill.png";
import real from "../../assets/images/onBoard/ic_round-real-estate-agent.png";
import other from "../../assets/images/onBoard/ic_baseline-other-houses.png";
import Image from "next/image";
import arrow from "../../assets/images/onBoard/ion_arrow-up.svg";
import leftarrow from "../../assets/images/arrow-left.png";
import step from "../../assets/images/_Step icon base.png";
import checkboxImg from "../../assets/images/onBoard/checkbox.png";
import whiteCheckbox from "../../assets/images/onBoard/white_checkbox.png";

function StepWho() {
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};

  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };

  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState(onBoard.who);

  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if (onBoard.who) {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };
  const iam = [
    {
      title: "购房者",
      img: home,
    },
    {
      title: "房东",
      img: land,
    },
    {
      title: "租户",
      img: business,
    },
    {
      title: "业主",
      img: business,
    },
    {
      title: "室内设计师",
      img: brush,
    },
    {
      title: "房地产中介",
      img: real,
    },
    {
      title: "其他",
      img: other,
    },
  ];

  const handleInput = (selected) => {
    setSelectedOption(selected);
    let myOnBoard = onBoard;
    myOnBoard.who = selected;
    setOnBoard(myOnBoard);
    nextStep()
  };
  return (
    <div className="h-[90vh] md:h-[86vh]">
      <div className="w-full  md:h-full md:w-auto">
      <div className="w-full md:w-auto  mx-auto flex justify-center items-center ">
        <div className="h-full w-full md:w-auto">
          <h3 className="hidden md:block text-[#271703] text-[48px] text-center noto-sans font-semibold ">
          我是
          </h3>
          <p className=" hidden md:block text-[18px] text-[#9D5C0D] text-center mb-[30px] noto-sans">
            告诉我们一些关于你自己的事。
          </p>

          <div className=" md:hidden mb-[16px] w-full px-0 flex items-center gap-3  py-[10px] bg-[#FEF7EF] justify-center">
            <Image className="" src={step} alt="" />
            <div className="">
              <h3 className=" text-[#271703] text-[16px]  noto-sans font-bold">我是</h3>
              <p className="  text-[12px] text-[#9D5C0D] noto-sans ">
                告诉我们一些关于你自己的事。
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 px-3 mt-3">
            {iam.map((am, i) => {
              return (
                <div
                  onClick={() => handleInput(am.title)}
                  className={`w-full lg:w-[492px] pl-4 pr-6 py-3  flex justify-between items-center space-x-[4px] rounded-xl ${selectedOption == am.title? ' border-[3px] border-[#FBE8D0]': '  border-[2px]' } cursor-pointer`}
                  key={i}
                >
                  <div className="flex items-center space-x-[24px]">
                    <Image
                      width="32"
                      className="p-[6px] md:p-[10px] w-[35px] h-[35px] md:w-[45px] md:h-[45px] rounded-xl bg-[#FFF3D0]"
                      src={am.img}
                      alt=""
                    />
                    <label
                      className=" text-[16px] sm:text-[18px] text-[#271703] noto-sans font-bold"
                      htmlFor={am.title.replaceAll(" ", "")}
                    >
                      {am.title}
                    </label>
                  </div>
                  {/* <input
                    className={`border border-gray-200 cursor-pointer bg-gray-100 checked:border-4 rounded-full checked:border-[#FEDF89] w-7 h-7 appearance-none checked:bg-[#9D5C0D]`}
                    id={am.title.replaceAll(" ", "")}
                    type="radio"
                    checked={selectedOption === am.title}
                    onChange={() => handleInput(am.title)}
                  /> */}
                  {
                    selectedOption == am.title ?
                    <Image
                      width="32"
                      className="w-[35px]"
                      src={checkboxImg}
                      alt=""
                    />
                    :<Image
                      width="32"
                      className=""
                      src={whiteCheckbox}
                      alt=""
                    />
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* .......  next prev btn.......... */}
      <div className="flex items-center justify-center md:justify-end space-x-[18px] pr-6 md:pr-[60px]  sticky bottom-0 bg-white w-full px-5 pt-3 sm:pb-3">
        <div className="myBtn md:hidden" onClick={prevStep}>
          <Image
            className="border w-[55px] rounded-lg bg-gray-50 py-[13px] px-[14px]"
            src={leftarrow}
            alt=""
          />
        </div>
        <div
          onClick={nextStep}
          className="myBtn bg-[#9D5C0D] text-white flex rounded py-[12px] md:py-3 px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
        >
          <p className="text-[17px] md:text-[20px] font-semibold noto-sans">下一个</p>
         <Image className="" src={arrow} alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default StepWho;
