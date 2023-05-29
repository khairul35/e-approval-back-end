exports.User = (data) => {
    return {
        id: data.id || 0,
        username: data.username || null,
        password: data.password || null,
        xeroAccessToken: data.xeroAccessToken || null,
        xeroRefreshToken: data.xeroRefreshToken || null,
        name: data.name || null,
    };
};
