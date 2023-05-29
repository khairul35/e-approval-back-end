"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveBalance = void 0;
class EmployeeLeaveBalance {
    static getAttributeTypeMap() {
        return EmployeeLeaveBalance.attributeTypeMap;
    }
}
exports.EmployeeLeaveBalance = EmployeeLeaveBalance;
EmployeeLeaveBalance.discriminator = undefined;
EmployeeLeaveBalance.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "leaveTypeID",
        "baseName": "leaveTypeID",
        "type": "string"
    },
    {
        "name": "balance",
        "baseName": "balance",
        "type": "number"
    },
    {
        "name": "typeOfUnits",
        "baseName": "typeOfUnits",
        "type": "string"
    }
];
//# sourceMappingURL=employeeLeaveBalance.js.map