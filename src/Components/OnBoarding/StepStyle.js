import { MyContext } from "@/pages/_app";
import Image from "next/image";
import React, { useContext, useState } from "react";
import logo from "../../assets/images/onBoard/ion_arrow-up.svg";
import Link from "next/link";
import step from "../../assets/images/_Step icon base.png";
import leftarrow from "../../assets/images/arrow-left.png";
import repeat from "../../assets/images/onBoard/repeat-02.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.svg";
import greenCheckbox from "../../assets/images/onBoard/green-checkbox.png";
import whiteCheckbox from "../../assets/images/onBoard/white_checkbox.png";
import styleImages from "@/data/styleImages";



const shuffle = (array) => { 
  return array.map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value); 
}; 

const s = shuffle(styleImages)

function StepStyle() {
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const [allStyles, setAllStyles] = useState(s.slice(0, 5));
  const [position, setPosition] = useState({ start: 5, end: 10 });
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

  const showMoreStyle = () => {
    console.log(position.start, "start");
    console.log(position.end, "end");
    console.log(s.length, "l");
    console.log(position.start + 5 < s.length);
    if (position.start + 5 < s.length) {
      setAllStyles(s.slice(position.start, position.end));
      setPosition({
        start: position.start + 5,
        end: position.end + 5,
      });
    } else {
      setAllStyles(s.slice(-5));
      setPosition({
        start: 0,
        end: 5,
      });
    }
  };

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
    <div className="h-[90vh] md:h-[86vh] mt-2">
      <div className="md:h-auto flex justify-center items-center ">
      <div className="">
        <h3 className="hidden md:block text-[#271703] text-[48px] text-center font-semibold noto-sans ">
        选择款式
        </h3>
        <p className="hidden md:block text-[18px] text-[#9D5C0D] text-center mb-[18px] noto-sans">
          选择您喜欢的设计风格。
        </p>

        <div className="md:hidden mb-[16px] w-full px-0 flex gap-3 items-center py-[10px] bg-[#FEF7EF] justify-center">
          <Image className="" src={step} alt="" />
          <div className="">
            <h3 className=" text-[#271703] text-[16px] font-semibold noto-sans ">
              {" "}
              选择款式
            </h3>
            <p className="  text-[12px] text-[#9D5C0D] noto-sans">
              选择您喜欢的设计风格。
            </p>
          </div>
        </div>

        <div className=" md:mx-10">
        <div className="mt-3 flex px-3 md:px-6  py-3 md:py-6 items-center gap-3 bg-[#F7F8F9] mx-3  md:mx-[35px] rounded-xl md:rounded-3xl mb-6">
          <Image
            className=" w-[40px] h-[40px] bg-[#9D5C0D] rounded-xl border-4  border-[#f1c28e]"
            src={logo}
            alt=""
          />
          <h2 className="hidden md:block text-[14px] md:text-[14px] font-bold noto-sans text-[#271703] leading-6 m-0">
          您的选择至关重要，因为最终结果取决于风格
             你选。 慢慢来，谨慎选择。 点击{" "}
            <Link className="text-[#667412]" href="/">
              显示更多款式
            </Link>{" "}
            发现其他选择。 您理想的风格可能只需点击一下
             离开！
          </h2>
          <h2 className=" md:hidden text-[14px] md:text-[14px] font-semibold noto-sans leading-5 text-[#271703] m-0">
          您的选择至关重要，因为最终结果取决于风格
             你选。
          </h2>
        </div>
        </div>

        {/* Style here  */}
        <div className="sm:flex justify-between gap-3 px-3 md:mx-3 h-full  ">
          <div
            className="hidden md:block  w-full p-3 sm:p-0"
            onClick={() => handleInput(0)}
          >
            <div className="relative cursor-pointer h-full min-h-[20vh] max-h-[68vh]">
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
          <div className="hidden w-full h-full md:flex flex-wrap justify-center">
            {styles.map((style, i) => {
              return (
                <div
                  className="w-1/2  sm:p-0"
                  key={style.name + i}
                  onClick={() => handleInput(i + 1)}
                >
                  <div className="relative cursor-pointer h-full min-h-[20vh] max-h-[35vh] p-1">
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
                      className="absolute top-0 right-0 w-[32px] m-4"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* For Mobile  */}
          <div className=" w-full h-full flex md:hidden flex-wrap justify-center">
            {allStyles.map((style, i) => {
              return (
                <div
                  className="w-1/2  sm:p-0"
                  key={style.name + i}
                  onClick={() => handleInput(i)}
                >
                  <div className="relative cursor-pointer h-full p-2 ">
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
                      className="absolute top-0 right-0 m-3 w-[32px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* .........  next prev button........... */}

        <div className="  sticky bottom-0 bg-white w-full px-5 md:pt-2 ">
          <div className="hidden lg:flex w-full md:w-auto space-x-[18px] md:space-x-[40px] justify-center md:justify-end items-center pb-2">
            <div
              onClick={showMoreStyle}
              className=" hidden md:flex border rounded-lg py-[12px] px-[28px] items-center gap-2 cursor-pointer"
            >
              <Image src={repeat} alt="more style" />
              <p className="text-[#323A46] text-[20px] font-semibold noto-sans">
              显示更多款式
              </p>
            </div>

            <div
              onClick={nextStep}
              className="myBtn bg-[#9D5C0D] text-white flex rounded-[8px] py-[12px] md:py-3 px-[28px] items-center justify-center space-x-[12px] w-full  md:w-[192px] cursor-pointer"
            >
              <p className=" text-[20px] font-semibold noto-sans whitespace-nowrap">
              下一个
              </p>
             <Image className="" src={arrow} alt="" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end mb-3">
            <div className=" lg:hidden flex border rounded-lg py-3 px-[32px] items-center justify-center  gap-2 cursor-pointer">
              <Image src={repeat} alt="" />
              <p className="text-[#323A46] text-[17px] font-semibold noto-sans">
              显示更多款式
              </p>
            </div>
          </div>

          {/* ........... for responsive......... */}
          <div className="lg:hidden flex w-full items-center justify-center md:justify-end gap-3">
            <div className="myBtn " onClick={prevStep}>
              <Image
                className="border w-[55px] rounded-lg bg-gray-50 py-[12px] px-[14px]"
                src={leftarrow}
                alt="prev"
              />
            </div>
            <div
              onClick={nextStep}
              className="myBtn bg-[#9D5C0D] text-white flex rounded py-[12px] px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
            >
              <p className="text-[17px] md:text-[20px] font-semibold noto-sans">
              下一个
              </p>
              <Image className="mb-[-3px]" src={arrow} alt="next" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default StepStyle;
