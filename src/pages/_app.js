import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Inter } from "next/font/google";
import Head from "next/head";

export const MyContext = createContext();
export default function App({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [onBoardingStep, setOnBoardingStep] = useState();
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
        localStorage.setItem("user", JSON.stringify(res));
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
      <Head>
        <title>ai.ufoliving.co</title>
        <meta
          name="description"
          content="ai ufoliving description"
          key="ufoliving"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
