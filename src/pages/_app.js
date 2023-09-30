import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Inter } from "next/font/google";

export const MyContext = createContext();
export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onBoardingStep, setOnBoardingStep] = useState(0);
  const [user, setUser] = useState({});
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    onBoardingStep,
    setOnBoardingStep,
    user,
    setUser,
  };

  useEffect(() => {
    setOnBoardingStep(Number(localStorage.getItem("onBoardingStep")) || 0);
  }, []);

  const nextStep = () => {
    const onBoard = JSON.parse(localStorage.getItem("onBoard")) || {};

    const onBoardingStep = Number(localStorage.getItem("onBoardingStep")) || 0;
    if (onBoard.haveSpace == "yes") {
      localStorage.setItem("onBoardingStep", onBoardingStep + 1);
      setOnBoardingStep(onBoardingStep + 1);
      console.log("yes step called", onBoardingStep);
    } 
    if (onBoard.haveSpace == "no") {
      localStorage.setItem("onBoardingStep", onBoardingStep + 2);
      setOnBoardingStep(onBoardingStep + 2);
      console.log("no step called", onBoardingStep);
    }
  };

  useEffect(() => {
    fetch("/api/user/verify-user-token")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        const onBoardingStep =
          Number(localStorage.getItem("onBoardingStep")) || 0;
        if (onBoardingStep == 7 && res.email) {
          console.log(res, "onboarding step 7");
          nextStep();
        }
      });
  }, []);

  return (
    <MyContext.Provider value={value}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
