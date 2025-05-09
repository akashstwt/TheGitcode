const express = require('express');
const {
  createRepo,
  releaseWinner,
} = require('../controllers/repoController');

const router = express.Router();

router.post('/', createRepo);
router.post('/:repoId/winner', releaseWinner);

module.exports = router;
