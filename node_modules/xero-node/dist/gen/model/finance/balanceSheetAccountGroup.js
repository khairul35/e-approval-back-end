"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceSheetAccountGroup = void 0;
class BalanceSheetAccountGroup {
    static getAttributeTypeMap() {
        return BalanceSheetAccountGroup.attributeTypeMap;
    }
}
exports.BalanceSheetAccountGroup = BalanceSheetAccountGroup;
BalanceSheetAccountGroup.discriminator = undefined;
BalanceSheetAccountGroup.attributeTypeMap = [
    {
        "name": "accountTypes",
        "baseName": "accountTypes",
        "type": "Array<BalanceSheetAccountType>"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
//# sourceMappingURL=balanceSheetAccountGroup.js.map