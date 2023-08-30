import '@/styles/globals.css'
import { createContext, useEffect, useState } from "react"

export const MyContext = createContext()
export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onBoardingStep, setOnBoardingStep] = useState(0)
  const [haveSpace, setHaveSpace] = useState("")
  const value = {
    isLoggedIn, setIsLoggedIn,
    onBoardingStep, setOnBoardingStep,
    haveSpace, setHaveSpace
  }
  useEffect(()=>{
    setOnBoardingStep(localStorage.getItem('onBoardingStep') || 0)
    setHaveSpace(localStorage.getItem('haveSpace')||"no")
  },[])
  return <MyContext.Provider value={value}>
    <Component {...pageProps} />
  </MyContext.Provider>
}
