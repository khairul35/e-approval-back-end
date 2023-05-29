"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRunObject = void 0;
class PayRunObject {
    static getAttributeTypeMap() {
        return PayRunObject.attributeTypeMap;
    }
}
exports.PayRunObject = PayRunObject;
PayRunObject.discriminator = undefined;
PayRunObject.attributeTypeMap = [
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
        "name": "payRun",
        "baseName": "payRun",
        "type": "PayRun"
    }
];
//# sourceMappingURL=payRunObject.js.map