const { Product } = require('../mapper/Product');
const { request } = require('./index');
const query = require('./ProductQuery');

const findAllProducts = async (tenantId) => {
    const products = (await request(query.findAllProducts(tenantId))).map(Product);
    return products;
};
exports.findAllProducts = findAllProducts;

const findProductById = async (productId) => {
    const product = Product(await request(query.findProductById(productId), true));
    return product;
};

exports.updateProduct = async (productId, body) => {
    await request(query.updateProduct(productId, body));
    return findProductById(productId);
};

exports.createProduct = async (tenantId, body) => {
    await request(query.createProduct(tenantId, body));
    return findAllProducts(tenantId);
};

const findCategory = async (tenantId) => {
    const categories = await request(query.findCategory(tenantId));
    return categories;
};
exports.findCategory = findCategory;

exports.createCategory = async (tenantId, body) => {
    await request(query.createCategory(tenantId, body));
    return findCategory(tenantId);
};
