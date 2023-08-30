import { MyContext } from "@/pages/_app"
import React, { useContext } from 'react'

function Signup() {
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
    <div>
      <div>
        <div>
          <input className="myinput" type="text" placeholder="your name" />
        </div>
        <div>
          <input className="myinput" type="text" placeholder="your email" />
        </div>
        <div>
          <input className="myinput" type="password" placeholder="password" />
        </div>
        <button className="mybtn">Signup</button>
      </div>
      <button onClick={prevStep}>Prev Step</button>
    </div>
  )
}

export default Signup