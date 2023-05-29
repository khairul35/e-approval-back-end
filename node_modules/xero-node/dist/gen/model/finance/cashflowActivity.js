"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashflowActivity = void 0;
class CashflowActivity {
    static getAttributeTypeMap() {
        return CashflowActivity.attributeTypeMap;
    }
}
exports.CashflowActivity = CashflowActivity;
CashflowActivity.discriminator = undefined;
CashflowActivity.attributeTypeMap = [
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
        "name": "cashflowTypes",
        "baseName": "cashflowTypes",
        "type": "Array<CashflowType>"
    }
];
//# sourceMappingURL=cashflowActivity.js.map