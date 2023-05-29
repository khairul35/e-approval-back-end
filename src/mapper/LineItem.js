exports.LineItem = (data) => {
    const total = calculateTotal(
        removeDecimals(data.Quantity),
        formatDecimal(data.UnitAmount),
        formatDecimal(data.DiscountRate),
        formatDecimal(data.TaxAmount),
    )
    return {
      LineItemID: data.LineItemID || 0,
      PurchaseOrderID: data.PurchaseOrderID || 0,
      Description: data.Description || null,
      Quantity: removeDecimals(data.Quantity),
      UnitAmount: formatDecimal(data.UnitAmount),
      ItemCode: data.ItemCode,
      AccountCode: data.AccountCode,
      TaxType: data.TaxType,
      DiscountRate: formatDecimal(data.DiscountRate),
      Tracking: data.Tracking,
      TaxAmount: formatDecimal(data.TaxAmount),
      LineAmount: formatDecimal(data.LineAmount),
      Subtotal: total.subtotal,
      LineAmount: total.total,
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
