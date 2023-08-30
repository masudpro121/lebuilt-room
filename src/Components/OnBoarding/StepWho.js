import { MyContext } from "@/pages/_app";
import React, { useContext, useState } from "react";

function StepWho() {
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
    console.log(data);
  }
  
  const { onBoardingStep, setOnBoardingStep } = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState(onBoard.who)

  

  const prevStep = () => {
    if (onBoardingStep > 0) {
      localStorage.setItem('onBoardingStep', onBoardingStep-1)
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    localStorage.setItem('onBoardingStep', onBoardingStep+1)
    setOnBoardingStep(onBoardingStep + 1);
  };
  const iam = [
    "Home Buyer",
    "Landlord",
    "Tenant",
    "Business Owner",
    "Interior Designer",
    "Real Estate Agent",
    "Other",
  ];
  const handleInput = (selected) => {
   setSelectedOption(selected)
   let myOnBoard = onBoard
   myOnBoard.who = selected
   setOnBoard(myOnBoard)
   nextStep()
  };
  return (
    <div>
      {iam.map((am, i) => {
        return (
          <div key={i}>
          <input
              id={am.replaceAll(" ", "")}
              type="radio"
              checked={selectedOption == am}
              onChange={()=>handleInput(am)}
            />
            <label htmlFor={am.replaceAll(" ", "")}>{am}</label>
          </div>
        );
      })} 
       <button onClick={prevStep}>Prev Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  );
}

export default StepWho;
