const query = require('./AuthenticationQuery');
const jwt = require('jsonwebtoken');
const { request } = require('./index');
const { User } = require('../mapper/User');

exports.signUp = async ({ username, password, name }) => {
    await request(query.signUp({ username, password, name }));
    return 'Sign Up Successfully'
};

exports.findUserByUsername = async (username) => {
    return User(await request(query.findUserByUsername(username), true));
};

exports.findCurrentUser = async (req) => {
    const accessToken = req.headers['authorization'].split(' ')[1];
    const decoded = jwt.verify(accessToken, 'secret key');
    const user = User(await request(query.findUserByUsername(decoded.username), true));
    return user
};

exports.insertXeroToken = async (tenantId, accessToken, refreshToken) => {
    await request(query.insertXeroToken(tenantId, accessToken, refreshToken));
    return 'successfully insert xero token';
};

exports.updateXeroRefreshToken = async (oldToken, newToken, accessToken) => {
    await request(query.updateXeroRefreshToken(oldToken, newToken, accessToken));
}
