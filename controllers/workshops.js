const Workshop = require('../models/workshop');

module.exports = {
  getAllWorkshops,
  create,
  update,
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

// Edit Existing Workshop
async function update(req, res) {

}

async function deleteWorkshop(req, res) {
  Workshop.deleteOne({ '_id':req.params.id }, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    return res.json('success');
  })
    // .then(response => response.status(200).json({msg: 'Success'}))
    // .catch(err => res.status(500).json({err}));
  // return res.status(200).json({msg: 'USER DID IT'});
}
