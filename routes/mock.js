"use strict";
var express = require('express');
var router = express.Router();
var mockController = require('../controller/mocks');

router.get('/sms/getotp', mockController.getotp);
router.post('/sms/validateotp', mockController.validateotp);
router.post('/account/openaccount', mockController.createaccount);
router.post('/account/saveuserdetails', mockController.savedetails);
router.get('/account/getuserdetails', mockController.getuserdetails);
router.get('/location/branchlist', mockController.branchlist);
router.get('/bvn/bvnvalidation', mockController.bvnvalidation);

module.exports = router;