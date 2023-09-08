require("dotenv").config();
const multer = require("multer");
import uploadImage from "@/utils/uploadImage";
import { v2 as cloudinary } from "cloudinary";
import { createRouter, expressWrapper } from "next-connect";

export const config = {
  api: {
    bodyParser: false,
  },
};
const upload = multer({ storage: multer.memoryStorage() });
const router = createRouter();

router.use(upload.single("file")).post(async (req, res) => {
  uploadImage(req.file, ""+Date.now()+req.file.originalname)
  .then(uploadResult=>{
    console.log(uploadResult);
    res.send(uploadResult)
  })
})


export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});