import { MyContext } from "@/pages/_app";
import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "../../assets/images/onBoard/logo svg (1).png";
import Link from "next/link";
import step from "../../assets/images/_Step icon base.png";
import leftarrow from "../../assets/images/arrow-left.png";
import repeat from "../../assets/images/onBoard/repeat-02.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.png";
import greenCheckbox from "../../assets/images/onBoard/green-checkbox.png";
import whiteCheckbox from "../../assets/images/onBoard/white_checkbox.png";

function StepStyle() {
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState(onBoard?.style?.name);

  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if (onBoard.style) {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };

  const allStyles = [
    {
      name: "american style",
      img: "https://i.ibb.co/5KKcJF6/american-style.webp",
    },
    {
      name: "serene minimalism",
      img: "https://i.ibb.co/YRrwd0L/installation-art.webp",
    },
    {
      name: "minimalist",
      img: "https://i.ibb.co/19FMCxv/modern-style.webp",
    },
    {
      name: "vintage",
      img: "https://i.ibb.co/WyR75BL/minimalist-style.webp",
    },
    {
      name: "luxurious",
      img: "https://i.ibb.co/wB0P7BK/nordic-style.webp",
    },
  ];

  const firstStyle = allStyles[0];
  const styles = allStyles.slice(1);

  const handleInput = (i) => {
    console.log(i, "i");
    setSelectedOption(allStyles[i].name);
    let myOnBoard = onBoard;
    myOnBoard.style = allStyles[i];
    setOnBoard(myOnBoard);
  };
 

  return (
    <div className="h-full flex justify-center items-center ">
      <div className="h-full">
        <h3 className="hidden md:block text-[#271703] text-[48px] text-center font-[Gilroy-SemiBold] ">
          Select style
        </h3>
        <p className="hidden md:block text-[18px] text-[#9D5C0D] text-center mb-[18px]">
          Choose your preferred design style.
        </p>

        <div className="md:hidden mb-[16px] w-full px-0 flex gap-3 items-center py-[10px] bg-[#FEF7EF] justify-center">
          <Image className="" src={step} alt="" />
          <div className="">
            <h3 className=" text-[#271703] text-[16px] font-bold ">
              {" "}
              Select style
            </h3>
            <p className="  text-[12px] text-[#9D5C0D] ">
              Choose your preferred design style.
            </p>
          </div>
        </div>

        <div className="flex px-4 md:px-6 pt-6 pb-[30px] space-x-[16px] bg-[#F7F8F9] mx-4 md:mx-[35px] rounded-3xl mb-6">
          <Image
            className=" w-[40px] h-[40px] bg-[#9D5C0D] rounded-xl border-4  border-[#f1c28e]"
            src={logo}
            alt=""
          />
          <h2 className="hidden md:block text-[14px] md:text-[14px] font-[Gilroy-SemiBold] text-[#271703]">
            Your selection is crucial, as the final outcome hinges on the style
            you choose. Take your time and choose with care. Click{" "}
            <Link className="text-[#667412]" href="/">
              Show More Styles
            </Link>{" "}
            to discover other options. Your ideal style might be just a click
            away!
          </h2>
          <h2 className=" md:hidden text-[14px] md:text-[14px] font-[Gilroy-SemiBold] text-[#271703]">
            Your selection is crucial, as the final outcome hinges on the style
            you choose.
          </h2>
        </div>

        {/* Style here  */}
        <div className="sm:flex justify-between gap-3 px-3 h-full  ">
          <div className="hidden md:block  w-full p-3 sm:p-0" onClick={() => handleInput(0)}>
            <div className="relative cursor-pointer h-full">
              <img
                className={`w-full h-full rounded-lg ${
                  selectedOption == firstStyle.name &&
                  "border-[6px] border-[#C5DF2C]"
                }
                      `}
                src={firstStyle.img}
                alt={firstStyle.name}
              />
              <Image
                src={
                  selectedOption == firstStyle.name
                    ? greenCheckbox
                    : whiteCheckbox
                }
                className="absolute top-4 right-3"
              />
            </div>
          </div>
          
          {/* For Desktop  */}
          <div className="hidden w-full  md:flex flex-wrap justify-center">
            {styles.map((style, i) => {
              return (
                <div
                  className="w-1/2  sm:p-0"
                  key={style.name + i}
                  onClick={() => handleInput(i + 1)}
                >
                  <div className="relative cursor-pointer h-full p-1">
                    <img
                      className={`w-full h-full rounded-lg  ${
                        selectedOption == style.name &&
                        "border-[6px] border-[#C5DF2C]"
                      }
                      `}
                      src={style.img}
                      alt={style.name}
                    />
                    <Image
                      src={
                        selectedOption == style.name
                          ? greenCheckbox
                          : whiteCheckbox
                      }
                      className="absolute top-3 right-2 w-[32px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
           
          {/* For Mobile  */}
          <div className=" w-full  flex md:hidden flex-wrap justify-center">
            {allStyles.map((style, i) => {
              return (
                <div
                  className="w-1/2  sm:p-0"
                  key={style.name + i}
                  onClick={() => handleInput(i)}
                >
                  <div className="relative cursor-pointer h-full p-1">
                    <img
                      className={`w-full h-full rounded-lg  ${
                        selectedOption == style.name &&
                        "border-[6px] border-[#C5DF2C]"
                      }
                      `}
                      src={style.img}
                      alt={style.name}
                    />
                    <Image
                      src={
                        selectedOption == style.name
                          ? greenCheckbox
                          : whiteCheckbox
                      }
                      className="absolute top-3 right-2 w-[32px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* .........  next prev button........... */}

        <div className="  sticky bottom-[-2px] bg-white w-full px-5 py-3">
          {/* <div className="myBtn md:hidden" onClick={prevStep}>
            <Image
              className="border w-[55px] rounded-lg bg-gray-50 py-3 px-[14px]"
              src={leftarrow}
              alt=""
            />
          </div> */}
          <div className="hidden lg:flex w-full md:w-auto space-x-[18px] md:space-x-[40px] justify-end items-center">
            <div className=" hidden md:flex border rounded-lg py-3 px-[28px] items-center  space-x-[12px] cursor-pointer">
              <Image src={repeat} alt="more style" />
              <p className="text-[#323A46] text-[20px] font-[Gilroy-SemiBold]">
                Show More Styles
              </p>
            </div>

            <div
              onClick={nextStep}
              className="myBtn bg-[#9D5C0D] text-white flex rounded-[8px] py-[12px] md:py-3 px-[28px] items-center justify-center space-x-[12px] w-full  md:w-[192px] cursor-pointer"
            >
              <p className=" text-[20px] font-[Gilroy-SemiBold] whitespace-nowrap">
                Next Step
              </p>
              <Image className="mb-[-3px]" src={arrow} alt="" />
            </div>
          </div>
          <div className="flex justify-end mb-3">
            <div className=" lg:hidden flex border rounded-lg py-3 px-[32px] items-center justify-center  space-x-[12px] cursor-pointer">
              <Image src={repeat} alt="" />
              <p className="text-[#323A46] text-[20px] font-[Gilroy-SemiBold]">
                Show More Styles
              </p>
            </div>
          </div>

          {/* ........... for responsive......... */}
          <div className="lg:hidden flex w-full items-center justify-end space-x-[18px] ">
            <div className="myBtn " onClick={prevStep}>
              <Image
                className="border w-[55px] rounded-lg bg-gray-50 py-[12px] px-[14px]"
                src={leftarrow}
                alt="prev"
              />
            </div>
            <div
              onClick={nextStep}
              className="myBtn bg-[#9D5C0D] text-white flex rounded py-[10px] px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
            >
              <p className="text-[17px] md:text-[20px] font-[Gilroy-SemiBold]">
                Next Step
              </p>
              <Image className="mb-[-3px]" src={arrow} alt="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepStyle;
