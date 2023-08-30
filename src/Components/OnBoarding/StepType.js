import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'
function StepType() {
  const onBoard = JSON.parse(localStorage.getItem('onBoard')) || {}
  const setOnBoard = (data) =>{
    localStorage.setItem('onBoard', JSON.stringify(data))
    console.log(data);
  }
  const {onBoardingStep, setOnBoardingStep} = useContext(MyContext)
  const [selectedOption, setSelectedOption] = useState(onBoard?.type?.name)
  const prevStep = () => {
    if(onBoardingStep>0){
      localStorage.setItem('onBoardingStep', onBoardingStep-1)
      setOnBoardingStep(onBoardingStep-1)
    }
    
  }
  const  nextStep = () => {
    localStorage.setItem('onBoardingStep', onBoardingStep+1)
    setOnBoardingStep(onBoardingStep+1)
  }
  const types = [
    {
      name: 'Bathroom',
      img: 'https://i.ibb.co/5KKcJF6/american-style.webp'
    },
    {
      name: 'Dining Room',
      img: 'https://i.ibb.co/YRrwd0L/installation-art.webp'
    },
    {
      name: 'Bedroom',
      img: 'https://i.ibb.co/19FMCxv/modern-style.webp'
    },
    {
      name: 'Clothing Store',
      img: 'https://i.ibb.co/WyR75BL/minimalist-style.webp'
    },
    {
      name: 'Office',
      img: 'https://i.ibb.co/wB0P7BK/nordic-style.webp'
    }
  ]
  const handleInput = (i) => {
    setSelectedOption(types[i].name)
    let myOnBoard = onBoard
    myOnBoard.type = types[i]
    setOnBoard(myOnBoard)
    nextStep()
   };
   console.log(onBoard);
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-5 ml-10">Select room Type</h3>
      <div className="flex flex-wrap justify-center gap-5">
        {
          types.map((type, i)=>{
            return (
              <div key={type.name+i} className="w-3/12">
                <input
                  id={type.name.replaceAll(" ", "")}
                  type="radio"
                  checked={selectedOption == type.name}
                  onChange={()=>handleInput(i)}
                />
              <label htmlFor={type.name.replaceAll(" ", "")}>
                <img src={type.img} alt="" />
                <b>{type.name}</b>
              </label>
              </div>
            )
          })
        }
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

export default StepType