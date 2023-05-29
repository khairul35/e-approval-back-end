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
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "typeOfUnits",
        "baseName": "TypeOfUnits",
        "type": "string"
    },
    {
        "name": "leaveTypeID",
        "baseName": "LeaveTypeID",
        "type": "string"
    },
    {
        "name": "normalEntitlement",
        "baseName": "NormalEntitlement",
        "type": "number"
    },
    {
        "name": "leaveLoadingRate",
        "baseName": "LeaveLoadingRate",
        "type": "number"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "isPaidLeave",
        "baseName": "IsPaidLeave",
        "type": "boolean"
    },
    {
        "name": "showOnPayslip",
        "baseName": "ShowOnPayslip",
        "type": "boolean"
    },
    {
        "name": "currentRecord",
        "baseName": "CurrentRecord",
        "type": "boolean"
    },
    {
        "name": "leaveCategoryCode",
        "baseName": "LeaveCategoryCode",
        "type": "LeaveCategoryCode"
    },
    {
        "name": "sGCExempt",
        "baseName": "SGCExempt",
        "type": "boolean"
    }
];
//# sourceMappingURL=leaveType.js.map