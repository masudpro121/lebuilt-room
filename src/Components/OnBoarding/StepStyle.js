import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";
function StepStyle() {
  const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};
  const setOnBoard = (data) => {
    localStorage.setItem("onBoard", JSON.stringify(data));
    console.log(data);
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
    localStorage.setItem("onBoardingStep", onBoardingStep + 1);
    setOnBoardingStep(onBoardingStep + 1);
  };
  const styles = [
    {
      name: "American Style",
      img: "https://i.ibb.co/5KKcJF6/american-style.webp",
    },
    {
      name: "Installation Art",
      img: "https://i.ibb.co/YRrwd0L/installation-art.webp",
    },
    {
      name: "Modern Style",
      img: "https://i.ibb.co/19FMCxv/modern-style.webp",
    },
    {
      name: "Minimalist Style",
      img: "https://i.ibb.co/WyR75BL/minimalist-style.webp",
    },
    {
      name: "Nordic Style",
      img: "https://i.ibb.co/wB0P7BK/nordic-style.webp",
    },
    {
      name: "Country Style",
      img: "https://i.ibb.co/KxGwxMJ/country-style.webp",
    },
    {
      name: "Luxury Style",
      img: "https://i.ibb.co/f20rfL6/luxury-style.webp",
    },
  ];
  const handleInput = (i) => {
    setSelectedOption(styles[i].name);
    let myOnBoard = onBoard;
    myOnBoard.style = styles[i];
    setOnBoard(myOnBoard);
    nextStep();
  };
  console.log(onBoard);
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
