const { LineItem } = require('../mapper/LineItem');
const query = require('./PurchaseOrderQuery');
const { request } = require('./index');

const findAllPurchaseOrder = async (tenantId, roleId, username) => {
    const POs = await request(query.findAllPurchaseOrder(tenantId, roleId, username));
    for (let PO of POs) {
        let SubTotal = 0;
        let Total = 0;
        PO.lineItems = await findAllLineItemsByPOId(PO.PurchaseOrderID);
        for (let item of PO.lineItems) {
            SubTotal += Number(item.subtotal || 0);
            Total += Number(item.total || 0);
        }
        PO.SubTotal = formatDecimal(SubTotal);
        PO.Total = formatDecimal(Total);
    }
    return POs;
};
exports.findAllPurchaseOrder = findAllPurchaseOrder;

const findPurchaseOrderByID = async (id) => {
    const POs = await request(query.findPurchaseOrderByID(id), true)
    POs.lineItems = await findAllLineItemsByPOId(id);
    let SubTotal = 0;
    let Total = 0;
    for (let item of POs.lineItems) {
        SubTotal += Number(item.subtotal || 0);
        Total += Number(item.total || 0);
    }
    POs.SubTotal = formatDecimal(SubTotal);;
    POs.Total = formatDecimal(Total);
    return POs;
};
exports.findPurchaseOrderByID = findPurchaseOrderByID;

const findAllLineItemsByPOId = async (POId) => {
    return (await request(query.findAllLineItemsByPOId(POId))).map(LineItem);
};

exports.createPurchaseOrder = async (tenantId, username, body) => {
    await request(query.createPurchaseOrder(tenantId, username, body));
    const { id } = await request(query.outputInsertedID(), true);
    for (const lineItem of body.lineItems) {
      await request(query.insertLineItems(id, lineItem));
    }
    return await findPurchaseOrderByID(id);
};

exports.updatePurchaseOrder = async (id, body) => {
    await request(query.updatePurchaseOrder(id, body));
    await request(query.deleteLineItems(id));
    for (const lineItem of body.lineItems) {
      await request(query.insertLineItems(id, lineItem));
    }
    return await findPurchaseOrderByID(id);
};

exports.approvePurchaseOrder = async (id, username) => {
    await request(query.approvePurchaseOrder(id, username));
    return await findPurchaseOrderByID(id);
}

exports.updateXeroPurchaseOrderID = async (id, xeroPurchaseOrderID) => {
    await request(query.updateXeroPurchaseOrderID(id, xeroPurchaseOrderID))
};

function formatDecimal(numberString) {
  const number = parseFloat(numberString);
  return number.toFixed(2);
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

