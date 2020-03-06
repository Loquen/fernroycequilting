const Event = require('../models/event');


module.exports = {
  getAllEvents,
  create,
  deleteEvent,
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
async function deleteEvent(req, res) {
  Event.deleteOne({ '_id':req.params.id }, function(err, obj) {
    if (err) throw err;
    console.log("1 event deleted");
    return res.json('success');
  })
}
