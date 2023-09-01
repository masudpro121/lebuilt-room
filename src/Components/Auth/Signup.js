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
          <input className="myInput" type="text" placeholder="your name" />
        </div>
        <div>
          <input className="myInput" type="text" placeholder="your email" />
        </div>
        <div>
          <input className="myInput" type="password" placeholder="password" />
        </div>
        <div>
        <button className="myBtn">Signup</button>
        </div>
        <div>If don't have account? <button onClick={()=>setHaveAccount('no')}>Signin</button></div>
      </div>
      <button onClick={prevStep}>Prev Step</button>
    </div>
  )
}

export default Signup