const express = require('express');
const {
  createDeveloper,
  getDeveloperApplications,
} = require('../controllers/developerController');

const router = express.Router();

router.post('/', createDeveloper);
router.get('/:developerId/applications', getDeveloperApplications);

module.exports = router;
