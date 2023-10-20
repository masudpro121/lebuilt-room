import CollectionHistory from "@/Components/CollectionHistory/CollectionHistory"
import Header from "@/Components/Header/Header"
import React, { useEffect, useState } from 'react'

const Collection = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    // const  myuid = JSON.parse(localStorage.getItem("user"))?.uid
    fetch("/api/collection")
    .then(res=>res.json())
    .then(res=>{
      setData(res)
    })

  },[])
  return (
    <div>
      <Header />
      <CollectionHistory data={data} />
    </div>
  )
}

export default Collection