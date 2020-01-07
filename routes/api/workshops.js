const express = require('express');
const router = express.Router();
const workshopsCtrl = require('../../controllers/workshops');

/*********** P R O T E C T E D ***********/

router.use(require('../../config/auth'));
router.get('/', workshopsCtrl.getAllWorkshops);
router.post('/', workshopsCtrl.create);
// router.put('/:id', checkAuth, eventsCtrl.edit);

/*********** H E L P E R S *********/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;