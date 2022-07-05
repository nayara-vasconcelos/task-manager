const express = require('express');
const rescue = require('express-rescue');

const { getAll } = require('../../controllers/statusesController');

const statusesRouter = express.Router();

statusesRouter.get('/', rescue(getAll));

module.exports = statusesRouter;
