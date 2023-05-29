"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransactionResponse = void 0;
class BankTransactionResponse {
    static getAttributeTypeMap() {
        return BankTransactionResponse.attributeTypeMap;
    }
}
exports.BankTransactionResponse = BankTransactionResponse;
BankTransactionResponse.discriminator = undefined;
BankTransactionResponse.attributeTypeMap = [
    {
        "name": "bankTransactionId",
        "baseName": "bankTransactionId",
        "type": "string"
    },
    {
        "name": "batchPaymentId",
        "baseName": "batchPaymentId",
        "type": "string"
    },
    {
        "name": "contact",
        "baseName": "contact",
        "type": "ContactResponse"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "lineItems",
        "baseName": "lineItems",
        "type": "Array<LineItemResponse>"
    }
];
//# sourceMappingURL=bankTransactionResponse.js.map