const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
  title: String,
  url: {
    type: String,
    lowercase: true 
  },
  image_text: String,
  details: String
},{
  timestamps: true
});

module.exports = mongoose.model('Workshop', workshopSchema);