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
        "name": "timesheetID",
        "baseName": "timesheetID",
        "type": "string"
    },
    {
        "name": "payrollCalendarID",
        "baseName": "payrollCalendarID",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
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
        "name": "status",
        "baseName": "status",
        "type": "Timesheet.StatusEnum"
    },
    {
        "name": "totalHours",
        "baseName": "totalHours",
        "type": "number"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "updatedDateUTC",
        "type": "Date"
    },
    {
        "name": "timesheetLines",
        "baseName": "timesheetLines",
        "type": "Array<TimesheetLine>"
    }
];
(function (Timesheet) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'Draft'] = "Draft";
        StatusEnum[StatusEnum["Approved"] = 'Approved'] = "Approved";
        StatusEnum[StatusEnum["Completed"] = 'Completed'] = "Completed";
    })(StatusEnum = Timesheet.StatusEnum || (Timesheet.StatusEnum = {}));
})(Timesheet = exports.Timesheet || (exports.Timesheet = {}));
//# sourceMappingURL=timesheet.js.map