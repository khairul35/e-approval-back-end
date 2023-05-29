"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayslipObject = void 0;
class PayslipObject {
    static getAttributeTypeMap() {
        return PayslipObject.attributeTypeMap;
    }
}
exports.PayslipObject = PayslipObject;
PayslipObject.discriminator = undefined;
PayslipObject.attributeTypeMap = [
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
        "type": "Payslip"
    }
];
//# sourceMappingURL=payslipObject.js.map