const Event = require('../models/event');


module.exports = {
  getAllEvents,
  create,
  update,
};

// Return All Events
async function getAllEvents(req, res) {
  let events = await Event.find({});
  return res.json(events);
}

// Add New Event
async function create(req, res) {
  let event = new Event(req.body);
  event.save(function(err){
    if(err) {
      return res.json({ error: err });
    }
    return res.json(event);
  });
}

// Edit Existing Event
async function update(req, res) {

}
