import React, { useState } from 'react'
import Skeleton from "react-loading-skeleton"

function RenderImage({src, cls="",}) {
  const [isLoading, setIsLoading] = useState(true)
  const handleLoaded = () =>{
    console.log('load');
    setIsLoading(false)
  }
  return (
    <div className={"w-80 "+cls}>
     {
      isLoading  && <Skeleton duration={0.7} className={"h-80 "} />
     }
    {
       src && <img className={isLoading?"hidden":"block" + " rounded-md "} src={src} onLoad={handleLoaded} />
    }
    </div>
  )
}

export default RenderImage