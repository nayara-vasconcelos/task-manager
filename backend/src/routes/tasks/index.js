const express = require('express');
const rescue = require('express-rescue');

const { getAll } = require('../../controllers/tasksController');

const tasksRouter = express.Router();

tasksRouter.get('/', rescue(getAll));

module.exports = tasksRouter;
