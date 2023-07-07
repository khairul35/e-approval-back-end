exports.Invoice = (data) => {
  return {
    id: data.id || 0,
    type: data.type || null,
    contactId: data.contact_id || null,
    date: data.date || null,
    dueDate: data.due_date || null,
    reference: data.reference || null,
    status: data.status || null,
    createdBy: data.created_by || null,
    tenantId: data.tenant_id || null,
    xeroInvoiceId: data.xero_invoice_id || null,
    approvedBy: data.approved_by || null,
    approvedDate: data.approved_date || null
  };
};
