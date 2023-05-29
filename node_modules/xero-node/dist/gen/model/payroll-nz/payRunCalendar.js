"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRunCalendar = void 0;
class PayRunCalendar {
    static getAttributeTypeMap() {
        return PayRunCalendar.attributeTypeMap;
    }
}
exports.PayRunCalendar = PayRunCalendar;
PayRunCalendar.discriminator = undefined;
PayRunCalendar.attributeTypeMap = [
    {
        "name": "payrollCalendarID",
        "baseName": "payrollCalendarID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "calendarType",
        "baseName": "calendarType",
        "type": "CalendarType"
    },
    {
        "name": "periodStartDate",
        "baseName": "periodStartDate",
        "type": "string"
    },
    {
        "name": "periodEndDate",
        "baseName": "periodEndDate",
        "type": "string"
    },
    {
        "name": "paymentDate",
        "baseName": "paymentDate",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "updatedDateUTC",
        "type": "Date"
    }
];
//# sourceMappingURL=payRunCalendar.js.map