const express  = require('express');
const customizationController =  require('../controllers/customizationController.js');
const router = express.Router();

router.put('/', customizationController.store);

module.exports = router