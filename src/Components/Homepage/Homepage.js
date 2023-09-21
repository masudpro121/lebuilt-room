import React from "react";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import styles from "./homepage.module.css";
import RoomImg from "@/assets/images/room/room.png";
import RoomImg1 from "@/assets/images/room/room1.jpg";
import RoomImg2 from "@/assets/images/room/room2.jpg";
import RoomImg3 from "@/assets/images/room/room3.jpg";
import FbImg from "@/assets/images/fb.png"
import InstaImg from "@/assets/images/insta.png"
import YtImg from "@/assets/images/yt.png"
import TiktokImg from "@/assets/images/tiktok.png"
import WhiteStarImg from "@/assets/images/whitestar.svg"
import StarImg from "@/assets/images/star.svg"
const Homepage = ({ nextStep }) => {
  const images = [
    RoomImg,
    RoomImg1,
    RoomImg2,
    RoomImg3,
    RoomImg,
    RoomImg1,
    RoomImg2,
    RoomImg3,
    RoomImg,
    RoomImg1,
    RoomImg2,
    RoomImg3,
  ];
  return (
    <div className="">
      <div>
        <div className="w-full h-24 px-2 sm:px-8 py-4 bg-white border border-slate-100 justify-between items-center inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <Image src={Logo} className="w-16 h-16" />
            <div className="hidden sm:block text-stone-900 text-lg font-normal font-['Gilroy-Medium']">
              Create exclusive AI interior design in 30 seconds
            </div>
            <div className=" sm:hidden text-black text-2xl font-bold font-['Plus Jakarta Sans']">
              <div>Ufoliving</div>
            </div>
          </div>
          <div onClick={nextStep} className="cursor-pointer w-48 justify-center items-center gap-6 flex">
            <div className="sm:w-48 h-10 px-3 py-2 bg-yellow-700 rounded justify-center items-center gap-1.5 flex">
              <div
                className="  text-center text-slate-50 text-sm font-normal font-['Gilroy-SemiBold'] leading-none"
              >
                Start generating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section  */}
      <div className={`w-full flex justify-center ${styles.herobg}`}>
        <div className=" h-96 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="self-stretch grow shrink basis-0 px-8 py-2.5 bg-black bg-opacity-40 flex-col justify-center items-center gap-8 flex">
            <div className="herobg self-stretch text-center">
              <span className="text-orange-50 text-2xl sm:text-5xl font-normal font-['Gilroy-SemiBold']">
                Elevate your space with{" "}
              </span>
              <span className="text-lime-100 text-3xl sm:text-6xl font-normal font-['Gilroy-ExtraBoldItalic']">
                ufoliving <br />
              </span>
              <span className="text-orange-50 text-2xl sm:text-5xl font-normal font-['Gilroy-SemiBold']">
                the AI tool that reshapes <br />
                interior design paradigms.
              </span>
            </div>
            <div onClick={nextStep} className="cursor-pointer  px-7 py-4 bg-orange-50 rounded-lg shadow justify-center items-center gap-3 flex">
            <Image width={30} height={30} src={StarImg} />
              <div className="text-yellow-950 text-lg font-normal font-['Gilroy-SemiBold'] leading-snug">
                Generate your designs
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show Images  */}
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

      <div className="flex justify-center mt-5 px-5">
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
            <div onClick={nextStep} className="h-20 justify-start items-start inline-flex cursor-pointer">
              <div className="px-7 py-4 bg-yellow-700 rounded-lg shadow justify-center items-center gap-3 flex ">
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
      <div className="w-full pt-5 bg-stone-900 flex-col justify-between items-start inline-flex">
        <div className="self-stretch px-2 sm:px-8 justify-between sm:justify-start items-start gap-5 inline-flex flex-wrap">
          <div className=" flex gap-10 items-center">
            <div className=" flex items-center gap-2 text-orange-50 text-xl font-bold font-['Plus Jakarta Sans']">
              <Image src={Logo} className="w-7 h-6" />
              <div>Ufoliving</div>
            </div>
            <div className=" text-orange-50 text-sm font-normal font-['Gilroy-Regular'] leading-7">
              <div className="text-right sm:text-left">Where Each Corner Reflects the Future of Living</div>
            </div>
          </div>
          <div className="grow   pl-6 flex-col justify-start items-end gap-2 inline-flex mt-10 sm:mt-0 mb-3 pr-2 sm:pr-0">
            <div className="text-orange-50 text-lg font-normal font-['Gilroy-SemiBold'] leading-snug">
              Connect with us
            </div>
            <div className="flex gap-3">
              <Image className="cursor-pointer" src={FbImg}  />
              <Image className="cursor-pointer" src={InstaImg}  />
              <Image className="cursor-pointer" src={YtImg}  />
              <Image className="cursor-pointer" src={TiktokImg}  />
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
