const Image = require('../models/image');

module.exports = {
  getAllImages,
  create,
  update,
};

// Return All Images
async function getAllImages(req, res) {
  let images = await Image.find({});
  return res.json(images);
}

// Add New Image
async function create(req, res) {
  let image = new Image(req.body);
  image.save(function(err){
    if(err) {
      return res.json({ error: err });
    }
    return res.json(image);
  });
}

// Edit Existing Event
async function update(req, res) {

}
