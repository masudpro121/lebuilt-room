import React from 'react'
import RenderImage from "../RenderImage/RenderImage"

function ShowGeneratedImage({src}) {
  return (
    <div>
      <RenderImage src={src}/>
    </div>
  )
}

export default ShowGeneratedImage