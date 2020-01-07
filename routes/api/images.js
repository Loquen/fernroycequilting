const express = require('express');
const router = express.Router();
const imagesCtrl = require('../../controllers/images');

/*********** P R O T E C T E D ***********/

router.use(require('../../config/auth'));
router.get('/', imagesCtrl.getAllImages);
router.post('/', checkAuth, imagesCtrl.create);
// router.put('/:id', checkAuth, imagesCtrl.edit);

/*********** H E L P E R S *********/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;