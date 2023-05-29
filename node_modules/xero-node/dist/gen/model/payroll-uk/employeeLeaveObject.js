"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveObject = void 0;
class EmployeeLeaveObject {
    static getAttributeTypeMap() {
        return EmployeeLeaveObject.attributeTypeMap;
    }
}
exports.EmployeeLeaveObject = EmployeeLeaveObject;
EmployeeLeaveObject.discriminator = undefined;
EmployeeLeaveObject.attributeTypeMap = [
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
        "name": "leave",
        "baseName": "leave",
        "type": "EmployeeLeave"
    }
];
//# sourceMappingURL=employeeLeaveObject.js.map