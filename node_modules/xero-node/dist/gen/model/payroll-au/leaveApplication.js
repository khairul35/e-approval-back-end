"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveApplication = void 0;
class LeaveApplication {
    static getAttributeTypeMap() {
        return LeaveApplication.attributeTypeMap;
    }
}
exports.LeaveApplication = LeaveApplication;
LeaveApplication.discriminator = undefined;
LeaveApplication.attributeTypeMap = [
    {
        "name": "leaveApplicationID",
        "baseName": "LeaveApplicationID",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "EmployeeID",
        "type": "string"
    },
    {
        "name": "leaveTypeID",
        "baseName": "LeaveTypeID",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "Title",
        "type": "string"
    },
    {
        "name": "startDate",
        "baseName": "StartDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "EndDate",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "Description",
        "type": "string"
    },
    {
        "name": "payOutType",
        "baseName": "PayOutType",
        "type": "PayOutType"
    },
    {
        "name": "leavePeriods",
        "baseName": "LeavePeriods",
        "type": "Array<LeavePeriod>"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
//# sourceMappingURL=leaveApplication.js.map