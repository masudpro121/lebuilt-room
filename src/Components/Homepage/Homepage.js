import React from "react";
import Logo from "@/assets/images/logo.png";
import LogoWhite from "@/assets/images/logo-white.png";
import Image from "next/image";
import styles from "./homepage.module.css";
import RoomImg from "@/assets/images/room/room.png";
import RoomImg1 from "@/assets/images/room/room1.jpg";
import RoomImg2 from "@/assets/images/room/room2.jpg";
import RoomImg3 from "@/assets/images/room/room3.jpg";
import FbImg from "@/assets/images/fb.png";
import InstaImg from "@/assets/images/insta.png";
import YtImg from "@/assets/images/yt.png";
import TiktokImg from "@/assets/images/tiktok.png";
import WhiteStarImg from "@/assets/images/whitestar.svg";
import StarImg from "@/assets/images/star.svg";
import {Noto_Sans} from '@next/font/google'
const nt = Noto_Sans({subsets:['latin'], weight:['400','500', '600', '700', '800']})

const Homepage = ({ nextStep }) => {
  const images = [
    RoomImg,
    RoomImg,
    RoomImg3,
    RoomImg2,
    RoomImg3,
    RoomImg1,
    RoomImg2,
    RoomImg3,
    RoomImg2,
    RoomImg1,
    RoomImg1,
    RoomImg2,
    RoomImg,
    RoomImg,
    RoomImg3,
    RoomImg2,
  ];
  const images1 = images.slice(0, 4);
  const images2 = images.slice(4, 8);
  const images3 = images.slice(8, 12);
  const images4 = images.slice(12, 16);

  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <div className="w-full h-20 sm:h-24 px-2 sm:px-8 py-4 bg-white border border-slate-100 justify-between items-center inline-flex">
          <div className="justify-start items-center  flex">
            <Image src={Logo} className=" w-[50px] sm:w-16 sm:h-16" />
            <div className="hidden sm:block text-stone-900 text-lg font-normal font-['Gilroy-Medium']">
              Create exclusive AI interior design in 30 seconds
            </div>
          </div>
          <div
            onClick={nextStep}
            className="cursor-pointer w-48 justify-end mr-2 items-center gap-6 flex"
          >
            <div className="sm:w-48 h-10 px-3 py-2 bg-yellow-700 rounded justify-center items-center gap-1.5 flex">
              <div className=" flex items-center gap-3 text-center text-slate-50 text-sm font-normal font-['Gilroy-SemiBold'] leading-none">
                <Image width={20} height={20} src={WhiteStarImg} />
                <div>Start generating </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Video  */}
      <div className="relative ">
        <video
          autoPlay
          loop
          muted
          className="h-[305px] sm:h-[506px] w-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 h-[305px] sm:h-[506px] flex items-center justify-center">
          <div className={`w-full h-full flex justify-center  bg-[#885216]/90 `}>
            <div className=" py-10  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch grow shrink basis-0 px-8 py-2.5  flex-col justify-center items-center gap-8 flex">
                <div className={"herobg self-stretch text-center leading-[2] sm:leading-[4] "+nt.className}>
                  <span className="text-orange-50 text-2xl sm:text-5xl font-semibold ">
                   讓{" "}
                  </span>
                  <span className="bg-gradient-to-r from-lime-100 to-lime-200 bg-clip-text text-transparent text-3xl sm:text-6xl font-bold ">
                  Al顛覆 {" "}
                  </span>
                  <span className="text-orange-50 text-2xl sm:text-5xl font-semibold ">
                  傳統的室內設計 <br/>
                    <span className="bg-gradient-to-r  from-lime-100 to-lime-200 bg-clip-text text-3xl sm:text-6xl text-transparent font-bold">
                    悠孚AI
                    </span>{" "}
                    重新定義設計新標準
                  </span>
                </div>
                <div
                  onClick={nextStep}
                  className="cursor-pointer px-7 sm:px-20 py-4 sm:py-5 bg-orange-50 rounded-lg shadow justify-center items-center gap-3 flex"
                >
                  <Image width={30} height={30} src={StarImg} />
                  <div className="text-yellow-950 text-lg font-normal font-['Gilroy-SemiBold'] leading-[21.6px] ">
                    Generate your designs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Old Version Show Images  */}
      {/* <div className="">
        <div className="w-full mt-7 px-5 bg-white justify-center items-start gap-2.5 inline-flex flex-wrap">
          {images.map((image, key) => {
            return (
              <Image
                key={"image" + key}
                className="w-80 h-80  grow shrink basis-0"
                src={image}
              />
            );
          })}
        </div>
        <div className=" h-20 relative bottom-20 bg-gradient-to-t from-slate-100 to-transparent "></div>
      </div> */}

      {/* New Version Show Images  */}
      <div className="mt-0 ">
        <div className=" h-8 relative top-8 bg-gray-50"></div>
        <div className="hidden absolute lg:flex justify-center items-start right-0 mt-7 h-[300px] w-3/12 bg-gray-50 ">
          <div className="py-10 pl-10 shadow-inner bg-white rounded-lg mt-2  w-full xl:w-[90%]">
            <h3 className="font-['Gilroy-SemiBold'] text-2xl ">
              Ready to Design?
            </h3>
            <p className=" text-neutral-500 mt-4 text-[16px]">
              Start your own unique <br />
              AI-generated design journey now!
            </p>
            <button onClick={nextStep} className=" bg-[#9D5C0D] font-['Gilroy-SemiBold'] text-white  py-4 rounded-md tracking-wider mt-5 w-[95%] xl:w-[290px]">
              Start generating
            </button>
          </div>
        </div>

        <div className="px-3 grid sm:grid-cols-2  lg:grid-cols-4 gap-4 grid-flow-dense">
          <div className="grid gap-4 sm:gap-0">
            {images1.map((image, key) => {
              return (
                <Image
                  key={"images1" + key}
                  className="h-[300px] w-full rounded-lg"
                  src={image}
                />
              );
            })}
          </div>
          <div className="grid gap-4 sm:mt-7">
            {images2.map((image, key) => {
              return (
                <Image
                  key={"images2" + key}
                  className="h-[300px] w-full rounded-lg"
                  src={image}
                />
              );
            })}
          </div>
          <div className="grid gap-4 sm:gap-0">
            {images3.map((image, key) => {
              return (
                <Image
                  key={"images3" + key}
                  className="h-[300px] w-full rounded-lg"
                  src={image}
                />
              );
            })}
          </div>
          <div className="grid gap-4 sm:mt-7">
            {images4.map((image, key) => {
              return (
                <Image
                  key={"images4" + key}
                  className="h-[300px] w-full rounded-lg"
                  src={image}
                />
              );
            })}
          </div>
        </div>
        <div className=" h-20 relative bottom-20 bg-gradient-to-t from-slate-100 to-transparent "></div>
      </div>

      {/* Design Like this  */}
      <div className="flex justify-center px-5 pb-10 -mt-10">
        <div className="flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-6 flex">
            <div className="flex-col justify-start items-center gap-3 flex">
              <div className="text-center text-stone-900 text-3xl font-normal font-['Gilroy-SemiBold'] leading-loose">
                Design Like This?
              </div>
              <div className="text-center text-slate-500 text-base font-normal font-['Gilroy-Regular'] leading-tight">
                Empower your creativity with our AI. <br />
                Create images just as stunning or even surpass what you've seen!
              </div>
            </div>
            <div
              onClick={nextStep}
              className="h-20 justify-start items-start inline-flex cursor-pointer"
            >
              <div className="px-7 sm:px-20 py-4 sm:py-5 bg-yellow-700 rounded-lg shadow justify-center items-center gap-3 flex ">
                <Image width={20} height={20} src={WhiteStarImg} />
                <div className="  text-white text-lg font-semibold font-['Inter'] leading-7">
                  Generate your designs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="w-full pt-5 bg-[#271703] flex-col justify-between items-start inline-flex">
        <div className="self-stretch px-3 sm:px-8 justify-between sm:justify-start items-start gap-5 inline-flex flex-wrap">
          <div className=" flex gap-5 items-center">
            <div className=" flex items-center gap-2 text-orange-50 text-xl font-bold font-['Plus Jakarta Sans']">
              <Image src={LogoWhite} className="w-[50px] h-[50px]" />
            </div>
            <div className=" text-orange-50 text-sm font-normal font-['Gilroy-Regular'] leading-7">
              <div className="sm:hidden text-right sm:text-left">
                Where Each Corner Reflects the Future of Living
              </div>
              <div className="hidden sm:block text-right sm:text-left">
                Where Each Corner Reflects the <br /> Future of Living
              </div>
            </div>
          </div>
          <div className="grow   pl-6 flex-col justify-start items-end gap-2 inline-flex mt-10 sm:mt-0 mb-3 pr-2 sm:pr-0">
            <div className="text-orange-50 text-lg font-normal font-['Gilroy-SemiBold'] leading-snug">
              Connect with us
            </div>
            <div className="flex gap-3">
              <Image className="cursor-pointer" src={FbImg} />
              <Image className="cursor-pointer" src={InstaImg} />
              <Image className="cursor-pointer" src={YtImg} />
              <Image className="cursor-pointer" src={TiktokImg} />
            </div>
          </div>
        </div>
        <div className="mb-0 sm:mt-20 py-5 px-8 bg-stone-950 justify-start items-center gap-5 block w-full sm:inline-flex">
          <div className="py-2 text-orange-50 text-sm font-normal font-['Gilroy-Regular'] leading-none">
            Copyright 2023 - Ufoliving
          </div>
          <div className="py-2 cursor-pointer text-orange-50 text-sm font-normal font-['Gilroy-Regular'] leading-none">
            Terms & policies
          </div>
          <div className="py-2 cursor-pointer text-orange-50 text-sm font-normal font-['Gilroy-Regular'] leading-none">
            Privacy & policies
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
