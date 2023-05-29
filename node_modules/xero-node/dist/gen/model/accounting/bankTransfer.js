"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransfer = void 0;
class BankTransfer {
    static getAttributeTypeMap() {
        return BankTransfer.attributeTypeMap;
    }
}
exports.BankTransfer = BankTransfer;
BankTransfer.discriminator = undefined;
BankTransfer.attributeTypeMap = [
    {
        "name": "fromBankAccount",
        "baseName": "FromBankAccount",
        "type": "Account"
    },
    {
        "name": "toBankAccount",
        "baseName": "ToBankAccount",
        "type": "Account"
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
        "name": "bankTransferID",
        "baseName": "BankTransferID",
        "type": "string"
    },
    {
        "name": "currencyRate",
        "baseName": "CurrencyRate",
        "type": "number"
    },
    {
        "name": "fromBankTransactionID",
        "baseName": "FromBankTransactionID",
        "type": "string"
    },
    {
        "name": "toBankTransactionID",
        "baseName": "ToBankTransactionID",
        "type": "string"
    },
    {
        "name": "fromIsReconciled",
        "baseName": "FromIsReconciled",
        "type": "boolean"
    },
    {
        "name": "toIsReconciled",
        "baseName": "ToIsReconciled",
        "type": "boolean"
    },
    {
        "name": "reference",
        "baseName": "Reference",
        "type": "string"
    },
    {
        "name": "hasAttachments",
        "baseName": "HasAttachments",
        "type": "boolean"
    },
    {
        "name": "createdDateUTC",
        "baseName": "CreatedDateUTC",
        "type": "Date"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
//# sourceMappingURL=bankTransfer.js.map