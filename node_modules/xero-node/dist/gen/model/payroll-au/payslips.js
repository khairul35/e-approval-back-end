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
        "name": "payslips",
        "baseName": "Payslips",
        "type": "Array<Payslip>"
    }
];
//# sourceMappingURL=payslips.js.map