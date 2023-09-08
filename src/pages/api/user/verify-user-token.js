import { dbConnect } from "@/utils/dbConnect"

const jwt = require('jsonwebtoken')
require('dotenv').config()

export default async function handler(req, res) {
  const {token} = req.cookies
  if(token){
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    res.json(decoded)
  }else{
    res.json({})
  }
 }