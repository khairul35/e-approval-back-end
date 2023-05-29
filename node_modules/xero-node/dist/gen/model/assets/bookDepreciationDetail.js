"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDepreciationDetail = void 0;
class BookDepreciationDetail {
    static getAttributeTypeMap() {
        return BookDepreciationDetail.attributeTypeMap;
    }
}
exports.BookDepreciationDetail = BookDepreciationDetail;
BookDepreciationDetail.discriminator = undefined;
BookDepreciationDetail.attributeTypeMap = [
    {
        "name": "currentCapitalGain",
        "baseName": "currentCapitalGain",
        "type": "number"
    },
    {
        "name": "currentGainLoss",
        "baseName": "currentGainLoss",
        "type": "number"
    },
    {
        "name": "depreciationStartDate",
        "baseName": "depreciationStartDate",
        "type": "string"
    },
    {
        "name": "costLimit",
        "baseName": "costLimit",
        "type": "number"
    },
    {
        "name": "residualValue",
        "baseName": "residualValue",
        "type": "number"
    },
    {
        "name": "priorAccumDepreciationAmount",
        "baseName": "priorAccumDepreciationAmount",
        "type": "number"
    },
    {
        "name": "currentAccumDepreciationAmount",
        "baseName": "currentAccumDepreciationAmount",
        "type": "number"
    }
];
//# sourceMappingURL=bookDepreciationDetail.js.map