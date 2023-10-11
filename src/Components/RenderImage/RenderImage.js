import React, { useState } from 'react'
import Skeleton from "react-loading-skeleton"

function RenderImage({src, cls="",}) {
  const [isLoading, setIsLoading] = useState(true)
  const handleLoaded = () =>{
    console.log('load');
    setIsLoading(false)
  }
  return (
    <>
     {
      isLoading  && <Skeleton duration={0.7} className={"h-80 "} />
     }
    {
       src && <img className={isLoading?"hidden":"block" + " rounded-md  w-full h-[400px] object-cover"} src={src} onLoad={handleLoaded} />
    }
    </>
  )
}

export default RenderImage