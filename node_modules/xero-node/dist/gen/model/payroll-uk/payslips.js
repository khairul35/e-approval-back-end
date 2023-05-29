"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payslips = void 0;
class Payslips {
    static getAttributeTypeMap() {
        return Payslips.attributeTypeMap;
    }
}
exports.Payslips = Payslips;
Payslips.discriminator = undefined;
Payslips.attributeTypeMap = [
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
        "name": "paySlips",
        "baseName": "paySlips",
        "type": "Array<Payslip>"
    }
];
//# sourceMappingURL=payslips.js.map