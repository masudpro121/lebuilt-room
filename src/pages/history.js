import CollectionHistory from "@/Components/CollectionHistory/CollectionHistory"
import Header from "@/Components/Header/Header"
import React, { useEffect, useState } from 'react'

const History = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("/api/history")
    .then(res=>res.json())
    .then(res=>{
      setData(res)
    })

  },[])
  return (
    <div>
      <Header />
      <div className="bg-[#F2F1EF] py-3 px-3 rounded-md font-[Gilroy-SemiBold] text-xl mt-4 mb-2 w-[85%] m-auto">My AI Generated Images</div>
      <CollectionHistory data={data} />
    </div>
  )
}

export default History