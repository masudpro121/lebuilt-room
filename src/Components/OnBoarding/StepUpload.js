import { MyContext } from "@/pages/_app";
import React, { useContext, useEffect, useState } from "react";
import Signin from "../Auth/Signin";

function StepUpload() {
  const [file, setFile] = useState();
  const { onBoardingStep, setOnBoardingStep, user } = useContext(MyContext);
  const [uploaded, setUploaded] = useState(false)
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
  }
  const prevStep = () => {
    if (onBoardingStep > 0) {
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const  nextStep = () => {
    localStorage.setItem('onBoardingStep', onBoardingStep+1)
    setOnBoardingStep(onBoardingStep+1)
  }
  const uploadFile = () => {
    setUploaded(false)
    const formData = new FormData();
    formData.append("file", file);
    fetch("/api/upload-image", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        let myOnBoard = onBoard
        myOnBoard.image = res.secure_url
        setOnBoard(myOnBoard)
        setUploaded(true)
      });
  };
  return (
    <div>
      {user.email && (
        <div className="flex gap-5  flex-wrap">
          <div>
          <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          </div>
          <div>
          <button className="myBtn mt-3" onClick={uploadFile}>
            Upload
          </button>
          </div>
          <div>
            <button className="myBtn" onClick={prevStep}>Prev Step</button>
            <button className="myBtn" onClick={nextStep}>Next Step</button>
          </div>
        </div>
        {
          uploaded &&
          <div>
            <img src={onBoard.image} className="h-80 w-80" alt="" />
          </div>
        }
        </div>
      )}
      {
        !user.email && <Signin />
      }
    </div>
  );
}

export default StepUpload;
