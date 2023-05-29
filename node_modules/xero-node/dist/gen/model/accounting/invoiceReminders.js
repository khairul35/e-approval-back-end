"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceReminders = void 0;
class InvoiceReminders {
    static getAttributeTypeMap() {
        return InvoiceReminders.attributeTypeMap;
    }
}
exports.InvoiceReminders = InvoiceReminders;
InvoiceReminders.discriminator = undefined;
InvoiceReminders.attributeTypeMap = [
    {
        "name": "invoiceReminders",
        "baseName": "InvoiceReminders",
        "type": "Array<InvoiceReminder>"
    }
];
//# sourceMappingURL=invoiceReminders.js.map