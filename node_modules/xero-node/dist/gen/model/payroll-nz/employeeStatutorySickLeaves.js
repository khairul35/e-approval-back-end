"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeStatutorySickLeaves = void 0;
class EmployeeStatutorySickLeaves {
    static getAttributeTypeMap() {
        return EmployeeStatutorySickLeaves.attributeTypeMap;
    }
}
exports.EmployeeStatutorySickLeaves = EmployeeStatutorySickLeaves;
EmployeeStatutorySickLeaves.discriminator = undefined;
EmployeeStatutorySickLeaves.attributeTypeMap = [
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
        "name": "statutorySickLeave",
        "baseName": "statutorySickLeave",
        "type": "Array<EmployeeStatutorySickLeave>"
    }
];
//# sourceMappingURL=employeeStatutorySickLeaves.js.map