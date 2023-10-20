import { HistoryModel } from "@/models/HistoryModel";
import { dbConnect } from "@/utils/dbConnect";
const jwt = require('jsonwebtoken')

export default async function handler(req, res){
  await dbConnect()
  const {token} = req.cookies
  if(token){
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    HistoryModel.find({email:decoded.email}).limit(10)
    .then(dbRes=>{
      const outputs = dbRes.map(item=>item.output.imageUrls)
      res.send([].concat(...outputs))
    })
  }
  
 
}