import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
function StepHaveSpace() {
  const { setOnBoardingStep, onBoardingStep, user} = useContext(MyContext)
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const [selectedOption, setSelectedOption] = useState(onBoard.haveSpace)
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
  }
  const prevStep = () => {
    if(onBoardingStep>0){
      localStorage.setItem('onBoardingStep', onBoardingStep-1)
      setOnBoardingStep(onBoardingStep-1)
    }
  }
  const  nextStep = () => {
    if(onBoard.haveSpace){
      localStorage.setItem('onBoardingStep', onBoardingStep+1)
      setOnBoardingStep(onBoardingStep+1)
    }
  }
  const handleInput = (selected) => {
    setSelectedOption(selected)
    let myOnBoard = onBoard
    myOnBoard.haveSpace = selected
    setOnBoard(myOnBoard)
    if(user.email){
      if(selected=="yes"){
        nextStep()
      }else{
        localStorage.setItem('onBoardingStep', onBoardingStep+2)
        setOnBoardingStep(onBoardingStep+2)
      }
      
    }else{
      const channelId = "2000692142";
      const redirectUrl = "http://localhost:3000/api/line-auth";
      const state = uuidv4();
      const scope = "profile openid email";
      const nonce = "anythingToSecureTheURI012";
      let lineAuth = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channelId}&redirect_uri=${redirectUrl}&state=${state}&scope=${scope}&nonce=${nonce}`;
      window.open(lineAuth, "_self")
    }
   };
  return (
    <div>
      <div>Do you have space image?</div>
      <div className="flex  gap-5">
        <button onClick={()=>handleInput('yes')}>Yes</button>
        <button onClick={()=>handleInput('no')}>No</button>
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

export default StepHaveSpace