"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaySlipObject = void 0;
class PaySlipObject {
    static getAttributeTypeMap() {
        return PaySlipObject.attributeTypeMap;
    }
}
exports.PaySlipObject = PaySlipObject;
PaySlipObject.discriminator = undefined;
PaySlipObject.attributeTypeMap = [
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
        "name": "paySlip",
        "baseName": "paySlip",
        "type": "PaySlip"
    }
];
//# sourceMappingURL=paySlipObject.js.map