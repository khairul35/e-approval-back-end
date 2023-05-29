"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsOrders = void 0;
class EarningsOrders {
    static getAttributeTypeMap() {
        return EarningsOrders.attributeTypeMap;
    }
}
exports.EarningsOrders = EarningsOrders;
EarningsOrders.discriminator = undefined;
EarningsOrders.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "statutoryDeductions",
        "baseName": "statutoryDeductions",
        "type": "Array<EarningsOrder>"
    }
];
//# sourceMappingURL=earningsOrders.js.map