const connection = require('../startup/db');

const request = async (sql, findOne) => {
  const result = await connection.promise().query(sql);
  if (findOne) return result[0].length > 0 ? result[0][0] : {};
  return result[0];
};
exports.request = request;

exports.qstring = (item) => {
  if (!item) return 'NULL';
  return `'${item}'`;
};

exports.qbit = (item) => {
  if (item) return 1;
  return 0;
};

exports.qint = (item) => {
  if (!item) return 0;
  return item;
}
