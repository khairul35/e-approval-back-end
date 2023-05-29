"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timesheet = void 0;
class Timesheet {
    static getAttributeTypeMap() {
        return Timesheet.attributeTypeMap;
    }
}
exports.Timesheet = Timesheet;
Timesheet.discriminator = undefined;
Timesheet.attributeTypeMap = [
    {
        "name": "employeeID",
        "baseName": "EmployeeID",
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
        "name": "status",
        "baseName": "Status",
        "type": "TimesheetStatus"
    },
    {
        "name": "hours",
        "baseName": "Hours",
        "type": "number"
    },
    {
        "name": "timesheetID",
        "baseName": "TimesheetID",
        "type": "string"
    },
    {
        "name": "timesheetLines",
        "baseName": "TimesheetLines",
        "type": "Array<TimesheetLine>"
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
//# sourceMappingURL=timesheet.js.map