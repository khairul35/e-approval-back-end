"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceSheetAccountDetail = void 0;
class BalanceSheetAccountDetail {
    static getAttributeTypeMap() {
        return BalanceSheetAccountDetail.attributeTypeMap;
    }
}
exports.BalanceSheetAccountDetail = BalanceSheetAccountDetail;
BalanceSheetAccountDetail.discriminator = undefined;
BalanceSheetAccountDetail.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "accountID",
        "baseName": "accountID",
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
//# sourceMappingURL=balanceSheetAccountDetail.js.map