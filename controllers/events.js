const Event = require('../models/event');


module.exports = {
  getAllEvents,
  create,
  update,
};

async function getAllEvents(req, res) {
  let events = await Event.find({});
  return res.json(events);
}

async function create(req, res) {
  let event = Event.create(req.body)
                  //  .then(
                  //    return(res.json(event)))
}

async function update(req, res) {

}
