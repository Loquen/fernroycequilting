const Workshop = require('../models/workshop');

module.exports = {
  getAllWorkshops,
  create,
  deleteWorkshop
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

async function deleteWorkshop(req, res) {
  Workshop.deleteOne({ '_id':req.params.id }, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    return res.json('success');
  })
}
