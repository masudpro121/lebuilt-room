require("dotenv").config();
const axios = require("axios");
export default async function handler(req, res) {
  const response = await axios.post(
    "https://api.thenextleg.io/v2/imagine",
    {
      msg: req.body.prompt || "Generate a random image",
      ref: "",
      webhookOverride: "",
    },
    {
      headers: {
        Authorization: process.env.NEXT_LEG,
        "Content-Type": "application/json",
      },
    }
  );

  res.send(response.data);
  // res.status(200).json({ name: 'John Doe' })
}
