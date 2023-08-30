import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'

function StepHaveSpace() {
  const {haveSpace, setHaveSpace, setOnBoardingStep, onBoardingStep} = useContext(MyContext)
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
  const handleSpace = (space) =>{
    localStorage.setItem('haveSpace', space)
    setHaveSpace(space)
    nextStep()
  }
  return (
    <div>
      <div>Do you have space?</div>
      <div className="flex  gap-5">
        <button onClick={()=>handleSpace('yes')}>Yes</button>
        <button onClick={()=>handleSpace('no')}>No</button>
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