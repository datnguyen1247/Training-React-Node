const express = require('express');
const shopRouter = require('./shopRouter')
const customizationRouter = require('./customizationRouter')
const translationRouter = require('./translationRouter')


const router = express.Router();

router.use('/shop', shopRouter);
router.use('/customization', customizationRouter);
router.use('/translation', translationRouter);

module.exports =  router
