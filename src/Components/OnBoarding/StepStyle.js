import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";
function StepStyle() {
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
  };
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState(onBoard?.style?.name);

  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem("onBoardingStep", onBoardingStep - 1);
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    if(onBoard.style){
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
    }
    
  };
  
  const styles = [
    {
      name: "american style",
      img: "https://i.ibb.co/5KKcJF6/american-style.webp",
    },
    {
      name: "serene minimalism",
      img: "https://i.ibb.co/YRrwd0L/installation-art.webp",
    },
    {
      name: "minimalist",
      img: "https://i.ibb.co/19FMCxv/modern-style.webp",
    },
    {
      name: "vintage",
      img: "https://i.ibb.co/WyR75BL/minimalist-style.webp",
    },
    {
      name: "luxurious",
      img: "https://i.ibb.co/wB0P7BK/nordic-style.webp",
    }
  ];

  const handleInput = (i) => {
    setSelectedOption(styles[i].name);
    let myOnBoard = onBoard;
    myOnBoard.style = styles[i];
    setOnBoard(myOnBoard);
    nextStep();
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5 ml-10">Select Style</h3>
      <div className="flex flex-wrap justify-center gap-5">
        {styles.map((style, i) => {
          return (
            <div key={style.name + i} className="w-3/12">
              <input
                id={style.name.replaceAll(" ", "")}
                type="radio"
                checked={selectedOption == style.name}
                onChange={() => handleInput(i)}
              />
              <label htmlFor={style.name.replaceAll(" ", "")}>
                <img src={style.img} alt="" />
                <b>{style.name}</b>
              </label>
            </div>
          );
        })}
      </div>
      <div className="flex gap-5 mt-5">
        <button className="myBtn" onClick={prevStep}>
          Prev Step
        </button>
        <button className="myBtn" onClick={nextStep}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default StepStyle;
