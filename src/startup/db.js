const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '34.87.174.50',
  user: 'root',
  password: 'Biskut35!',
  database: 'highrule',
  connectionLimit: 10,
  typeCast: function (field, next) {
    if (field.type === 'JSON') {
      return JSON.parse(field.string());
    }
    return next();
  }
});

// Execute a query using the connection pool
function executeQuery(query, value) {
  pool.query(query, values, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      callback(error, null);
      return;
    }
    callback(null, results);
  });
}

// Close the connection pool
function closeConnection() {
  pool.end((error) => {
    if (error) {
      console.error('Error closing connection pool:', error);
      return;
    }
    console.log('Connection pool closed');
  });
}

pool.query('use highrule');

module.exports = pool;