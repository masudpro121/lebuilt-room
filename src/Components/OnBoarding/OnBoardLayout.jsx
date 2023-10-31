import Image from "next/image";
import logo from "../../assets/images/onBoard/logo svg.png";
import userIcon from "../../assets/images/onBoard/user-01.png";
import downArrow from "../../assets/images/onBoard/Icon.png";
import menuIconBrown from "../../assets/images/onBoard/Connector wrap (3).png";
import menuIconGreen from "../../assets/images/onBoard/Connector wrap (2).png";
import smdownArrow from "../../assets/images/chevron-down.png";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/pages/_app";
import Header from "../Header/Header";

const OnBoardLayout = (props) => {
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [onBoard, setOnBoard] = useState({});
  useEffect(() => {
    const ob = JSON.parse(localStorage.getItem("onBoard")) || {};
    setOnBoard(ob);
  }, []);

  const leftMenu = [
    {
      title: "I am",
      description: "Tell us a bit about yourself.",
      step: 1,
      target: "who",
    },
    {
      title: "Select Style",
      description: "Choose your preferred design style.",
      step: 2,
      target: "style",
    },
    {
      title: "Select room type",
      description: "Pick or type the room type you're envisioning",
      step: 3,
      target: "type",
    },
    {
      title: "Select place",
      // description: "Select best describes place",
      description: "Click on a label that best describes your location.",
      step: 4,
      target: "place",
    },
    {
      title: "Select Room Size",
      description: "Upload your room image",
      step: 5,
      target: "size",
    },
    {
      title: "Enter Your Budget",
      description: "Please provide your name and email",
      step: 6,
      target: "budget",
    },
    {
      title: "Choose ",
      description: "Please provide your name and email",
      step: 7,
      target: "haveSpace",
    },
    {
      title: "Upload File",
      description: "Please provide your name and email",
      step: 8,
      target: "",
    },
  ];
  const handleStep = (st) => {
    if (onBoard.who) {
      localStorage.setItem("onBoardingStep", st);
      setOnBoardingStep(st);
    }
  };
  return (
    <div className="md:bg-[#EAECF0]">
      {/* //.......... header............. */}
      <div className="border border-[#F1F5F9] bg-white w-full ">
        <Header />
        {/* <div className="flex md:hidden justify-center space-x-1">
          <Image src={logo} alt="" />
          <Image src={smdownArrow} alt="" />
        </div> */}
      </div>

      {/* //.......... sidebar............. */}

      <div className="md:p-6">
        <div className="custom-container md:py-3 flex flex-col md:flex-row gap-[10px]  bg-white rounded">
          <div className="hidden md:block left py-6 pl-3 pr-[10px] w-[380px] border-r border-[#D0D5DD]">
            <div className="flex  flex-col space-y-[10px]">
              {leftMenu.map((item, index) => {
                if (onBoard[item.target] || onBoardingStep == item.step) {
                  return (
                    <div
                      onClick={() => handleStep(item.step)}
                      key={index}
                      className={`p-2  rounded-tr-lg rounded-br-lg flex gap-3 items-center  ${
                        item.step == onBoardingStep &&
                        "border-l-2  border-[#9D5C0D] bg-[#F7F8F9]"
                      } cursor-pointer`}
                    >
                      <div className="w-10  flex items-center justify-start">
                        <Image
                          className=""
                          src={
                            item.step == onBoardingStep
                              ? menuIconBrown
                              : menuIconGreen
                          }
                          alt=""
                        />
                      </div>
                      <div className="w-full">
                        <h2 className="text-[16px] text-[#344054] font-[Gilroy-SemiBold]">
                          {item.title}
                        </h2>
                        <p
                          className={`text-[14px]  ${
                            onBoard[item.target] &&
                            !(onBoardingStep == item.step)
                              ? "text-[#98AE1A]"
                              : " text-[#9D5C0D]"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="right md:border-3  md:border-[3px] w-full md:mr-4 md:border-[#FBE8D0] pt-2 rounded-lg  overflow-y-scroll  ">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardLayout;
