"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesheetEarningsLine = void 0;
class TimesheetEarningsLine {
    static getAttributeTypeMap() {
        return TimesheetEarningsLine.attributeTypeMap;
    }
}
exports.TimesheetEarningsLine = TimesheetEarningsLine;
TimesheetEarningsLine.discriminator = undefined;
TimesheetEarningsLine.attributeTypeMap = [
    {
        "name": "earningsLineID",
        "baseName": "earningsLineID",
        "type": "string"
    },
    {
        "name": "earningsRateID",
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "displayName",
        "baseName": "displayName",
        "type": "string"
    },
    {
        "name": "ratePerUnit",
        "baseName": "ratePerUnit",
        "type": "number"
    },
    {
        "name": "numberOfUnits",
        "baseName": "numberOfUnits",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "isLinkedToTimesheet",
        "baseName": "isLinkedToTimesheet",
        "type": "boolean"
    },
    {
        "name": "isAverageDailyPayRate",
        "baseName": "isAverageDailyPayRate",
        "type": "boolean"
    },
    {
        "name": "isSystemGenerated",
        "baseName": "isSystemGenerated",
        "type": "boolean"
    }
];
//# sourceMappingURL=timesheetEarningsLine.js.map