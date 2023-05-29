"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeePayTemplate = void 0;
class EmployeePayTemplate {
    static getAttributeTypeMap() {
        return EmployeePayTemplate.attributeTypeMap;
    }
}
exports.EmployeePayTemplate = EmployeePayTemplate;
EmployeePayTemplate.discriminator = undefined;
EmployeePayTemplate.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "earningTemplates",
        "baseName": "earningTemplates",
        "type": "Array<EarningsTemplate>"
    }
];
//# sourceMappingURL=employeePayTemplate.js.map