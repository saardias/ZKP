const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();

router.post('/start', mainController.start);
router.post('/nextRound', mainController.nextRound);

module.exports = router;