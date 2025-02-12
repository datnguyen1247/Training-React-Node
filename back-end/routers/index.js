const express = require('express');
const shopRouter = require('./shopRouter')
const customizationRouter = require('./customizationRouter')
const translationRouter = require('./translationRouter')
const authRouter = require('./authRouter')


const router = express.Router();

router.use('/shop', shopRouter);
router.use('/customization', customizationRouter);
router.use('/translation', translationRouter);
router.use('/login', authRouter);

module.exports =  router
