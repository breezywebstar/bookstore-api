const express = require('express');

const router = express.Router();

const bookuserCtrl = require('../controller/bookusercontrolla');

router.post('/signup', bookuserCtrl.signup);
router.post('/login', bookuserCtrl.login);

module.exports = router; 

//https://www.noon.com/uae-en/wireless-over-ear-headphones-black/N40037890A/p/?o=baf885f4a547377c