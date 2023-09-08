const generateImage = ({ prompt}) => {
  return new Promise((resolve, reject)=>{
    fetch('/api/generate-image', {
      method: 'POST', 
      headers : {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        prompt: prompt
      })
    })
    .then(res=>res.json())
    .then(res=>{
      if(res.success){
        resolve(res.messageId)
      }else{
        reject({statusCode:0, status:'Something Wrong'})
      }
    })
  })
}


export default generateImage