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

  // return Event.create(req.body)
  //   .then(() => (res.redirect('/event')))
                  
  var event = new Event(req.body);

  // console.log(event);
  event.save(function(err){
    if(err) {
      console.log(err);
      return res.json({ error: err });
    }
    console.log(event);
    return res.json(event);
  });
}

async function update(req, res) {

}
