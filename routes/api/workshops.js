const express = require('express');
const router = express.Router();
const workshopsCtrl = require('../../controllers/workshops');

/*********** P R O T E C T E D ***********/

router.use(require('../../config/auth'));
router.get('/', workshopsCtrl.getAllWorkshops);
router.post('/', checkAuth, workshopsCtrl.create);
router.delete('/:id', checkAuth, workshopsCtrl.deleteWorkshop);

/*********** H E L P E R S *********/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;