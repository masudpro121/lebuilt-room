const checkImage = (msgid, onBoard) => {
  return fetch('/api/check-image?id='+msgid, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    }, 
    body: JSON.stringify(onBoard)
  })
  .then(res=>res.json())
  .then(res=>{
    if(res.progress == 100){
      return {progress:res.progress, groupImage: res.imageUrl, images: res.response.imageUrls}
    }else if(res.progress > 0){
        return {progress:res.progress, progressImage: res.progressImageUrl}
    }else{
      return { progress:res.progress}
    }
  })
}

export default checkImage