"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeOpeningBalance = void 0;
class EmployeeOpeningBalance {
    static getAttributeTypeMap() {
        return EmployeeOpeningBalance.attributeTypeMap;
    }
}
exports.EmployeeOpeningBalance = EmployeeOpeningBalance;
EmployeeOpeningBalance.discriminator = undefined;
EmployeeOpeningBalance.attributeTypeMap = [
    {
        "name": "periodEndDate",
        "baseName": "periodEndDate",
        "type": "string"
    },
    {
        "name": "daysPaid",
        "baseName": "daysPaid",
        "type": "number"
    },
    {
        "name": "unpaidWeeks",
        "baseName": "unpaidWeeks",
        "type": "number"
    },
    {
        "name": "grossEarnings",
        "baseName": "grossEarnings",
        "type": "number"
    }
];
//# sourceMappingURL=employeeOpeningBalance.js.map