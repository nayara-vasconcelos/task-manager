const statusesService = require('../services/statusesServices');
const { OK } = require('../constants/statusCodes');

const getAll = async (_req, res) => {
  const statuses = await statusesService.getAll();
  return res.status(OK).json({ error: null, result: statuses });
};

module.exports = {
  getAll,
};
