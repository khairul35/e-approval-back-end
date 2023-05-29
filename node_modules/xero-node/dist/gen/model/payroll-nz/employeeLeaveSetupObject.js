"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveSetupObject = void 0;
class EmployeeLeaveSetupObject {
    static getAttributeTypeMap() {
        return EmployeeLeaveSetupObject.attributeTypeMap;
    }
}
exports.EmployeeLeaveSetupObject = EmployeeLeaveSetupObject;
EmployeeLeaveSetupObject.discriminator = undefined;
EmployeeLeaveSetupObject.attributeTypeMap = [
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
        "name": "leaveSetup",
        "baseName": "leaveSetup",
        "type": "EmployeeLeaveSetup"
    }
];
//# sourceMappingURL=employeeLeaveSetupObject.js.map