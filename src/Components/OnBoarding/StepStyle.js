import { MyContext } from "@/pages/_app"
import React, { useContext } from 'react'
function StepStyle() {
  const { onBoardingStep, setOnBoardingStep, onBoard, setOnBoard } = useContext(MyContext);
  console.log(onBoard, 'ob');
  const prevStep = () => {
    if(onBoardingStep>0){
      setOnBoardingStep(onBoardingStep-1)
    }
    
  }
  const  nextStep = () => {
    setOnBoardingStep(onBoardingStep+1)
  }
  return (
    <div>StepStyle
      <button onClick={prevStep}>Prev Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  )
}

export default StepStyle