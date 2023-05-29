"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeave = void 0;
class EmployeeLeave {
    static getAttributeTypeMap() {
        return EmployeeLeave.attributeTypeMap;
    }
}
exports.EmployeeLeave = EmployeeLeave;
EmployeeLeave.discriminator = undefined;
EmployeeLeave.attributeTypeMap = [
    {
        "name": "leaveID",
        "baseName": "leaveID",
        "type": "string"
    },
    {
        "name": "leaveTypeID",
        "baseName": "leaveTypeID",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "periods",
        "baseName": "periods",
        "type": "Array<LeavePeriod>"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "updatedDateUTC",
        "type": "Date"
    }
];
//# sourceMappingURL=employeeLeave.js.map