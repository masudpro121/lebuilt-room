import lineAuth from "@/data/lineAuth";
import { MyContext } from "@/pages/_app";
import React, { useContext } from "react";

function Signin() {
  const { onBoardingStep, setOnBoardingStep, user } = useContext(MyContext);
  
  const prevStep = () => {
    if (onBoardingStep > 0) {
      setOnBoardingStep(onBoardingStep - 1);
    }
  };
  const nextStep = () => {
    setOnBoardingStep(onBoardingStep + 1);
  };

  const handleSignout = () => {
    fetch('/api/user/signout')
    .then(res=>res.json())
    .then(res=>{
      if(res.status=="logout"){
        window.location.href = "/"
      }
    })
  }
  return (
    <div>
      {
        user.email ?
        <div>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <button className="myBtn" onClick={handleSignout}>
            Signout
          </button>
        </div>
        : 
        <button className="myBtn" onClick={() => window.open(lineAuth, "_self")}>
        Signin
      </button>
      }
      {/* <div>
        <button onClick={prevStep}>Prev Step</button>
      </div> */}
    </div>
  );
}

export default Signin;
