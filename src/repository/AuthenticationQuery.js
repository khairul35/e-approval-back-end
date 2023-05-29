const { qstring, qbit, qint } = require('./index')

exports.signUp =  ({ username, password, name }) => {
    return `INSERT INTO users
        (username, password, name) VALUES
        (${qstring(username)}, ${qstring(password)}, ${qstring(name)})`;
};

exports.findUserByUsername = (username) => {
    return `SELECT * FROM users WHERE username=${qstring(username)}`;
};

exports.insertXeroToken = (username, accessToken, refreshToken) => {
    return `UPDATE users SET
        xeroAccessToken=${qstring(accessToken)},
        xeroRefreshToken=${qstring(refreshToken)}
        WHERE username=${qstring(username)}`
};

exports.updateXeroRefreshToken = (oldToken, newToken, accessToken) => {
    return `UPDATE users SET xeroRefreshToken=${qstring(newToken)},
        xeroAccessToken = ${qstring(accessToken)}
        WHERE xeroRefreshToken=${qstring(oldToken)}`;
};

