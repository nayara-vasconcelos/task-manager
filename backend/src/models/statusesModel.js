const connection = require('./connection');

const getAll = async () => {
  const query = `SELECT * FROM TaskManager.statuses
  ORDER BY id ASC`;

  const [statuses] = await connection.execute(query);
  return statuses;
};

module.exports = {
  getAll,
};
