import React, { useState } from 'react'

function StepUpload() {
  const  [file, setFile] = useState()
  
  const uploadFile = () =>  {
    const formData = new FormData();
    formData.append('file', file);
    fetch('/api/upload-image', {
      method: 'POST',
      body: formData,
     
    })
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
    })
  }
  return (
    <div>
      <div>
        <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
      </div>
      <button className="myBtn mt-3" onClick={uploadFile}>Upload</button>
    </div>
  )
}

export default StepUpload