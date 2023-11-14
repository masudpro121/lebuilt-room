import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.webp";
import LogoWhite from "@/assets/images/logo_white.svg";
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
import { Noto_Sans } from "@next/font/google";
import styleImages from "@/data/styleImages";

const Homepage = ({ nextStep }) => {
  const [images, setImages] = useState([]);

  // const images = [
  //   RoomImg,
  //   RoomImg,
  //   RoomImg3,
  //   RoomImg2,
  //   RoomImg3,
  //   RoomImg1,
  //   RoomImg2,
  //   RoomImg3,
  //   RoomImg2,
  //   RoomImg1,
  //   RoomImg1,
  //   RoomImg2,
  //   RoomImg,
  //   RoomImg,
  //   RoomImg3,
  //   RoomImg2,
  // ];

  const myImages = styleImages.slice(0, 20);

  return (
    <div className="">
      <div className="sticky top-0 z-50">
        <div className="w-full h-20 sm:h-24 px-2 sm:px-8 py-4 bg-white border border-slate-100 justify-between items-center inline-flex">
          <div className="justify-start items-center  flex">
            <Image src={Logo} className=" w-[50px] sm:w-16 sm:h-16" />
            <div className="hidden sm:block  text-stone-900 text-lg font-medium noto-sans">
            30秒打造专属AI室内设计
            </div>
          </div>
          <div
            onClick={nextStep}
            className="cursor-pointer w-48 justify-end mr-2 items-center gap-6 flex"
          >
            <div className="sm:w-48 h-10 px-3 py-2 bg-yellow-700 rounded justify-center items-center gap-1.5 flex">
              <div className=" flex items-center gap-3 text-center text-slate-50 text-sm font-semibold noto-sans leading-none">
                <Image width={20} height={20} src={WhiteStarImg} />
                <div>开始生成 </div>
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
          <div className={`w-full h-full flex justify-center  bg-[#000000f6] `}>
            <div className=" py-10  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="self-stretch grow shrink basis-0 px-8 py-2.5  flex-col justify-center items-center gap-8 flex">
                <div
                  className={
                    "herobg self-stretch text-center leading-[2] sm:leading-[4] noto-sans"
                  }
                >
                  <span className="text-orange-50 text-2xl sm:text-5xl noto-sans ">
                    靠<span className="font-extrabold"> 感覺 </span>
                    來設計您的空間{" "}
                  </span>
                  <br />

                  <span className="text-orange-50 text-2xl sm:text-5xl noto-sans ">
                    <span className="font-[Gilroy-Bold]">AI </span>室內設計
                  </span>
                </div>
                <div
                  onClick={nextStep}
                  className="cursor-pointer px-7 sm:px-20 py-4 sm:py-5 bg-orange-50 rounded-lg shadow justify-center items-center gap-3 flex md:w-[418px]"
                >
                  <Image width={30} height={30} src={StarImg} />
                  <div className="text-black font-semibold text-lg  noto-sans leading-[21.6px] ">
                    生成室內設計
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
        {/* <div className=" h-8 relative top-8 bg-gray-50"></div> */}

        <div className="flex flex-wrap gap-4 justify-center mt-4 max-w-[1695px] m-auto ">
          {myImages.map((image, key) => {
            if (key == 3) {
             return  (
              <div className="hidden xl:flex justify-center items-start h-80 w-80 bg-gray-50 ">
                <div className="py-10 px-4 shadow-inner bg-white rounded-lg mt-2  w-full xl:w-[90%]">
                  <h3 className="noto-sans text-2xl ">體驗用感覺來設計</h3>
                  <p className=" text-black font-semibold noto-sans mt-3 text-[16px]">
                    探索AI驅動的情感設計的室內設計 <br />
                    從色彩搭配到空間布置
                  </p>
                  <button
                    onClick={nextStep}
                    className=" bg-[#9D5C0D] noto-sans font-bold text-white  py-4 rounded-md w-full mt-3"
                  >
                    生成室內設計
                  </button>
                </div>
              </div>
             )
            }else {
              return (
                <img
                  key={"images1" + key}
                  className="w-80 h-80 rounded-lg"
                  src={image.img}
                />
              );
            }
            
          })}
        </div>

        <div className=" h-20 relative bottom-20 bg-gradient-to-t from-slate-100 to-transparent "></div>
      </div>

      {/* Design Like this  */}
      <div className="flex justify-center px-5 pb-10 -mt-10">
        <div className="flex-col justify-center items-center gap-2 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-center items-center gap-6 flex">
            <div className="flex-col justify-start items-center gap-3 flex">
              <div className="text-center text-stone-900 text-3xl font-bold noto-sans  leading-loose">
                想設計成這樣？
              </div>
              <div className="text-center text-[#64748B] text-base font-normal noto-sans leading-tight">
                在您意識到之前，想像一個能夠反映您情感的空間
              </div>
            </div>
            <div
              onClick={nextStep}
              className="h-20 justify-start items-start inline-flex cursor-pointer"
            >
              <div className="px-7 sm:px-20 py-[16px] bg-black rounded-lg shadow justify-center items-center gap-3 flex md:w-[512px] ">
                <Image width={20} height={20} src={WhiteStarImg} />
                <div className="  text-white text-lg noto-sans font-bold  leading-7">
                  生成室內設計
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <div className="w-full pt-5 bg-[#4D453E] flex-col justify-between items-start inline-flex">
        <div className="self-stretch px-3 sm:px-8 justify-between sm:justify-start items-start gap-5 inline-flex flex-wrap">
          <div className=" flex gap-5 items-center">
            <div className=" flex items-center gap-2 text-orange-50 text-xl font-bold font-['Plus Jakarta Sans']">
              <Image src={LogoWhite} className="w-[50px] h-[50px]" />
            </div>
            <div className=" text-orange-50 text-sm font-normal noto-sans leading-7">
              <div className="sm:hidden text-right sm:text-left">
              每个角落都体现着未来的生活
              </div>
              <div className="hidden sm:block text-right sm:text-left noto-sans">
              每个角落都反映出 <br /> 未来的生活
              </div>
            </div>
          </div>
          <div className="grow   pl-6 flex-col justify-start items-end gap-2 inline-flex mt-10 sm:mt-0 mb-3 pr-2 sm:pr-0">
            <div className="text-orange-50 text-lg font-semibold noto-sans leading-snug">
            联系我们
            </div>
            <div className="flex gap-3">
              <Image className="cursor-pointer" src={FbImg} />
              <Image className="cursor-pointer" src={InstaImg} />
              <Image className="cursor-pointer" src={YtImg} />
              <Image className="cursor-pointer" src={TiktokImg} />
            </div>
          </div>
        </div>
        <div className="mb-0 sm:mt-20  px-8 bg-[#4D453E] justify-start items-center gap-5 block w-full sm:inline-flex h-[70px]">
          <div className="py-2 text-orange-50 text-sm noto-sans leading-none">
          版权所有 2023 -{" "}
            <span className="noto-sans">悠孚室內裝修設計股份有限公司</span>
          </div>
          <div className="py-2 cursor-pointer text-orange-50 text-sm noto-sans leading-none">
          条款和政策
          </div>
          <div className="py-2 cursor-pointer text-orange-50 text-sm noto-sans leading-none">
          隐私和政策
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
