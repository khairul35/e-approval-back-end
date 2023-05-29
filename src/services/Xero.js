const { XeroClient } = require('xero-node');
const CustomError = require('../utils/error');
const axios = require('axios');
const AuthRepository = require('../repository/AuthenticationRepository');

const clientId = '219C2261C03B4A3685DF6EDC898EAD97';
const clientSecret = 'x1E_RdPfZxxtC4eICylkSqsrwXZLju8sM1NISfzLL2M6YaAd';
const redirectUris = 'http://localhost/';

const xero = new XeroClient({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUris: [redirectUris],
    scopes: 'openid profile email accounting.transactions accounting.transactions.read offline_access'.split(' '),
});

xero.initialize();

/************************************************************************* */
/** Authentication */
/************************************************************************* */

exports.generateToken = async (code) => {
    const headers = {
        'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('code', code);
    params.append('redirect_uri', redirectUris);
    const { data } = await axios.post('https://identity.xero.com/connect/token', params.toString(), { headers })
        .catch(({ response }) => {
            console.log(response);
            throw new CustomError(response.data.Status, response.data.Title);
        });
    return data;
};

const generateRefreshToken = async (token) => {
    if (!token) throw new CustomError(404, "No token");
    const headers = {
        'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', token);
    const { data } = await axios.post('https://identity.xero.com/connect/token', params, { headers })
        .catch(({ response }) => {
            console.log(response);
            throw new CustomError(response.status, response.data.error);
        });
    AuthRepository.updateXeroRefreshToken(token, data.refresh_token, data.access_token);
    return data;
};

exports.refreshToken = generateRefreshToken;

/************************************************************************* */
/** Purchase Order */
/************************************************************************* */

exports.findAllPurchaseOrder = async (refreshToken, tenantId) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Xero-tenant-id': tenantId,
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json',
    };
    const { data } = await axios.get('https://api.xero.com/api.xro/2.0/PurchaseOrders', { headers })
        .catch(({ response }) => {
            console.log(response);
            throw new CustomError(response.data.Status, response.data.Title);
        });
    return data;
};

exports.createPurchaseOrder = async (refreshToken, tenantId, body) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Xero-tenant-id': tenantId,
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json',
    };
    const { data } = await axios.post(
        'https://api.xero.com/api.xro/2.0/PurchaseOrders',
        formatDate(removeNullKeys(body)),
        { headers }
    ).catch(({ response }) => {
        throw new CustomError(response.status, response.statusText);
    });
    return data.PurchaseOrders[0];
};

exports.updatePurchaseOrder = async (refreshToken, tenantId, body, id) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Xero-tenant-id': tenantId,
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json',
    };
    const { data } = await axios.post(
        `https://api.xero.com/api.xro/2.0/PurchaseOrders/${id}`,
        formatDate(removeNullKeys(body)),
        { headers }
    ).catch(({ response }) => {
        throw new CustomError(response.status, response.statusText);
    });
    return data.PurchaseOrders[0];
};

/************************************************************************* */
/** Contact */
/************************************************************************* */

exports.findAllContact = async (refreshToken, tenantId) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Xero-tenant-id': tenantId,
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json',
    };
    const { data } = await axios.get('https://api.xero.com/api.xro/2.0/Contacts', { headers })
        .catch(({ response }) => {
            console.log(response);
            throw new CustomError(response.data.Status, response.data.Title)
        });
    return data;
};

exports.createContact = async (refreshToken, tenantId, body) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Xero-tenant-id': tenantId,
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    const { data } = await axios.post('https://api.xero.com/api.xro/2.0/Contacts', body, { headers })
        .catch(({ response }) => {
            console.log(response.data);
            throw new CustomError(response.status, response.statusText)
        });
    return data;
};

exports.updateContact = async (refreshToken, tenantId, contactId, body) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Xero-tenant-id': tenantId,
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    const { data } = await axios.post(`https://api.xero.com/api.xro/2.0/Contacts/${contactId}`, body, { headers })
        .catch(({ response }) => {
            console.log(response);
            throw new CustomError(response.data.Status, response.data.Title);
        });
    return data;
};

/************************************************************************* */
/** Currencies */
/************************************************************************* */

exports.findCurrencies = async (refreshToken, tenantId) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Xero-tenant-id': tenantId,
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    const { data } = await axios.get(`https://api.xero.com/api.xro/2.0/Currencies`, { headers })
        .catch(({ response }) => {
            console.log(response);
            throw new CustomError(response.data.Status, response.data.Title);
        });
    return data.Currencies;
};

exports.addCurrency = async (refreshToken, tenantId, body) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Xero-tenant-id': tenantId,
        'Authorization': 'Bearer ' + accessToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    };
    const { data } = await axios.put(
        'https://api.xero.com/api.xro/2.0/Currencies',
        body,
        headers,
    ).catch(({ response }) => {
        console.log(response);
        throw new CustomError(response.data.Status, response.data.Title);
    });
    return data.Currencies;
};

/************************************************************************* */
/** Connection */
/************************************************************************* */
exports.findAllConnection = async (refreshToken) => {
    const { access_token: accessToken } = await generateRefreshToken(refreshToken);
    const headers = {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
    };
    const { data } = await axios.get('https://api.xero.com/connections', { headers })
        .catch(({ response }) => {
            throw new CustomError(response.data.Status, response.data.Title)
        });
    return data;
};


function removeNullKeys(obj) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === null) {
      delete obj[key];
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      removeNullKeys(obj[key]); // Recursively check and remove null-valued keys
    } else if (Array.isArray(obj[key])) {
      // Handle arrays
      const arr = obj[key];
      for (let i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === "object" && arr[i] !== null) {
          removeNullKeys(arr[i]); // Recursively check and remove null-valued keys in objects within the array
          if (Object.keys(arr[i]).length === 0) {
            arr.splice(i, 1); // Remove the object from the array if it has no non-null key-value pairs
          }
        }
      }
      if (arr.length === 0) {
        delete obj[key]; // Remove the entire array if it becomes empty
      }
    }
  });
  return obj;
};

function formatDate(obj) {
  Object.keys(obj).forEach((key) => {
    if (obj[key] instanceof Date) {
      obj[key] = obj[key].toISOString().split('T')[0];
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      formatDate(obj[key]); // Recursively format date objects
    } else if (Array.isArray(obj[key])) {
      // Handle arrays
      const arr = obj[key];
      arr.forEach((item) => {
        if (typeof item === 'object' && item !== null) {
          formatDate(item); // Recursively format date objects within the array
        }
      });
    }
  });
  return obj
}

