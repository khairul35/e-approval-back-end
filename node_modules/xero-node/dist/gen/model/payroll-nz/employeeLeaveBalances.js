"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveBalances = void 0;
class EmployeeLeaveBalances {
    static getAttributeTypeMap() {
        return EmployeeLeaveBalances.attributeTypeMap;
    }
}
exports.EmployeeLeaveBalances = EmployeeLeaveBalances;
EmployeeLeaveBalances.discriminator = undefined;
EmployeeLeaveBalances.attributeTypeMap = [
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
        "name": "leaveBalances",
        "baseName": "leaveBalances",
        "type": "Array<EmployeeLeaveBalance>"
    }
];
//# sourceMappingURL=employeeLeaveBalances.js.map