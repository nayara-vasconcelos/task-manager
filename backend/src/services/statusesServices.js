const statusesModel = require('../models/statusesModel');

const getAll = async () => {
  const statuses = await statusesModel.getAll();
  return (statuses);
};

module.exports = {
  getAll,
};
