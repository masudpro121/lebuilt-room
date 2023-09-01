import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'

function StepHaveSpace() {
  const { setOnBoardingStep, onBoardingStep} = useContext(MyContext)
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const [selectedOption, setSelectedOption] = useState(onBoard.haveSpace)
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
    console.log(data);
  }
  const prevStep = () => {
    if(onBoardingStep>0){
      localStorage.setItem('onBoardingStep', onBoardingStep-1)
      setOnBoardingStep(onBoardingStep-1)
    }
  }
  const  nextStep = () => {
    localStorage.setItem('onBoardingStep', onBoardingStep+1)
    setOnBoardingStep(onBoardingStep+1)
  }
  const handleInput = (selected) => {
    setSelectedOption(selected)
    let myOnBoard = onBoard
    myOnBoard.haveSpace = selected
    setOnBoard(myOnBoard)
    nextStep()
   };
  return (
    <div>
      <div>Do you have space image?</div>
      <div className="flex  gap-5">
        <button onClick={()=>handleInput('yes')}>Yes</button>
        <button onClick={()=>handleInput('no')}>No</button>
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

export default StepHaveSpace