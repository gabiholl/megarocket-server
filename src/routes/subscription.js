const express = require('express');
const subsController = require('../controllers/subscription');

const router = express.Router();

router
  .get('/', subsController.getAllSubs)
  .get('/:id', subsController.getSubById)
  .put('/:id', subsController.updateSub);

module.exports = router;
