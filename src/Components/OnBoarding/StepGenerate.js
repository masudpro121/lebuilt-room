import React, { useState } from "react";
import ShowGeneratedImage from "../ShowGeneratedImage/ShowGeneratedImage";

function StepGenerate() {
  const [generatedImages, setGeneratedImages] = useState([])
  const [progressImage, setProgressImage] = useState("")
  const [progress, setProgress] = useState('null')

  const handleGenerate = () => {
    generateImage({prompt: "" })
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
        }, 10000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <ShowGeneratedImage />
    </div>
  );
}

export default StepGenerate;
