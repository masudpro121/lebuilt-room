const mongoose = require('mongoose')

const HistorySchema = new mongoose.Schema({
  email: String,
  onBoard: {},
  output: {}
})

export const HistoryModel = mongoose.models.History || mongoose.model('History', HistorySchema)

