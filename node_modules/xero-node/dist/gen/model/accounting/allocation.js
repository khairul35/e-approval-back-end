"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allocation = void 0;
class Allocation {
    static getAttributeTypeMap() {
        return Allocation.attributeTypeMap;
    }
}
exports.Allocation = Allocation;
Allocation.discriminator = undefined;
Allocation.attributeTypeMap = [
    {
        "name": "invoice",
        "baseName": "Invoice",
        "type": "Invoice"
    },
    {
        "name": "overpayment",
        "baseName": "Overpayment",
        "type": "Overpayment"
    },
    {
        "name": "prepayment",
        "baseName": "Prepayment",
        "type": "Prepayment"
    },
    {
        "name": "creditNote",
        "baseName": "CreditNote",
        "type": "CreditNote"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "date",
        "baseName": "Date",
        "type": "string"
    },
    {
        "name": "statusAttributeString",
        "baseName": "StatusAttributeString",
        "type": "string"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
//# sourceMappingURL=allocation.js.map