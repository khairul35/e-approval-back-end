"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashBalance = void 0;
class CashBalance {
    static getAttributeTypeMap() {
        return CashBalance.attributeTypeMap;
    }
}
exports.CashBalance = CashBalance;
CashBalance.discriminator = undefined;
CashBalance.attributeTypeMap = [
    {
        "name": "openingCashBalance",
        "baseName": "openingCashBalance",
        "type": "number"
    },
    {
        "name": "closingCashBalance",
        "baseName": "closingCashBalance",
        "type": "number"
    },
    {
        "name": "netCashMovement",
        "baseName": "netCashMovement",
        "type": "number"
    }
];
//# sourceMappingURL=cashBalance.js.map