import '@/styles/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { createContext, useEffect, useState } from "react"
import { useCookies } from "react-cookie"

export const MyContext = createContext()
export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [onBoardingStep, setOnBoardingStep] = useState(0)
  const [user, setUser] = useState({})
  const value = {
    isLoggedIn, setIsLoggedIn,
    onBoardingStep, setOnBoardingStep,
    user, setUser
  }
  useEffect(()=>{
    fetch('/api/user/verify-user-token')
    .then(res=>res.json())
    .then(res=>{
      setUser(res)
    })
  },[])
  useEffect(()=>{
    setOnBoardingStep(Number(localStorage.getItem('onBoardingStep')) || 0)
  },[])
  return <MyContext.Provider value={value}>
    <Component {...pageProps} />
  </MyContext.Provider>
}
