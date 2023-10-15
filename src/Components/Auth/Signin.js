import { MyContext } from "@/pages/_app";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
function Signin() {
  const { onBoardingStep, setOnBoardingStep, user } = useContext(MyContext);
  const channelId = "2001168288";
  const redirectUrl = "http://localhost:3000/api/line-auth";
  const state = uuidv4();
  const scope = "profile openid email";
  const nonce = "anythingToSecureTheURI012";
  let lineAuth = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${channelId}&redirect_uri=${redirectUrl}&state=${state}&bot_prompt=aggressive&scope=${scope}&nonce=${nonce}`;

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
