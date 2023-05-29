"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveTypes = void 0;
class EmployeeLeaveTypes {
    static getAttributeTypeMap() {
        return EmployeeLeaveTypes.attributeTypeMap;
    }
}
exports.EmployeeLeaveTypes = EmployeeLeaveTypes;
EmployeeLeaveTypes.discriminator = undefined;
EmployeeLeaveTypes.attributeTypeMap = [
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
        "name": "leaveTypes",
        "baseName": "leaveTypes",
        "type": "Array<EmployeeLeaveType>"
    }
];
//# sourceMappingURL=employeeLeaveTypes.js.map