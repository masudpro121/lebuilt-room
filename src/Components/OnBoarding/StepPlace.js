import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";
import logo from "../../assets/images/onBoard/ion_arrow-up.svg";
import repeat from "../../assets/images/onBoard/repeat-02.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.svg";
import Image from "next/image";
import step from "../../assets/images/_Step icon base.png";
import leftarrow from "../../assets/images/arrow-left.png";

function StepPlace() {
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState(onBoard.place);
  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if (onBoard.place) {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };
  const places = [
    "新房一代",
    "预售首页",
    "老房子改造",
    "商业空间",
    "公共场所",
  ];
  const handleInput = (selected) => {
    setSelectedOption(selected);
    let myOnBoard = onBoard;
    myOnBoard.place = selected;
    setOnBoard(myOnBoard);
    nextStep()
  };
  return (
    <div className="h-[90vh] md:h-[86vh] ">
      <div className="w-full h-full md:h-auto  ">
      <div className="h-full   md:pt-[10%]">
        <h3 className="hidden md:block text-[#271703] text-[48px] text-center font-semibold noto-sans ">
          选择地点
        </h3>
        <p className="hidden md:block text-[18px] text-[#9D5C0D] text-center mb-[60px] noto-sans">
          单击最能描述您所在位置的标签。
        </p>

        <div className="md:hidden mb-[16px] px-1 flex gap-3 items-center py-[10px] bg-[#FEF7EF] justify-center">
          <Image className="" src={step} alt="" />
          <div className="">
            <h3 className=" text-[#271703] text-[16px] font-semibold noto-sans ">
              {" "}
              选择地点
            </h3>
            <p className="  text-[12px] text-[#9D5C0D] noto-sans ">
              单击最能描述您所在位置的标签。
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-[20px] px-4 md:px-6 pt-6 pb-[64px]  bg-[#F7F8F9] mx-4 md:mx-7">
          <div className="flex justify-center md:justify-start space-x-[12px] gap-2 items-start">
            <Image
              className=" w-[30px] h-[30px] bg-[#271703] rounded-lg "
              src={logo}
              alt=""
            />
            <p className="mb-[12px] text-[14px] md:text-[16px] font-semibold noto-sans text-[#76450A]">
            选择一个空间！ 从选项中进行选择。
            </p>
          </div>

          {/* .........  tab option type ........... */}

          <div className=" mt-6 md:mt-10 flex justify-center md:justify-start flex-wrap gap-x-4 gap-y-6 rounded-md">
            {places.map((place, i) => {
              console.log(selectedOption == place, place);
              return (
                <div
                  onClick={() => handleInput(place)}
                  className={` px-4 py-[6px] cursor-pointer text-[14px] md:text-[18px] font-semibold noto-sans rounded-md  shadow ${
                    selectedOption == place
                      ? "bg-[#271703] text-white"
                      : "text-[#271703] bg-white"
                  }`}
                  key={i}
                >
                  {place}
                </div>
              );
            })}
          </div>
        </div>

        {/* .......  next prev btn.......... */}
        
      </div>
      <div className="sticky bottom-0 bg-white w-full px-5 pt-3 mt-4">
          <div className=" flex items-center justify-center md:justify-end  gap-3  ">
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
              <p className="text-[17px] md:text-[20px] font-semibold noto-sans">
              下一个
              </p>
             <Image className="" src={arrow} alt="" />
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default StepPlace;
