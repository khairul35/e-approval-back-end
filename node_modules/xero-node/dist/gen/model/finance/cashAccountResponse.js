"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashAccountResponse = void 0;
class CashAccountResponse {
    static getAttributeTypeMap() {
        return CashAccountResponse.attributeTypeMap;
    }
}
exports.CashAccountResponse = CashAccountResponse;
CashAccountResponse.discriminator = undefined;
CashAccountResponse.attributeTypeMap = [
    {
        "name": "unreconciledAmountPos",
        "baseName": "unreconciledAmountPos",
        "type": "number"
    },
    {
        "name": "unreconciledAmountNeg",
        "baseName": "unreconciledAmountNeg",
        "type": "number"
    },
    {
        "name": "startingBalance",
        "baseName": "startingBalance",
        "type": "number"
    },
    {
        "name": "accountBalance",
        "baseName": "accountBalance",
        "type": "number"
    },
    {
        "name": "balanceCurrency",
        "baseName": "balanceCurrency",
        "type": "string"
    }
];
//# sourceMappingURL=cashAccountResponse.js.map