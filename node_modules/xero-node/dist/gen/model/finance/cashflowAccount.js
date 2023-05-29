"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashflowAccount = void 0;
class CashflowAccount {
    static getAttributeTypeMap() {
        return CashflowAccount.attributeTypeMap;
    }
}
exports.CashflowAccount = CashflowAccount;
CashflowAccount.discriminator = undefined;
CashflowAccount.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "accountId",
        "type": "string"
    },
    {
        "name": "accountType",
        "baseName": "accountType",
        "type": "string"
    },
    {
        "name": "accountClass",
        "baseName": "accountClass",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "reportingCode",
        "baseName": "reportingCode",
        "type": "string"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
//# sourceMappingURL=cashflowAccount.js.map