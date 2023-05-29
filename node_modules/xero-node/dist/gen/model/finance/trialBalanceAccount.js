"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialBalanceAccount = void 0;
class TrialBalanceAccount {
    static getAttributeTypeMap() {
        return TrialBalanceAccount.attributeTypeMap;
    }
}
exports.TrialBalanceAccount = TrialBalanceAccount;
TrialBalanceAccount.discriminator = undefined;
TrialBalanceAccount.attributeTypeMap = [
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
        "name": "accountCode",
        "baseName": "accountCode",
        "type": "string"
    },
    {
        "name": "accountClass",
        "baseName": "accountClass",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "reportingCode",
        "baseName": "reportingCode",
        "type": "string"
    },
    {
        "name": "accountName",
        "baseName": "accountName",
        "type": "string"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "TrialBalanceEntry"
    },
    {
        "name": "signedBalance",
        "baseName": "signedBalance",
        "type": "number"
    },
    {
        "name": "accountMovement",
        "baseName": "accountMovement",
        "type": "TrialBalanceMovement"
    }
];
//# sourceMappingURL=trialBalanceAccount.js.map