const jwt = require('jsonwebtoken');
const jwtsk = 'secret key';
const bcrypt = require('bcrypt');
const repository = require('../repository/AuthenticationRepository');
const CustomError = require('../utils/error');
const Xero = require('../services/Xero');

exports.signUp = async (req, res, next) => {
    try {
        const { username, password, name } = req.body;
        /** Check if username is exists */
        const user = await repository.findUserByUsername(username);
        if (user.id) throw new CustomError(409, 'Username has been exist');

        const hash = await bcrypt.hash(password, 10);
        await repository.signUp({ username, password: hash, name });
        return res.send('Account created successfully');
    } catch (err) {
        return next(err);
    }
}

exports.signIn = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        /** Check if username is exists */
        const user = await repository.findUserByUsername(username);
        if (!user.id) throw new CustomError(404, 'Username not exist');

        /** Check if password is match or not */
        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new CustomError(400, 'Password not match');
        
        const token = jwt.sign({ username }, jwtsk);
        return res.send({
            accessToken: token,
        });
    } catch (err) {
        return next(err);
    }
};

exports.registerXero = async (req, res, next) => {
    try {
        const token = await Xero.generateToken(req.query.code);
        const { username } =  await repository.findCurrentUser(req);
        await repository.insertXeroToken(username, token.access_token, token.refresh_token);
        return res.send('registered xero successfully');
    } catch (err) {
        return next(err);
    }
};
