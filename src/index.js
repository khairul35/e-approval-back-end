const express = require('express');
const app = express();

require('./startup/db');
require('./startup/routes')(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Register to port ${port}`));
module.exports = server;
