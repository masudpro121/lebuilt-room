import React, { useState } from "react";
import ShowGeneratedImage from "../ShowGeneratedImage/ShowGeneratedImage";
import RenderImage from "../RenderImage/RenderImage";
import generateImage from "@/utils/generateImage";
import checkImage from "@/utils/checkImage";

function StepGenerate() {
  const [generatedImages, setGeneratedImages] = useState([]);
  const [progressImage, setProgressImage] = useState("");
  const [progress, setProgress] = useState();

  const handleGenerate = async () => {
    setProgress(0)
    setProgressImage("");
    setGeneratedImages([])
    const { image, type, style, place, size, budget } = JSON.parse(
      localStorage.getItem("onBoard")
    );
    const prompt = `${image}, type: ${type?.name}, style: ${style?.name}, size: ${size}`;
    console.log(prompt);
    generateImage({ prompt })
      .then((msgId) => {
        setProgress(0);
        setTimeout(() => {
          console.log("inside timeout");
          let myInterval = setInterval(() => {
            console.log("inside interval");
            checkImage(msgId).then((checkRes) => {
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
  console.log(generatedImages, "images");
  return (
    <div>
      <button onClick={handleGenerate}>generate</button>
      {progress<100 && (
        <div className="flex justify-center ">
          <div>
            {<div className="text-center mb-5">Progress: {progress ? progress : 0}%</div>}
            {
              progressImage && <RenderImage cls="w-[60vw]"  src={progressImage} />
            }
          </div>
        </div>
      )}
      <div>
      <div className="flex flex-wrap justify-center gap-5">
        {generatedImages.map((image, key) => {
          return (
            
              <ShowGeneratedImage key={key} src={image} />
            
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default StepGenerate;
