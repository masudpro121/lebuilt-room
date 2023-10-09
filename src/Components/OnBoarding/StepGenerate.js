import React, { useContext, useState } from "react";
import ShowGeneratedImage from "../ShowGeneratedImage/ShowGeneratedImage";
import RenderImage from "../RenderImage/RenderImage";
import generateImage from "@/utils/generateImage";
import checkImage from "@/utils/checkImage";
import { generatePrompt } from "@/utils/generatePrompt";
import { MyContext } from "@/pages/_app";
import logo from "@/assets/images/onBoard/logo svg.png";
import userIcon from "@/assets/images/onBoard/user-01.png";
import downArrow from "@/assets/images/onBoard/Icon.png";
import StarImg from "@/assets/images/star.png";
import CheckImg from "@/assets/images/check.png";
import LogoBlackBgImg from "@/assets/images/logo_blackbg.png";
import LogoWhite from "@/assets/images/logo-white.png";
import PlusIconImg from "@/assets/images/onBoard/plusicon.png";
import RepeatImg from "@/assets/images/onBoard/repeat-02.png";
import Image from "next/image";
import ProgressBar from "../ProgressBar/ProgressBar";
const RoomImg = "/public/images/room.png"
function StepGenerate() {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [progressImage, setProgressImage] = useState("");
  const [progress, setProgress] = useState();
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};

  const handleGenerate = async () => {
    setProgress(0);
    setProgressImage("");
    setGeneratedImages([]);
    const onBoard = JSON.parse(localStorage.getItem("onBoard"));
    const { image, type, style, place, size, budget } = onBoard;
    // const prompt = `${image}, type: ${type?.name}, style: ${style?.name}`;
    const prompt = generatePrompt({ image, type, style });
    console.log(prompt, "prompt");
    generateImage({ prompt })
      .then((msgId) => {
        setProgress(0);
        setTimeout(() => {
          let myInterval = setInterval(() => {
            checkImage(msgId, onBoard).then((checkRes) => {
              console.log(checkRes);
              setProgress(checkRes.progress);
              if (checkRes.progress == 100) {
                clearInterval(myInterval);
              }
              if (checkRes.images) {
                setGeneratedImages(checkRes.images);
              }
              if (checkRes.progressImage) {
                setProgressImage(checkRes.progressImage);
              }
            });
          }, 5000);
        }, 20000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const prevStep = () => {
    if (onBoardingStep > 0) {
      if (onBoard.haveSpace == "yes") {
        localStorage.setItem("onBoardingStep", onBoardingStep - 1);
        setOnBoardingStep(onBoardingStep - 1);
      } else {
        localStorage.setItem("onBoardingStep", onBoardingStep - 2);
        setOnBoardingStep(onBoardingStep - 2);
      }
    }
  };
  return (
    <div>
      {/* <button onClick={handleGenerate}>generate</button> <br/>
      <button onClick={prevStep}>Prev Step</button> */}

      {/* Header  */}
      <div className="border border-[#F1F5F9] bg-white w-full px-10 ">
        <div className="hidden custom-container px-8 xl:px-0  md:flex justify-between  ">
          <div className="left flex items-center space-x-[60px]">
            <Image src={logo} alt="" />
            <div className="flex items-center space-x-[20px]">
              <h2 className="text-[16px] text-[#475569] ">History</h2>
              <h2 className="text-[16px] text-[#475569] ">Collection</h2>
            </div>
          </div>
          <div className="right flex items-center space-x-[4px]">
            <Image src={userIcon} alt="" />
            <Image src={downArrow} alt="" />
          </div>
        </div>
      </div>

      {/* Progress and Loading  */}
      <div className="bg-[#E3E9EE] min-h-[93vh] p-8">
        <div className="bg-white rounded-md p-8 ">
          <div className="border-2 border-[#FBE8D0] p-10 min-h-[82vh]">
            <div className="text-center  pb-8">
              <h2 className="text-[#271703] font-[Gilroy-SemiBold] text-4xl">
                Generate My Space
              </h2>
              <p className="text-[#9D5C0D] text-xl mt-3">
                Let AI craft a space that’s uniquely yours
              </p>
            </div>
            <div className="w-2/3 border-b-2 m-auto"></div>

            {/* <div className="w-1/2 m-auto">
              <div className="my-3">
                <ProgressBar progress={10} />
              </div>
              <div className="mt-5 flex  gap-3">
                <Image src={CheckImg} />
                <p>Scanning the data..</p>
              </div>
              <div className="mt-3 flex  gap-3">
                <Image src={StarImg} />
                <p>Generating real estate images just for you...</p>
              </div>
            </div> */}
           
            <div className="w-2/5 m-auto">
              <div className="mt-5 flex  gap-3">
                <Image src={LogoBlackBgImg} />
                <p>
                  With ufoliving touch, your real estate images are ready to
                  impress!
                </p>
              </div>
            </div>
            <div className="w-2/5 m-auto bg-[#F2F1EF] mt-5 rounded-md px-5 py-3">
              <div className="flex  gap-3">
                <p className="font-[Gilroy-SemiBold] text-xl">
                  Modern Style Old-house renovation
                </p>
              </div>
            </div>

            <div className="w-2/3 m-auto flex justify-center mt-10">
              <div className="gap-5 flex justify-center flex-wrap">
                <RenderImage src="https://i.ibb.co/316mc1W/room.png" cls="w-80 h-80"/>
                <RenderImage src="https://i.ibb.co/316mc1W/room.png" cls="w-80 h-80"/>
                <RenderImage src="https://i.ibb.co/316mc1W/room.png" cls="w-80 h-80"/>
                <RenderImage src="https://i.ibb.co/316mc1W/room.png" cls="w-80 h-80"/>
              </div>
            </div>

            <div className="flex gap-10 justify-end sm:justify-center">
              <div className="flex gap-3 cursor-pointer px-8 rounded-md items-center border-2 border-[#D0D5DD]">
                <Image src={RepeatImg} />
                <p className="font-[Gilroy-SemiBold]">Regenerate</p>
              </div>
              <div className="flex gap-3 cursor-pointer px-8 rounded-md items-center border-2 border-[#D0D5DD]">
                <Image src={PlusIconImg} />
                <p className="font-[Gilroy-SemiBold]">Select a new Style</p>
              </div>
              <div className="flex gap-3 cursor-pointer pl-3 pr-7 rounded-md items-center bg-[#9D5C0D] text-white">
                <Image src={LogoWhite} />
                <p className="font-[Gilroy-SemiBold]">Get a local designer to work on your project</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {progress < 100 && (
        <div className="flex justify-center ">
          <div>
            {
              <div className="text-center mb-5">
                Progress: {progress ? progress : 0}%
              </div>
            }
            {progress < 100 && <RenderImage src={progressImage} />}
          </div>
        </div>
      )}
      <div>
        <div className="flex flex-wrap justify-center gap-5">
          {generatedImages.map((image, key) => {
            return <ShowGeneratedImage key={key} src={image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default StepGenerate;
