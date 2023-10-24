import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/onBoard/logo svg.png";
import userIcon from "@/assets/images/onBoard/user-01.png";
import downArrow from "@/assets/images/onBoard/downArrow.png";
const Header = () => {
  return (
    <>
    <div className="hidden md:block border border-[#F1F5F9] bg-white w-full px-10 ">
      <div className=" custom-container px-8 xl:px-0  flex justify-between  ">
        <div className="left flex items-center space-x-[60px]">
          <Image src={logo} alt="" />
          <div className="flex items-center space-x-[20px]">
            <Link href="/history" className="no-underline">
              <h2 className="text-[16px] text-[#475569] cursor-pointer  ">
                History
              </h2>
            </Link>
            <Link href="/collection" className="no-underline">
              <h2 className="text-[16px] text-[#475569] cursor-pointer  ">
                Collection
              </h2>
            </Link>
          </div>
        </div>
        <div className="right flex items-center space-x-[4px]">
          <Image src={userIcon} alt="" />
          <Image src={downArrow} alt="" />
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center md:hidden">
      <Link href="/"><Image src={logo} alt="" /></Link>
      <Image src={downArrow}  alt="" />
    </div>
    </>
  );
};

export default Header;
