"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaves = void 0;
class EmployeeLeaves {
    static getAttributeTypeMap() {
        return EmployeeLeaves.attributeTypeMap;
    }
}
exports.EmployeeLeaves = EmployeeLeaves;
EmployeeLeaves.discriminator = undefined;
EmployeeLeaves.attributeTypeMap = [
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
        "type": "Array<EmployeeLeave>"
    }
];
//# sourceMappingURL=employeeLeaves.js.map