import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'

function StepPlace() {
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
    console.log(data);
  }
  const {onBoardingStep, setOnBoardingStep} = useContext(MyContext)
  const [selectedOption, setSelectedOption] = useState(onBoard.place)
  const prevStep = () => {
    if(onBoardingStep>0){
      setOnBoardingStep(onBoardingStep-1)
    }
    
  }
  const  nextStep = () => {
    setOnBoardingStep(onBoardingStep+1)
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
      <button onClick={prevStep}>Prev Step</button>
      <button onClick={nextStep}>Next Step</button>
    </div>
  )
}

export default StepPlace