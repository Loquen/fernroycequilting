const Workshop = require('../models/workshop');

module.exports = {
  getAllWorkshops,
  create,
  update,
};

// Return All Workshops
async function getAllWorkshops(req, res) {
  let workshops = await Workshop.find({});
  return res.json(workshops);
}

// Add New Workshop
async function create(req, res) {
  let workshop = new Workshop(req.body);
  workshop.save(function(err){
    if(err) {
      return res.json({ error: err });
    }
    return res.json(workshop);
  });
}

// Edit Existing Workshop
async function update(req, res) {

}
