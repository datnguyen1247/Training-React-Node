const express  = require('express');
const translationController =  require('../controllers/translationController.js');
const router = express.Router();

router.get('/', translationController.getAll);
router.get('/:locale', translationController.getOne);
router.delete('/:locale', translationController.destroy);
router.post('/', translationController.add);
router.post('/:id', translationController.update);

module.exports = router