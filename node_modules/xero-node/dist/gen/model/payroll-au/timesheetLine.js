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
        "name": "earningsRateID",
        "baseName": "EarningsRateID",
        "type": "string"
    },
    {
        "name": "trackingItemID",
        "baseName": "TrackingItemID",
        "type": "string"
    },
    {
        "name": "numberOfUnits",
        "baseName": "NumberOfUnits",
        "type": "Array<number>"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    }
];
//# sourceMappingURL=timesheetLine.js.map