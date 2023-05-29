"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatutoryDeduction = void 0;
class StatutoryDeduction {
    static getAttributeTypeMap() {
        return StatutoryDeduction.attributeTypeMap;
    }
}
exports.StatutoryDeduction = StatutoryDeduction;
StatutoryDeduction.discriminator = undefined;
StatutoryDeduction.attributeTypeMap = [
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
//# sourceMappingURL=statutoryDeduction.js.map