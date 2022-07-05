const express = require('express');
const statusesRouter = require('./statuses');
const tasksRouter = require('./tasks');

const router = express.Router();

router.use('/statuses', statusesRouter);
router.use('/tasks', tasksRouter);

module.exports = router;
