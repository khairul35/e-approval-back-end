"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveType = void 0;
class LeaveType {
    static getAttributeTypeMap() {
        return LeaveType.attributeTypeMap;
    }
}
exports.LeaveType = LeaveType;
LeaveType.discriminator = undefined;
LeaveType.attributeTypeMap = [
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
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "isPaidLeave",
        "baseName": "isPaidLeave",
        "type": "boolean"
    },
    {
        "name": "showOnPayslip",
        "baseName": "showOnPayslip",
        "type": "boolean"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "updatedDateUTC",
        "type": "Date"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    },
    {
        "name": "isStatutoryLeave",
        "baseName": "isStatutoryLeave",
        "type": "boolean"
    }
];
//# sourceMappingURL=leaveType.js.map