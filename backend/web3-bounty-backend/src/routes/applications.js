const express = require('express');
const { applyForBounty } = require('../controllers/applicationController');

const router = express.Router();

router.post('/', applyForBounty);

module.exports = router;
