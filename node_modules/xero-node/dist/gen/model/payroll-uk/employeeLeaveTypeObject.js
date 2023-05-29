"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveTypeObject = void 0;
class EmployeeLeaveTypeObject {
    static getAttributeTypeMap() {
        return EmployeeLeaveTypeObject.attributeTypeMap;
    }
}
exports.EmployeeLeaveTypeObject = EmployeeLeaveTypeObject;
EmployeeLeaveTypeObject.discriminator = undefined;
EmployeeLeaveTypeObject.attributeTypeMap = [
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
        "name": "leaveType",
        "baseName": "leaveType",
        "type": "EmployeeLeaveType"
    }
];
//# sourceMappingURL=employeeLeaveTypeObject.js.map