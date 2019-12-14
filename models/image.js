const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    lowercase: true // Always convert `test` to lowercase
  },
  category: String,
  name: String
},{
  timestamps: true
});

module.exports = mongoose.model('Image', imageSchema);