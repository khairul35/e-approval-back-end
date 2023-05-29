"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceSheetResponse = void 0;
class BalanceSheetResponse {
    static getAttributeTypeMap() {
        return BalanceSheetResponse.attributeTypeMap;
    }
}
exports.BalanceSheetResponse = BalanceSheetResponse;
BalanceSheetResponse.discriminator = undefined;
BalanceSheetResponse.attributeTypeMap = [
    {
        "name": "balanceDate",
        "baseName": "balanceDate",
        "type": "string"
    },
    {
        "name": "asset",
        "baseName": "asset",
        "type": "BalanceSheetAccountGroup"
    },
    {
        "name": "liability",
        "baseName": "liability",
        "type": "BalanceSheetAccountGroup"
    },
    {
        "name": "equity",
        "baseName": "equity",
        "type": "BalanceSheetAccountGroup"
    }
];
//# sourceMappingURL=balanceSheetResponse.js.map