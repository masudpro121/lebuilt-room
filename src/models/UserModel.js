const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  picture: String,
  uid: String
})

export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)

