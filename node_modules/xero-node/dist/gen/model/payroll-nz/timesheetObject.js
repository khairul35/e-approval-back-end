"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesheetObject = void 0;
class TimesheetObject {
    static getAttributeTypeMap() {
        return TimesheetObject.attributeTypeMap;
    }
}
exports.TimesheetObject = TimesheetObject;
TimesheetObject.discriminator = undefined;
TimesheetObject.attributeTypeMap = [
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
        "name": "timesheet",
        "baseName": "timesheet",
        "type": "Timesheet"
    }
];
//# sourceMappingURL=timesheetObject.js.map