"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashflowType = void 0;
class CashflowType {
    static getAttributeTypeMap() {
        return CashflowType.attributeTypeMap;
    }
}
exports.CashflowType = CashflowType;
CashflowType.discriminator = undefined;
CashflowType.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<CashflowAccount>"
    }
];
//# sourceMappingURL=cashflowType.js.map