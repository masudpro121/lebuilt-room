import '@/styles/globals.css'
import { createContext, useEffect, useState } from "react"

export const MyContext = createContext()
export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onBoardingStep, setOnBoardingStep] = useState(0)
  const [haveAccount, setHaveAccount] = useState('no')
  const value = {
    isLoggedIn, setIsLoggedIn,
    onBoardingStep, setOnBoardingStep,
    haveAccount, setHaveAccount
  }
  useEffect(()=>{
    setOnBoardingStep(Number(localStorage.getItem('onBoardingStep')) || 0)
  },[])
  return <MyContext.Provider value={value}>
    <Component {...pageProps} />
  </MyContext.Provider>
}
