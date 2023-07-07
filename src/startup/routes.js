const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { corsOption } = require('./cors');
const { errorMiddleware } = require('../middleware/error');
const PurchaseOrder = require('../routes/PuchaseOrder');
const Contact = require('../routes/Contact');
const Connection = require('../routes/Connection');
const Authentication = require('../routes/Authentication');
const Currency = require('../routes/Currency');
const Product = require('../routes/Product');
const User = require('../routes/User');

module.exports = function (app) {
    app.use(express.json());
    app.use(helmet());
    app.use(cors(corsOption));
    app.use('/api/purchase-order', PurchaseOrder);
    app.use('/api/auth', Authentication);
    app.use('/api/connection', Connection);
    app.use('/api/contact', Contact);
    app.use('/api/currency', Currency);
    app.use('/api/product', Product);
    app.use('/api/user', User);
    /** Error Middleware must be at the end of function so that next hook is function */
    app.use(errorMiddleware);
};
