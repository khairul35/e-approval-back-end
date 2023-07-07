const AuthRepository = require('../repository/AuthenticationRepository');
const Repository = require('../repository/ProductRepository');

exports.findAllProducts = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const products = await Repository.findAllProducts(tenantId);
        return res.send(products);
    } catch (err) {
        return next(err);
    }
};

exports.updateProduct = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await Repository.updateProduct(productId, req.body);
        return res.send(product);
    } catch (err) {
        return next(err);
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        const { tenantId } = req.params;
        const products = await Repository.createProduct(tenantId, req.body);
        return res.send(products);
    } catch (err) {
        return next(err);
    }
};

exports.findAllCategory = async (req, res, next) => {
    try {
        const { tenantId } = req.query;
        const category = await Repository.findCategory(tenantId);
        return res.send(category);
    } catch (err) {
        return next(err);
    }
};

exports.createCategory = async (req, res, next) => {
    try {
        const { tenantId } = req.params;
        const category = await Repository.createCategory(tenantId, req.body);
        return res.send(category);
    } catch (err) {
        return next(err);
    }
};
