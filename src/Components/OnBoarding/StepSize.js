import { MyContext } from "@/pages/_app"
import React, { useContext } from 'react'

function StepSize() {
  const {onBoardingStep, setOnBoardingStep} = useContext(MyContext)
  
  const prevStep = () => {
    if(onBoardingStep>0){
      setOnBoardingStep(onBoardingStep-1)
    }
    
  }
  const  nextStep = () => {
    setOnBoardingStep(onBoardingStep+1)
  }
  return (
    <div>StepSize
      <button onClick={prevStep}>Prev Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  )
}

export default StepSize