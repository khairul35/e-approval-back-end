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
        "name": "timesheet",
        "baseName": "Timesheet",
        "type": "Timesheet"
    }
];
//# sourceMappingURL=timesheetObject.js.map