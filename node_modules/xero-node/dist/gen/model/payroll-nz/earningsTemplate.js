"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsTemplate = void 0;
class EarningsTemplate {
    static getAttributeTypeMap() {
        return EarningsTemplate.attributeTypeMap;
    }
}
exports.EarningsTemplate = EarningsTemplate;
EarningsTemplate.discriminator = undefined;
EarningsTemplate.attributeTypeMap = [
    {
        "name": "payTemplateEarningID",
        "baseName": "payTemplateEarningID",
        "type": "string"
    },
    {
        "name": "ratePerUnit",
        "baseName": "ratePerUnit",
        "type": "number"
    },
    {
        "name": "numberOfUnits",
        "baseName": "numberOfUnits",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    },
    {
        "name": "earningsRateID",
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=earningsTemplate.js.map