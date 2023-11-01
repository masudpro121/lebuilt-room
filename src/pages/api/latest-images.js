import { HistoryModel } from "@/models/HistoryModel";
import { dbConnect } from "@/utils/dbConnect";

export default async function handler(req, res){
  await dbConnect()
  HistoryModel.find().limit(4)
  .then(dbRes=>{
    const outputs = dbRes.map(item=>item.output.imageUrls)
    res.send([].concat(...outputs))
  })
}