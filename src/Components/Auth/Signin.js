import { MyContext } from "@/pages/_app"
import React, { useContext } from 'react'

function Signin() {
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
          <input className="myinput" type="text" placeholder="your email" />
        </div>
        <div>
          <input className="myinput" type="password" placeholder="password" />
        </div>
        <button className="mybtn">Signin</button>
      </div>
      <div>
      <button onClick={prevStep}>Prev Step</button>
      </div>
    </div>
  )
}

export default Signin