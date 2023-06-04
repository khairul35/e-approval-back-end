exports.LineItem = (data) => {
    const total = calculateTotal(
        removeDecimals(data.Quantity),
        formatDecimal(data.UnitAmount),
        formatDecimal(data.DiscountRate),
        formatDecimal(data.TaxAmount),
    )
    return {
      lineItemID: data.LineItemID || 0,
      purchaseOrderID: data.PurchaseOrderID || 0,
      description: data.Description || null,
      quantity: removeDecimals(data.Quantity),
      unitAmount: formatDecimal(data.UnitAmount),
      itemCode: data.ItemCode,
      accountCode: data.AccountCode,
      taxType: data.TaxType,
      discountRate: formatDecimal(data.DiscountRate),
      tracking: data.Tracking,
      taxAmount: formatDecimal(data.TaxAmount),
      lineAmount: formatDecimal(data.LineAmount),
      subtotal: total.subtotal,
      total: total.total,
    };
};

function removeDecimals(numberString) {
  const number = parseFloat(numberString);
  return Math.floor(number);
};

function formatDecimal(numberString) {
  const number = parseFloat(numberString);
  return number.toFixed(2);
};

function calculateTotal(qty, unitAmount, discount, tax) {
  const subtotal = qty * unitAmount;
  const discountAmount = subtotal * (discount / 100);
  const subtotalAfterDiscount = subtotal - discountAmount;
  const total = subtotalAfterDiscount + (tax * subtotalAfterDiscount);
  
  return {
    subtotal: subtotal.toFixed(2),
    total: total.toFixed(2)
  };
};
