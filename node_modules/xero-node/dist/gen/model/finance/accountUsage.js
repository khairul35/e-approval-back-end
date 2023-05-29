"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUsage = void 0;
class AccountUsage {
    static getAttributeTypeMap() {
        return AccountUsage.attributeTypeMap;
    }
}
exports.AccountUsage = AccountUsage;
AccountUsage.discriminator = undefined;
AccountUsage.attributeTypeMap = [
    {
        "name": "month",
        "baseName": "month",
        "type": "string"
    },
    {
        "name": "accountId",
        "baseName": "accountId",
        "type": "string"
    },
    {
        "name": "currencyCode",
        "baseName": "currencyCode",
        "type": "string"
    },
    {
        "name": "totalReceived",
        "baseName": "totalReceived",
        "type": "number"
    },
    {
        "name": "countReceived",
        "baseName": "countReceived",
        "type": "number"
    },
    {
        "name": "totalPaid",
        "baseName": "totalPaid",
        "type": "number"
    },
    {
        "name": "countPaid",
        "baseName": "countPaid",
        "type": "number"
    },
    {
        "name": "totalManualJournal",
        "baseName": "totalManualJournal",
        "type": "number"
    },
    {
        "name": "countManualJournal",
        "baseName": "countManualJournal",
        "type": "number"
    },
    {
        "name": "accountName",
        "baseName": "accountName",
        "type": "string"
    },
    {
        "name": "reportingCode",
        "baseName": "reportingCode",
        "type": "string"
    },
    {
        "name": "reportingCodeName",
        "baseName": "reportingCodeName",
        "type": "string"
    },
    {
        "name": "reportCodeUpdatedDateUtc",
        "baseName": "reportCodeUpdatedDateUtc",
        "type": "Date"
    }
];
//# sourceMappingURL=accountUsage.js.map