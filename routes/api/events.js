const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/events');

/*********** P R O T E C T E D ***********/

router.use(require('../../config/auth'));
router.get('/', eventsCtrl.getAllEvents);
router.post('/', checkAuth, eventsCtrl.create);
router.delete('/:id', checkAuth, eventsCtrl.deleteEvent);

/*********** H E L P E R S *********/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;