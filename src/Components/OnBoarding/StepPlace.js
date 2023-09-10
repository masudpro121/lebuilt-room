import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'

function StepPlace() {
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
  }
  const {onBoardingStep, setOnBoardingStep} = useContext(MyContext)
  const [selectedOption, setSelectedOption] = useState(onBoard.place)
  const prevStep = () => {
    if(onBoardingStep>0){
      localStorage.setItem('onBoardingStep', onBoardingStep-1)
      setOnBoardingStep(onBoardingStep-1)
    }
    
  }
  const  nextStep = () => {
    if(onBoard.place){
      localStorage.setItem('onBoardingStep', onBoardingStep+1)
      setOnBoardingStep(onBoardingStep+1)
    }
  }
  const places = [
    "New House Generation",
    "Pre-Sale Home",
    "Old House Renovation",
    "Commercial Space",
    "Public Space",
  ];
  const handleInput = (selected) => {
   setSelectedOption(selected)
   let myOnBoard = onBoard
   myOnBoard.place = selected
   setOnBoard(myOnBoard)
   nextStep()
  };
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5 ml-10">Select Place</h3>
      <div>
        {
          places.map((place, i) => {
            return (
              <div key={i}>
              <input
                  id={place.replaceAll(" ", "")}
                  type="radio"
                  checked={selectedOption == place}
                  onChange={()=>handleInput(place)}
                />
                <label htmlFor={place.replaceAll(" ", "")}>{place}</label>
              </div>
            );
          })} 
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

export default StepPlace