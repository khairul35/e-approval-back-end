"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesheetLine = void 0;
class TimesheetLine {
    static getAttributeTypeMap() {
        return TimesheetLine.attributeTypeMap;
    }
}
exports.TimesheetLine = TimesheetLine;
TimesheetLine.discriminator = undefined;
TimesheetLine.attributeTypeMap = [
    {
        "name": "timesheetLineID",
        "baseName": "timesheetLineID",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "earningsRateID",
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "trackingItemID",
        "baseName": "trackingItemID",
        "type": "string"
    },
    {
        "name": "numberOfUnits",
        "baseName": "numberOfUnits",
        "type": "number"
    }
];
//# sourceMappingURL=timesheetLine.js.map