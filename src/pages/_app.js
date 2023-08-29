import '@/styles/globals.css'
import { createContext, useState } from "react"

export const MyContext = createContext()
export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onBoardingStep, setOnBoardingStep] = useState(0)
  const [onBoard, setOnBoard] = useState({})
  const value = {
    isLoggedIn, setIsLoggedIn,
    onBoardingStep, setOnBoardingStep,
    onBoard, setOnBoard
  }
  return <MyContext.Provider value={value}>
    <Component {...pageProps} />
  </MyContext.Provider>
}
