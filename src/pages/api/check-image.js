require('dotenv').config()
const axios = require("axios")
export default async function handler(req, res) {
  const response = await axios.get("https://api.thenextleg.io/v2/message/"+req.query.id,{
      headers:  {
        Authorization : process.env.NEXT_LEG,
        'Content-Type': 'application/json'
      }
    })

  res.send(response.data)
  // res.status(200).json({ name: 'John Doe' })
}
