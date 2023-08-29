import { MyContext } from "@/pages/_app"
import React, { useContext } from 'react'

function StepStart() {
  const {onBoardingStep, setOnBoardingStep, onBoard, setOnBoard} = useContext(MyContext)
  
  const prevStep = () => {
    if(onBoardingStep>0){
      setOnBoardingStep(onBoardingStep-1)
    }
    
  }
  const  nextStep = () => {
    setOnBoardingStep(onBoardingStep+1)
  }

  
  return (
    <div>
     
      <button onClick={prevStep}>Prev Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
    
  )
}

export default StepStart