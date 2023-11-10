import { MyContext } from "@/pages/_app";
import React, { useContext, useEffect, useRef, useState } from "react";
import Signin from "../Auth/Signin";
import step from "../../assets/images/_Step icon base.png";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/onBoard/ion_arrow-up.svg";
import uploadIcon from "../../assets/images/upload-cloud-01.png";
import close from "../../assets/images/line-md_remove.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.svg";
import error from "../../assets/images/Featured icon outline.png";
import leftarrow from "../../assets/images/arrow-left.png";
import ProgressBar from "../ProgressBar/ProgressBar";

function StepUpload() {
  const { onBoardingStep, setOnBoardingStep, user } = useContext(MyContext);
  const [uploaded, setUploaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if (onBoard.image) {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
  };
  const handleCancel = () => {
    setSelectedImage("");
    setProgress(0);
  };

  const uploadFile = (myfile) => {
    let myOnBoard = onBoard;
    myOnBoard.image = "";
    setOnBoard(myOnBoard);
    setUploaded(false);
    const interval = setInterval(() => {
      setProgress((pr) => {
        if (pr < 90) {
          return pr + 10;
        } else {
          clearInterval(interval);
          return pr;
        }
      });
    }, 500);

    const formData = new FormData();
    formData.append("file", myfile);
    fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        myOnBoard.image = res.secure_url;
        setOnBoard(myOnBoard);
        setUploaded(true);
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => setProgress(0), 300);
        // setSelectedImage(res.secure_url);
      });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
    uploadFile(file);
  };

  const handleSkip = () => {
    let myOnBoard = onBoard;
    myOnBoard.image = "";
    setOnBoard(myOnBoard);
    localStorage.setItem("onBoardingStep", onBoardingStep + 1);
    setOnBoardingStep(onBoardingStep + 1);
  };
  return (
    <div className="h-[90vh] md:h-[86vh] ">
      <div className="h-full  md:h-auto ">
        {user.email && (
          <div className="w-full ">
            <div className="">
              <h3 className="hidden md:block text-[#271703] text-[30px] lg:text-[48px] text-center font-semibold noto-sans ">
              选择并上传文件
              </h3>
              <p className="hidden md:block text-[18px] noto-sans text-[#9D5C0D] text-center">
                上传您的房间图片
              </p>

              {/* ......responsive heading.......... */}

              <div className="md:hidden w-full px-0 flex gap-3 items-center py-[10px] bg-[#FEF7EF] justify-center">
                <Image className="" src={step} alt="" />
                <div className="">
                  <h3 className=" text-[#271703] text-[16px] font-semibold noto-sans ">
                    {" "}
                    选择并上传文件
                  </h3>
                  <p className="  text-[12px] noto-sans text-[#9D5C0D] ">
                    上传您的房间图片
                  </p>
                </div>
              </div>

              {/* ......description .......... */}

              <div className="flex px-4 md:px-6 pt-6   space-x-[16px] bg-[#F7F8F9] mx-4 md:mx-[35px] rounded-lg md:rounded-3xl mt-4 md:my-[30px]">
                <Image
                  className=" w-[40px] h-[40px] bg-[#9D5C0D] rounded-xl border-4  border-[#f1c28e]"
                  src={logo}
                  alt=""
                />
                <h2 className=" text-[12px] md:text-[14px] font-semibold noto-sans text-[#271703]">
                  <Link href="/" className="text-[#667412]">
                    {" "}
                    上传鼓舞人心的图片是关键！ 🌟
                  </Link>{" "}
                  它指导我们的人工智能根据您的愿景量身定制设计，
                   确保每个细节都能体现您的风格和偏好。
                   每一个灵感都很重要！
                </h2>
              </div>

              {/* ...... error mesage .......... */}

              {/* <div className="flex px-4 md:px-6 pt-5 pb-[30px] space-x-[16px] bg-[#FFFBFA] mx-4 md:mx-[35px] rounded-3xl my-5 md:my-[30px] border border-[#FCA5A5] ">
              <Image className="object-contain" src={error} alt="" />
              <div className="">
                <h2 className=" text-[12px] md:text-[14px] font-[Gilroy-SemiBold] text-[#B91C1C]">
                  Invalid File Format
                </h2>
                <h2 className=" text-[12px] md:text-[14px] text-[#B91C1C] font-[Gilroy-Regular]">
                  Ensure your image is in PNG or JPG format and doesn’t exceed
                  10MB. Let’s try that again!
                </h2>
              </div>
            </div> */}

              {progress > 0 && (
                <div className="px-10 max-w-[1000px] m-auto">
                  <ProgressBar progress={progress} />
                </div>
              )}

              <div className="px-10">
                {selectedImage ? (
                  <div
                    className={`relative sm:w-[380px] w-full  mx-auto mt-5`}
                  >
                    {!uploaded && (
                      <div className="absolute w-full  h-full bg-[#9D5C0D] opacity-80"></div>
                    )}
                    <img
                      className=" border-4 border-[#C5DF2C] w-full h-full  object-cover mx-auto"
                      src={selectedImage}
                      alt=""
                    />
                    {uploaded && (
                      <div className="absolute top-4 right-5 cursor-pointer p-[2px] border-4 border-red-300 rounded-full bg-red-600">
                        <Image
                          className=""
                          src={close}
                          alt=""
                          onClick={handleCancel}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="mx-6 mt-4 lg:mt-5 sm:mx-8 md:mx-5 flex justify-center lg:mx-auto  bg-[#F7F8F9] border-2 border-dashed lg:w-[564px] lg:h-[368px] p-3 lg:py-8 md:py-[64px] lg:px-[112px] rounded-[28px] hover:bg-[#F6FADF]  relative">
                    <label htmlFor="file-input" className="cursor-pointer">
                      <div className="opacity-0 w-0 h-0 absolute overflow-hidden">
                        <input
                          type="file"
                          id="file-input"
                          className="hidden"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </div>

                      <div className="text-center ">
                        <div className="inline-block mx-auto cursor-pointer">
                          <div className="p-5 border bg-white shadow-lg rounded-full mb-[28px]">
                            <Image src={uploadIcon} alt="" />
                          </div>
                        </div>

                        <h2 className="text-[20px] text-[#333A09] leading-6 md:leading-9 mb-3 text-center md:text-[33px] font-semibold noto-sans">
                        上传励志 <br /> 图像
                        </h2>
                        <p className="text-center mt-2 text-[#333A09] text-[14px] md:text-[16px] noto-sans">
                        请以PNG或JPG格式上传。
                          <br /> 最大文件大小：10MB
                        </p>
                      </div>
                    </label>
                  </div>
                )}
              </div>

              {/* ...... next prev button .......... */}
            </div>
            <div className="sticky bottom-0 bg-white w-full px-5 pt-5">
              <div className="flex justify-center sm:justify-end items-center space-x-2">
                <div
                  onClick={handleSkip}
                  className="myBtn hidden  text-[#9D5C0D] border border-[#9D5C0D] md:flex rounded py-[9px] px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
                >
                  <p className="text-[17px] md:text-[20px] font-semibold noto-sans">
                  跳过
                  </p>
                </div>
                <div className="myBtn md:hidden" onClick={prevStep}>
                  <Image
                    className="border w-[55px] rounded-lg bg-gray-50 py-[12px] px-[14px]"
                    src={leftarrow}
                    alt=""
                  />
                </div>
                <div
                  onClick={nextStep}
                  className="myBtn bg-[#9D5C0D] text-white flex rounded py-[10px] px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
                >
                  <p className="text-[17px] md:text-[20px] font-semibold noto-sans">
                  下一个
                  </p>
                  <Image className="" src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}

        {!user.email && <Signin />}
      </div>
    </div>
  );
}

export default StepUpload;
