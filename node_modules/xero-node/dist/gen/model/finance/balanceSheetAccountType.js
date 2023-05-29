"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceSheetAccountType = void 0;
class BalanceSheetAccountType {
    static getAttributeTypeMap() {
        return BalanceSheetAccountType.attributeTypeMap;
    }
}
exports.BalanceSheetAccountType = BalanceSheetAccountType;
BalanceSheetAccountType.discriminator = undefined;
BalanceSheetAccountType.attributeTypeMap = [
    {
        "name": "accountType",
        "baseName": "accountType",
        "type": "string"
    },
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<BalanceSheetAccountDetail>"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
//# sourceMappingURL=balanceSheetAccountType.js.map