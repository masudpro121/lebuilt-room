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
      isLoading  && <div className="">
        <Skeleton duration={0.7} className={"!w-80 !h-80 sm:!w-[500px] sm:!h-[400px]"} />
      </div>
     }
    {
      //  src && <img className={isLoading?"hidden":"block" + " rounded-2xl sm:rounded-md  w-full h-full max-w-[500px] m-auto sm:h-[400px] object-cover "} src={src} onLoad={handleLoaded} />
       src && <img className={isLoading?"hidden":"block" + " rounded-2xl sm:rounded-md  w-full h-full m-auto object-cover "} src={src} onLoad={handleLoaded} />
    }
    </>
  )
}

export default RenderImage