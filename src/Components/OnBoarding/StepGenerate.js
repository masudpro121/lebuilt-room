import React, { useContext, useEffect, useState } from "react";
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
import LogoWhite from "@/assets/images/logo_white.svg";
import PlusIconImg from "@/assets/images/onBoard/plusicon.png";
import RepeatImg from "@/assets/images/onBoard/repeat-02.png";
import Image from "next/image";
import ProgressBar from "../ProgressBar/ProgressBar";
import ImageModal from "../ImageModal/ImageModal";
import Link from "next/link";
import Header from "../Header/Header";
import translate from "@/utils/translate";
const RoomImg = "/public/images/room.png";
function StepGenerate() {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [progressImage, setProgressImage] = useState("");
 
  const [progress, setProgress] = useState(0);
  const { onBoardingStep, setOnBoardingStep, user } = useContext(MyContext);
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};


  const demoImages = [
    "https://i.ibb.co/316mc1W/room.png",
    "https://i.ibb.co/q5S5HyQ/room1.jpg",
    "https://i.ibb.co/316mc1W/room.png",
    "https://i.ibb.co/q5S5HyQ/room1.jpg",
  ];
  useEffect(()=>{
    handleGenerate()
  },[])
  
  const sendImageMsg = (images) => {
    const  myuid = JSON.parse(localStorage.getItem("user")).uid
    fetch("/api/send-line-message", {
      method: 'POST',
      body: JSON.stringify({
        uid: myuid,
        messages: [
          {
            type: "image",
            originalContentUrl: images[0],
            previewImageUrl: images[0],
          },
          {
            type: "image",
            originalContentUrl: images[1],
            previewImageUrl: images[1],
          },
          {
            type: "image",
            originalContentUrl: images[2],
            previewImageUrl: images[2],
          },
          {
            type: "image",
            originalContentUrl: images[3],
            previewImageUrl: images[3],
          },
        ]
      })
    })
  }
  const sendTextMsg = () => {
    fetch("/api/send-line-message", {
      method: 'POST',
      body: JSON.stringify({
        uid: user.uid,
        messages: [
          {
            type: "text",
            text: "This is test text",
          },
        ]
      })
    })
  }
  
  const handleGenerate = async () => {
    setProgress(0);
    setProgressImage("");
    setGeneratedImages([]);
    const onBoard = JSON.parse(localStorage.getItem("onBoard"));
    const { image, type, style, place, size, budget } = onBoard;
    const translated = await translate(type.name)
    const translatedType = translated?.data?.translations[0]?.translatedText
    const prompt = generatePrompt({ image, type:translatedType, style });
    console.log(prompt, 'prompt');
    setProgress(5);
    setTimeout(()=>{
      setProgress(10)
    },2000)
    setTimeout(()=>{
      setProgress(15) 
    },4000)
    generateImage({ prompt })
      .then((msgId) => {
        setTimeout(() => {
          setProgress(20);
          let myInterval = setInterval(() => {
            checkImage(msgId, onBoard).then((checkRes) => {
           
              if(checkRes.progress > 20 ){
                setProgress(checkRes.progress);
              }
              if (checkRes.progress == 100) {
                clearInterval(myInterval);
              }
              if (checkRes.images) {
                setGeneratedImages(checkRes.images);
                sendImageMsg(checkRes.images, user.uid)
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
      {/* <button onClick={prevStep}>Prev Step</button>  */}

    <Header />

      {/* Progress and Loading  */}
      <div className="lg:bg-[#E3E9EE] min-h-[93vh] lg:p-8">
        <div className="bg-white rounded-md p-8 ">
          <div className="lg:border-2 lg:border-[#FBE8D0] md:py-8 min-h-[82vh]">
            <div className="text-center  pb-8">
              <h2 className="text-[#271703] font-semibold noto-sans text-3xl md:text-4xl">
              生成我的空间
              </h2>
              <p className="text-[#9D5C0D] text-md md:text-xl mt-3 noto-sans">
              让 AI 打造专属于您的空间
              </p>
            </div>
            <div className="hidden md:block w-2/3 border-b-2 m-auto"></div>

            <div className="w-3/4 md:w-1/2 m-auto">
              {progress > 0 && progress != 100 && (
                <div className="mb-3 ">
                  <ProgressBar progress={progress} />
                </div>
              )}
              {progress >=10 && progress != 100 && (
                <div className="mt-2 flex items-center  gap-3 animate-pulse">
                  <Image  src={CheckImg} />
                  <p className="noto-sans">扫描数据 <span className="animate-ping">..</span></p>
                </div>
              )}
              {progress >= 20 && progress != 100 && (
                <div className="mt-3 flex items-center  gap-3 animate-pulse">
                  <Image src={StarImg} />
                  <p className="noto-sans">专门为您生成房地产图像...</p>
                </div>
              )}
            </div>

           {
            progress < 100 &&
            <div className="mt-5 md:w-1/3  m-auto">
            <RenderImage src={progressImage} />
          </div>
           }

            {/* After Generateing Images  */}
            {progress == 100 && (
              <>
                <div className="lg:w-2/5 relative lg:-left-10 m-auto">
                  <div className="mt-3 md:mt-5 flex items-center  gap-3">
                    <Image className="h-8 w-8" src={LogoBlackBgImg} />
                    <p className="noto-sans">
                    通过 ufoliving touch，您的房地产图像已准备好
                       印象深刻！
                    </p>
                  </div>
                </div>
                <div className="lg:w-2/5 m-auto bg-[#F2F1EF] mt-3 rounded-md px-3 md:px-5 py-3">
                  <div className="flex  gap-3">
                    <p className="font-semibold noto-sans text-md md:text-xl">
                    现代风格老房子改造
                    </p>
                  </div>
                </div>
              </>
            )}
            {progress == 100 && (
              <div className="w-full  lg:w-2/3 m-auto flex justify-center gap-3">
                <div className="gap-3 bg-[#F2F1EF] p-5 sm:p-0 rounded-xl sm:bg-white flex justify-center items-center flex-wrap mt-10 ">
                {generatedImages.map((img, i) => {
                    return (
                      <ImageModal key={img + i} img={img}>
                        <div className="cursor-pointer  ">
                          <RenderImage src={img} />
                        </div>
                      </ImageModal>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-3 md:gap-10 justify-end sm:justify-center mt-5">
              <div onClick={handleGenerate} className="flex justify-center w-full sm:w-auto gap-3 cursor-pointer px-8 py-3 rounded-md items-center border-2 border-[#D0D5DD]">
                <Image src={RepeatImg} />
                <p className="font-semibold noto-sans">再生</p>
              </div>
              <div className="flex justify-center w-full sm:w-auto gap-3 cursor-pointer px-8 py-3 rounded-md items-center border-2 border-[#D0D5DD]">
                <Image src={PlusIconImg} />
                <p className="font-semibold noto-sans">选择新风格</p>
              </div>
              {
                progress==100 && 
                <div onClick={sendTextMsg} className="flex  justify-center w-full sm:w-auto gap-3 cursor-pointer pl-3 pr-7 rounded-md items-center bg-[#9D5C0D] text-white">
                <Image src={LogoWhite} />
                <p className="font-semibold noto-sans py-2 sm:py-0">
                聘请当地设计师来完成您的项目
                </p>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepGenerate;
