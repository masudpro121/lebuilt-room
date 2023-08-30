import { MyContext } from "@/pages/_app"
import React, { useContext } from 'react'
import Signin from "../Auth/Signin"
import Signup from "../Auth/Signup"

function StepAuth() {
  const  {haveSpace} = useContext(MyContext)
  if(haveSpace=="yes"){
    return <Signin />
  }else{
    return <Signup />
  }
}

export default StepAuth