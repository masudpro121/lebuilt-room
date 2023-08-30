import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'

function StepBudget() {
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
    console.log(data);
  }
  const {onBoardingStep, setOnBoardingStep} = useContext(MyContext)
  const [budget, setBudget] = useState(onBoard.budget)
  const prevStep = () => {
    if(onBoardingStep>0){
      setOnBoardingStep(onBoardingStep-1)
    }
  }
  const  nextStep = () => {
    let modifyOnboard = onBoard
    modifyOnboard.budget = budget
    setOnBoard(modifyOnboard)
    console.log(onBoard);
    setOnBoardingStep(onBoardingStep+1)
  }
  return (
    <div>
      <div>
        <input onChange={(e)=>setBudget(Number(e.target.value))} value={budget} type="number" placeholder="Tell me your maximum budget.." className="w-80 border-2" />
      </div>
      <button onClick={prevStep}>Prev Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  )
}

export default StepBudget