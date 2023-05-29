"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsOrder = void 0;
class EarningsOrder {
    static getAttributeTypeMap() {
        return EarningsOrder.attributeTypeMap;
    }
}
exports.EarningsOrder = EarningsOrder;
EarningsOrder.discriminator = undefined;
EarningsOrder.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "statutoryDeductionCategory",
        "baseName": "statutoryDeductionCategory",
        "type": "StatutoryDeductionCategory"
    },
    {
        "name": "liabilityAccountId",
        "baseName": "liabilityAccountId",
        "type": "string"
    },
    {
        "name": "currentRecord",
        "baseName": "currentRecord",
        "type": "boolean"
    }
];
//# sourceMappingURL=earningsOrder.js.map