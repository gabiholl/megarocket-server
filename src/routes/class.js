const express = require('express');
const classController = require('../controllers/class');
const validations = require('../validations/class');

const classRouter = express.Router();

classRouter
  .get('/search', classController.getAllClass)
  .get('/:id', classController.getClassById)
  .post('/', validations.validateCreation, classController.createClass)
  .put('/:id', validations.validateUpdate, classController.updateClass)
  .put('/:id', classController.deleteClass)
  .put('/assign/trainer', validations.validateAssignTrainer, classController.assignTrainer);

module.exports = classRouter;
