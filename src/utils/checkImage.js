const checkImage = (msgid) => {
  return fetch('/api/check-image?id='+msgid)
  .then(res=>res.json())
  .then(res=>{
    if(res.progress == 100){
      return {progress:res.progress, images: res.response.imageUrls}
    }else if(res.progress > 0){
        return {progress:res.progress, progressImage: res.progressImageUrl}
    }else{
      return { progress:res.progress}
    }
  })
}

export default checkImage