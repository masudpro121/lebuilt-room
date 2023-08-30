import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'

function StepHaveSpace() {
  const {haveSpace, setHaveSpace, setOnBoardingStep, onBoardingStep} = useContext(MyContext)
  const prevStep = () => {
    if(onBoardingStep>0){
      setOnBoardingStep(onBoardingStep-1)
    }
  }
  const  nextStep = () => {
    setOnBoardingStep(onBoardingStep+1)
  }
  const handleSpace = (space) =>{
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
    </div>
  )
}

export default StepHaveSpace