const tasksService = require('../services/tasksServices');
const { OK } = require('../constants/statusCodes');

const getAll = async (_req, res) => {
  const tasks = await tasksService.getAll();
  return res.status(OK).json({ error: null, result: tasks });
};

module.exports = {
  getAll,
};
