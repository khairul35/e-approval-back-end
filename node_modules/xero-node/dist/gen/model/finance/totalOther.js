"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalOther = void 0;
class TotalOther {
    static getAttributeTypeMap() {
        return TotalOther.attributeTypeMap;
    }
}
exports.TotalOther = TotalOther;
TotalOther.discriminator = undefined;
TotalOther.attributeTypeMap = [
    {
        "name": "totalOutstandingAged",
        "baseName": "totalOutstandingAged",
        "type": "number"
    },
    {
        "name": "totalVoided",
        "baseName": "totalVoided",
        "type": "number"
    },
    {
        "name": "totalCredited",
        "baseName": "totalCredited",
        "type": "number"
    }
];
//# sourceMappingURL=totalOther.js.map