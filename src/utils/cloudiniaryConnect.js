import {v2 as cloudinary} from 'cloudinary';
require('dotenv').config()         



let isConnected = false;
async function cloudinaryConnect () {
  return new Promise((resolve, reject)=>{
    if(!isConnected){
      console.log('connecting cloudinary');
       cloudinary.config({ 
        cloud_name: 'dzo4lqjb2', 
        api_key: '228669965573556', 
        api_secret:  process.env.CLOUDINARY_SECRET
      });
      isConnected = true
      resolve('Connected')
    }else{
      console.log('already connected cloudinary');
      resolve('Connected')
    }
  })
}

export default cloudinaryConnect