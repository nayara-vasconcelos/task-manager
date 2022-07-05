const tasksModel = require('../models/tasksModel');

const getAll = async () => {
  const tasks = await tasksModel.getAll();
  return (tasks);
};

module.exports = {
  getAll,
};
