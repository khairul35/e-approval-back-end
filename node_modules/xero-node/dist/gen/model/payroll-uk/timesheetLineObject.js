"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesheetLineObject = void 0;
class TimesheetLineObject {
    static getAttributeTypeMap() {
        return TimesheetLineObject.attributeTypeMap;
    }
}
exports.TimesheetLineObject = TimesheetLineObject;
TimesheetLineObject.discriminator = undefined;
TimesheetLineObject.attributeTypeMap = [
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
        "name": "timesheetLine",
        "baseName": "timesheetLine",
        "type": "TimesheetLine"
    }
];
//# sourceMappingURL=timesheetLineObject.js.map