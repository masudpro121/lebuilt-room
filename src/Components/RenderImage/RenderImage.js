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
      isLoading  && <div className="flex justify-center">
        <Skeleton duration={0.7} className={"!w-80 !h-80 sm:!w-[500px] sm:!h-[400px]"} />
      </div>
     }
    {
       src && <img className={isLoading?"hidden":"block" + " rounded-md  w-full max-w-[500px] m-auto h-[400px] object-cover"} src={src} onLoad={handleLoaded} />
    }
    </>
  )
}

export default RenderImage