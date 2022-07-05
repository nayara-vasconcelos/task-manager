const connection = require('./connection');

const formatTask = (obj) => ({
  id: obj.id,
  title: obj.title,
  description: obj.description,
  createdAt: obj.created_at,
  updatedAt: obj.updated_at,
  statusId: obj.status_id,
});

const getAll = async () => {
  const query = `SELECT * FROM TaskManager.tasks
  ORDER BY id ASC`;

  const [tasks] = await connection.execute(query);
  const formattedTasks = tasks.map((obj) => formatTask(obj));
  return formattedTasks;
};

module.exports = {
  getAll,
};
