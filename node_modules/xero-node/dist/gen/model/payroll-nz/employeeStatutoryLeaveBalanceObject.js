"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeStatutoryLeaveBalanceObject = void 0;
class EmployeeStatutoryLeaveBalanceObject {
    static getAttributeTypeMap() {
        return EmployeeStatutoryLeaveBalanceObject.attributeTypeMap;
    }
}
exports.EmployeeStatutoryLeaveBalanceObject = EmployeeStatutoryLeaveBalanceObject;
EmployeeStatutoryLeaveBalanceObject.discriminator = undefined;
EmployeeStatutoryLeaveBalanceObject.attributeTypeMap = [
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
        "name": "leaveBalance",
        "baseName": "leaveBalance",
        "type": "EmployeeStatutoryLeaveBalance"
    }
];
//# sourceMappingURL=employeeStatutoryLeaveBalanceObject.js.map