import { MyContext } from "@/pages/_app"
import React, { useContext, useState } from 'react'
import Signin from "../Auth/Signin"
import Signup from "../Auth/Signup"

function StepAuth() {
  const  {haveAccount, setHaveAccount} = useContext(MyContext)
  
  if(haveAccount=="no"){
    return <Signin />
  }else{
    return <Signup />
  }
}

export default StepAuth