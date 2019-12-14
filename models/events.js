const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  url: {
    type: String,
    lowercase: true 
  },
  date: Date,
  location: String,
  details: String
},{
  timestamps: true
});

module.exports = mongoose.model('Event', eventSchema);