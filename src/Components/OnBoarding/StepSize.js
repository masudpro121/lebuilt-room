import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'

function StepSize() {
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
  }
  const {onBoardingStep, setOnBoardingStep} = useContext(MyContext)
  const [selectedOption, setSelectedOption] = useState(onBoard.size)
  const prevStep = () => {
    if(onBoardingStep>0){
      localStorage.setItem('onBoardingStep', onBoardingStep-1)
      setOnBoardingStep(onBoardingStep-1)
    }
    
  }
  const  nextStep = () => {
    if(onBoard.size){
      localStorage.setItem('onBoardingStep', onBoardingStep+1)
      setOnBoardingStep(onBoardingStep+1)
    }
   
  }
  const sizes = [
    "Below 20 Square Feet",
    "20 - 30 Square Feet",
    "More than 30 Feet",
  ];
  const handleInput = (selected) => {
   setSelectedOption(selected)
   let myOnBoard = onBoard
   myOnBoard.size = selected
   setOnBoard(myOnBoard)
   nextStep()
  };
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5 ml-10">Select Room Size</h3>
      <div>
        {
          sizes.map((size, i) => {
            return (
              <div key={i}>
              <input
                  id={size.replaceAll(" ", "")}
                  type="radio"
                  checked={selectedOption == size}
                  onChange={()=>handleInput(size)}
                />
                <label htmlFor={size.replaceAll(" ", "")}>{size}</label>
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
  )
}

export default StepSize