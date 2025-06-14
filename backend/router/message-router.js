const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message-controller');
const Partner = require('../models/partner-model')


router.route("/partnerMessage").post(messageController.partnerMessage);
router.route("/investMessage").post(messageController.investMessage);
router.route("/subscribeUs").post(messageController.subscribeEmail);


module.exports=router;