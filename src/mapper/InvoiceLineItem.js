exports.InvoiceLineItem = (data) => {
  return {
    id: data.id || 0,
    invoiceId: data.invoice_id || 0,
    description: data.description || null,
    quantity: data.quantity || 0,
    unitAmount: data.unit_amount || 0.00,
    accountCode: data.account_code || null,
    taxType: data.tax_type || null,
    lineAmount: data.line_amount || 0.00,
    category: data.category || null,
    discountRate: data.discount_rate || 0,
  };
};
