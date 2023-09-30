import React, { useContext, useState } from "react";
import StepStart from "./StepStart";
import StepStyle from "./StepStyle";
import StepType from "./StepType";
import StepPlace from "./StepPlace";
import StepSize from "./StepSize";
import StepBudget from "./StepBudget";
import { MyContext } from "@/pages/_app";
import StepWho from "./StepWho";
import StepHaveSpace from "./StepHaveSpace";
import StepUpload from "./StepUpload";
import StepGenerate from "./StepGenerate";
import OnBoardLayout from "./OnBoardLayout";

function OnBoarding() {
  const { onBoardingStep } = useContext(MyContext);

  return (
    <div>
      {onBoardingStep == 0 && <StepStart />}
      {onBoardingStep == 1 && (
        <OnBoardLayout>
          <StepWho />
        </OnBoardLayout>
      )}
      {onBoardingStep == 2 && (
        <OnBoardLayout>
          <StepStyle />
        </OnBoardLayout>
      )}
      {onBoardingStep == 3 && (
        <OnBoardLayout>
          <StepType />
        </OnBoardLayout>
      )}
      {onBoardingStep == 4 && (
        <OnBoardLayout>
          <StepPlace />
        </OnBoardLayout>
      )}
      {onBoardingStep == 5 && (
        <OnBoardLayout>
          <StepSize />
        </OnBoardLayout>
      )}
      {onBoardingStep == 6 && (
        <OnBoardLayout>
          <StepBudget />
        </OnBoardLayout>
      )}
      {onBoardingStep == 7 && (
        <OnBoardLayout>
          <StepHaveSpace />
        </OnBoardLayout>
      )}
      {onBoardingStep == 8 && (
        <OnBoardLayout>
          <StepUpload />
        </OnBoardLayout>
      )}
      {onBoardingStep == 9 && <StepGenerate />}
    </div>
  );
}

export default OnBoarding;
