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
      <div className=" md:p-5 md:bg-slate-100">
        <div className=" bg-white md:p-5">
          <div className="md:border-2 border-[#FBE8D0]">
          <div className="bg-[#F2F1EF] py-3 px-3 rounded-md font-semibold noto-sans text-md md:text-xl mt-4 mb-2 w-[85%] m-auto">我的人工智能生成的图像</div>
          <CollectionHistory data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default History