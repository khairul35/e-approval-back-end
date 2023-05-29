"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperannuationLine = void 0;
class SuperannuationLine {
    static getAttributeTypeMap() {
        return SuperannuationLine.attributeTypeMap;
    }
}
exports.SuperannuationLine = SuperannuationLine;
SuperannuationLine.discriminator = undefined;
SuperannuationLine.attributeTypeMap = [
    {
        "name": "superannuationTypeID",
        "baseName": "superannuationTypeID",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    },
    {
        "name": "percentage",
        "baseName": "percentage",
        "type": "number"
    },
    {
        "name": "manualAdjustment",
        "baseName": "manualAdjustment",
        "type": "boolean"
    }
];
//# sourceMappingURL=superannuationLine.js.map