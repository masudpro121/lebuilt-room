import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'

function StepBudget() {
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
  }
  const {onBoardingStep, setOnBoardingStep} = useContext(MyContext)
  const [budget, setBudget] = useState(onBoard.budget)
  const prevStep = () => {
    if(onBoardingStep>0){
      localStorage.setItem('onBoardingStep', onBoardingStep-1)
      setOnBoardingStep(onBoardingStep-1)
    }
  }
  const  nextStep = () => {
    let modifyOnboard = onBoard
    modifyOnboard.budget = budget
    setOnBoard(modifyOnboard)
    localStorage.setItem('onBoardingStep', onBoardingStep+1)
    setOnBoardingStep(onBoardingStep+1)
  }
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5 ml-10">Enter your Budget</h3>
      <div>
        <input onChange={(e)=>setBudget(Number(e.target.value))} value={budget} type="number" placeholder="Tell me your maximum budget.." className="w-80 border-2" />
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

export default StepBudget