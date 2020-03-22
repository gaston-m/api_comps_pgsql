const router = require('express').Router();
const { comps } = require('../controllers/index');

router.get('/', comps.getComps);
router.get('/:id', comps.getComp);
router.get('/user/:userid', comps.getCompsUser);
router.post('/', comps.create);


module.exports = router;