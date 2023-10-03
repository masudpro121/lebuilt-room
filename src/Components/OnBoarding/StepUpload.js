import { MyContext } from "@/pages/_app";
import React, { useContext, useEffect, useState } from "react";
import Signin from "../Auth/Signin";
import step from "../../assets/images/_Step icon base.png";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/images/onBoard/logo svg (1).png";
import uploadIcon from "../../assets/images/upload-cloud-01.png";
import close from "../../assets/images/line-md_remove.png";
import arrow from "../../assets/images/onBoard/ion_arrow-up.png";
import error from "../../assets/images/Featured icon outline.png";
import leftarrow from "../../assets/images/arrow-left.png";

function StepUpload() {
  const [file, setFile] = useState();

  const { onBoardingStep, setOnBoardingStep, user } = useContext(MyContext);
  const [uploaded, setUploaded] = useState(false);
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
  const uploadFile = () => {
    setUploaded(false);
    const formData = new FormData();
    formData.append("file", file);
    fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        let myOnBoard = onBoard;
        myOnBoard.image = res.secure_url;
        setOnBoard(myOnBoard);
        setUploaded(true);
      });
  };

  // .......... extra add by anisha show upload image.........

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      {user.email && (
        // <div className="flex gap-5  flex-wrap">
        //   <div>
        // <div>
        //   <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        // </div>
        //   <div>
        //   <button className="myBtn mt-3" onClick={uploadFile}>
        //     Upload
        //   </button>
        //   </div>
        //   <div>
        // <button className="myBtn" onClick={prevStep}>Prev Step</button>
        // <button className="myBtn" onClick={nextStep}>Next Step</button>
        //   </div>
        // </div>
        // {
        //   uploaded &&
        //   <div>
        //     <img src={onBoard.image} className="h-80 w-80" alt="" />
        //   </div>
        // }
        // </div>
        <div className="h-full flex justify-center items-center">
          <div className="h-full">
            <h3 className="hidden md:block text-[#271703] text-[30px] lg:text-[48px] text-center font-semibold ">
              Choose and upload file
            </h3>
            <p className="hidden md:block text-[18px] text-[#9D5C0D] text-center">
              Upload your room image
            </p>

            {/* ......responsive heading.......... */}

            <div className="md:hidden w-full px-0 flex gap-3 items-center py-[10px] bg-[#FEF7EF] justify-center">
              <Image className="" src={step} alt="" />
              <div className="">
                <h3 className=" text-[#271703] text-[16px] font-bold ">
                  {" "}
                  Choose and upload file
                </h3>
                <p className="  text-[12px] text-[#9D5C0D] ">
                  Upload your room image
                </p>
              </div>
            </div>

            {/* ......description .......... */}

            <div className="flex px-4 md:px-6 pt-6 pb-[30px] space-x-[16px] bg-[#F7F8F9] mx-4 md:mx-[35px] rounded-3xl my-5 md:my-[30px]">
              <Image
                className=" w-[40px] h-[40px] bg-[#9D5C0D] rounded-xl border-4  border-[#f1c28e]"
                src={logo}
                alt=""
              />
              <h2 className=" text-[12px] md:text-[14px] font-semibold text-[#271703]">
                <Link href="/" className="text-[#667412]">
                  {" "}
                  Uploading an inspiring image is key! 🌟
                </Link>{" "}
                It guides our AI to tailor the design closely to your vision,
                ensuring each detail reflects your style and preferences. Every
                piece of inspiration counts!
              </h2>
            </div>

            {/* ...... error mesage .......... */}

            <div className="flex px-4 md:px-6 pt-5 pb-[30px] space-x-[16px] bg-[#FFFBFA] mx-4 md:mx-[35px] rounded-3xl my-5 md:my-[30px] border border-[#FCA5A5] ">
              <Image className="object-contain" src={error} alt="" />
              <div className="">
                <h2 className=" text-[12px] md:text-[14px] font-semibold text-[#B91C1C]">
                  Invalid File Format
                </h2>
                <h2 className=" text-[12px] md:text-[14px] text-[#B91C1C]">
                  Ensure your image is in PNG or JPG format and doesn’t exceed
                  10MB. Let’s try that again!
                </h2>
              </div>
            </div>

            {/* ...... upload input field .......... */}

            {selectedImage ? (
              <div className="relative sm:w-[380px] w-full mx-auto sm:h-[380px] px-5 ">
                <Image
                  width="300"
                  height="300"
                  className=" border-4 border-[#C5DF2C] w-full h-full  object-cover mx-auto"
                  src={selectedImage}
                  alt=""
                />
                <div className="absolute top-4 right-8 cursor-pointer p-[2px] border-4 border-red-300 rounded-full bg-red-600">
                  <Image className="" src={close} alt="" />
                </div>
              </div>
            ) : (
              <div className="mx-6 sm:mx-8 md:mx-5 flex justify-center lg:mx-auto  bg-[#F7F8F9] border-2 border-dashed lg:w-[564px] lg:h-[368px] py-8 md:py-[64px] lg:px-[112px] rounded-[28px] hover:bg-[#F6FADF]  relative">
                <label htmlFor="file-input" className="cursor-pointer">
                  <div className="opacity-0 w-0 h-0 absolute overflow-hidden">
                    <input
                      type="file"
                      id="file-input"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>

                  <div className="text-center">
                    <div className="inline-block mx-auto cursor-pointer">
                      <div className="p-5 border bg-white shadow-lg rounded-full mb-[28px]">
                        <Image src={uploadIcon} alt="" />
                      </div>
                    </div>

                    <h2 className="text-[20px] text-[#333A09] leading-6 md:leading-9 mb-3 text-center md:text-[33px] font-medium">
                      Upload Inspirational <br /> Image
                    </h2>
                    <p className="text-center mt-2 text-[#333A09] text-[14px] md:text-[16px] ">
                      Please upload in PNG or JPG format.
                      <br /> Maximum file size: 10MB
                    </p>
                  </div>
                </label>
              </div>
            )}

            {/* ...... next prev button .......... */}

           

            <div className="flex justify-end mt-10 mb-5 md:mb-0 px-4 md:px-6 items-center space-x-2">
              <div
                // onClick={nextStep}
                className="myBtn hidden  text-[#9D5C0D] border border-[#9D5C0D] md:flex rounded py-[9px] px-4 md:px-[28px] items-center justify-center space-x-[12px] w-[192px] cursor-pointer"
              >
                <p className="text-[17px] md:text-[20px] font-semibold">Skip</p>
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
                <p className="text-[17px] md:text-[20px] font-semibold">
                  Next Step
                </p>
                <Image className="mb-[-3px]" src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      )}

      {
        !user.email && <Signin />
      }
    </div>
  );
}

export default StepUpload;
