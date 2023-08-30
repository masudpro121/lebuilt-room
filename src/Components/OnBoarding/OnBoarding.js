import React, { useContext, useState } from 'react'
import StepStart from "./StepStart"
import StepStyle from "./StepStyle"
import StepType from "./StepType"
import StepPlace from "./StepPlace"
import StepSize from "./StepSize"
import StepBudget from "./StepBudget"
import { MyContext } from "@/pages/_app"
import StepWho from "./StepWho"
import StepHaveSpace from "./StepHaveSpace"
import StepAuth from "./StepAuth"

function OnBoarding() {
  const {onBoardingStep} = useContext(MyContext)
  console.log(onBoardingStep, 'step');
  
  return (
    <div>
      {onBoardingStep==0 && <StepStart />}
      {onBoardingStep==1 && <StepWho />}
      {onBoardingStep==2 && <StepStyle />}
      {onBoardingStep==3 && <StepType />}
      {onBoardingStep==4 && <StepPlace />}
      {onBoardingStep==5 && <StepSize />}
      {onBoardingStep==6 && <StepBudget />}
      {onBoardingStep==7 && <StepHaveSpace />}
      {onBoardingStep==8 && <StepAuth />}
    </div>
  )
}

export default OnBoarding