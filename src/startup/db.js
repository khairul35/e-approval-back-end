const mysql = require('mysql2');

/** Create a connection to the DB */
const connection = mysql.createConnection({
    host: '34.87.174.50',       // MySQL server host
    user: 'root',               // MySQL username
    password: 'Biskut35!',      // MySQL password
    database: 'highrule',        // MySQL database name
    typeCast: function (field, next) {
        // Default typeCast implementation
        if (field.type === 'JSON') {
            return JSON.parse(field.string());
        }
        return next();
    }
});

/** Connect to the DB */
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ', err);
        return;
    }
    console.log('Connected to MySQL server');
});

connection.query('use highrule');

module.exports = connection;
