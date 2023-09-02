// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config()
const axios = require('axios')
export default function handler(req, res) {
  const {code, state} = req.query
  getAccessToken({code})
  .then(idToken=>{
    getProfile({idToken})
    .then(result=>{
      console.log(result, 'profile');
      res.redirect(307, `/?name=${result.name}?email=${result.email}?picture=${result.picture}`)
    })
  })

}


const getProfile = ({idToken}) => {
  const data = new URLSearchParams()
  data.append('client_id', process.env.LINE_CLIENT)
  data.append('id_token', idToken)

  return axios.post("https://api.line.me/oauth2/v2.1/verify", data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  .then(result=> result.data)
}


const getAccessToken = ({code}) => {
  const data = new URLSearchParams()
  data.append('grant_type', 'authorization_code')
  data.append('code', code)
  data.append('redirect_uri', 'http://localhost:3000/api/line-auth')
  data.append('client_id', process.env.LINE_CLIENT)
  data.append('client_secret', process.env.LINE_SECRET)

  return axios.post("https://api.line.me/oauth2/v2.1/token", data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
  .then(result=> result.data.id_token)
}