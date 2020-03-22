const router = require('express').Router();
const { users } = require('../controllers/index');

router.get('/', users.getUsers);
router.get('/:id', users.getUser);
router.post('/', users.create);


module.exports = router;