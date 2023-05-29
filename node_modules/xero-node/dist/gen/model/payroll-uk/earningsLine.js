"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsLine = void 0;
class EarningsLine {
    static getAttributeTypeMap() {
        return EarningsLine.attributeTypeMap;
    }
}
exports.EarningsLine = EarningsLine;
EarningsLine.discriminator = undefined;
EarningsLine.attributeTypeMap = [
    {
        "name": "earningsLineID",
        "baseName": "earningsLineID",
        "type": "string"
    },
    {
        "name": "earningsRateID",
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
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
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "isLinkedToTimesheet",
        "baseName": "isLinkedToTimesheet",
        "type": "boolean"
    },
    {
        "name": "isAverageDailyPayRate",
        "baseName": "isAverageDailyPayRate",
        "type": "boolean"
    }
];
//# sourceMappingURL=earningsLine.js.map