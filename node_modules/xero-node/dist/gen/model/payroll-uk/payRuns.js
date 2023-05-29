"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRuns = void 0;
class PayRuns {
    static getAttributeTypeMap() {
        return PayRuns.attributeTypeMap;
    }
}
exports.PayRuns = PayRuns;
PayRuns.discriminator = undefined;
PayRuns.attributeTypeMap = [
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
        "name": "payRuns",
        "baseName": "payRuns",
        "type": "Array<PayRun>"
    }
];
//# sourceMappingURL=payRuns.js.map