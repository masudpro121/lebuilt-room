import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.webp";
import userIcon from "@/assets/images/onBoard/user-01.png";
import downArrow from "@/assets/images/onBoard/downArrow.png";
import { useRouter } from "next/router";
import { MyContext } from "@/pages/_app";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setOnBoardingStep, isLoggedIn } = useContext(MyContext);
  const router = useRouter();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const goHome = () => {
    console.log("gohome");
    localStorage.setItem("onBoardingStep", 0);
    setOnBoardingStep(0);
    router.push("/");
  };
    return <>
      <div className="hidden md:block border border-[#F1F5F9] bg-white w-full px-10 ">
        <div className=" custom-container px-8 xl:px-0  flex justify-between  ">
          <div className="left flex items-center space-x-[60px]">
            <Image
              className="cursor-pointer h-[64px] w-[64px]"
              onClick={goHome}
              src={logo}
              alt=""
            />
            <div className="flex items-center space-x-[20px]">
              <Link href="/history" className="no-underline">
                <h2 className="text-[16px] noto-sans font-semibold text-[#475569] cursor-pointer  ">
                历史
                </h2>
              </Link>
              <Link href="/collection" className="no-underline">
                <h2 className="text-[16px] noto-sans font-semibold text-[#475569] cursor-pointer  ">
                收藏
                </h2>
              </Link>
            </div>
          </div>
          {/* <div className="right flex items-center space-x-[4px]">
          <Image src={userIcon} alt="" />
          <Image src={downArrow} alt="" />
        </div> */}
        </div>
      </div>

      <div className="flex justify-center items-center md:hidden">
        <div onClick={goHome}>
          <Image
            className="cursor-pointer h-[48px] w-[48px]"
            src={logo}
            alt=""
          />
        </div>

        <div className="relative">
          <Image
            className="cursor-pointer h-[24px] w-[24px]"
            onClick={toggleDropdown}
            src={downArrow}
            alt=""
          />

          {isOpen && (
            <div className="absolute right-0  mt-2  bg-white  rounded shadow-lg">
              <ul className="m-0 p-0 ">
                <Link className="no-underline  text-black " href="/history">
                  <li className="px-4 py-1.5">History</li>
                </Link>
                <Link className="no-underline text-black " href="/collection">
                  <li className="px-4 py-1.5">Collection</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
};

export default Header;
