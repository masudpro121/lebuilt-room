require('dotenv').config()
const mongoose = require('mongoose')
const DB = process.env.DB_URL
let isConnected = false

export const dbConnect = async() => {
  if(!isConnected){
    return mongoose.connect(DB)
    .then(res=>{
      isConnected = true
      console.log('Connected the Database');
      return "";
    })
  }else{
    return "";
    console.log('DB is already connected');
  }
}