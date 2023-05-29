"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalDetail = void 0;
class TotalDetail {
    static getAttributeTypeMap() {
        return TotalDetail.attributeTypeMap;
    }
}
exports.TotalDetail = TotalDetail;
TotalDetail.discriminator = undefined;
TotalDetail.attributeTypeMap = [
    {
        "name": "totalPaid",
        "baseName": "totalPaid",
        "type": "number"
    },
    {
        "name": "totalOutstanding",
        "baseName": "totalOutstanding",
        "type": "number"
    },
    {
        "name": "totalCreditedUnApplied",
        "baseName": "totalCreditedUnApplied",
        "type": "number"
    }
];
//# sourceMappingURL=totalDetail.js.map