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
        "name": "payslip",
        "baseName": "Payslip",
        "type": "Payslip"
    }
];
//# sourceMappingURL=payslipObject.js.map