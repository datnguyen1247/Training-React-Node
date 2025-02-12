const express  = require('express');
const translationController =  require('../controllers/translationController.js');
const router = express.Router();

router.delete('/:locale', translationController.destroy);
router.post('/', translationController.add);
router.post('/:id', translationController.update);

module.exports = router