import { MyContext } from "@/pages/_app"
import React, { useContext } from 'react'
import Homepage from "../Homepage/Homepage"

function StepStart() {
  const {onBoardingStep, setOnBoardingStep} = useContext(MyContext)
  
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

  
  return (
    <div>
      <Homepage nextStep={nextStep}/>
      {/* <button onClick={nextStep}>Get Started</button> */}
    </div>
    
  )
}

export default StepStart