const express  = require('express');
const shopController =  require('../controllers/shopController.js');
const router = express.Router();

router.get('/', shopController.get);
// router.get('/', shopController.getAll);
router.post('/', shopController.add);

module.exports = router