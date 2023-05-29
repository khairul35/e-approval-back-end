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
        "type": "PayRunCalendar.CalendarTypeEnum"
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
(function (PayRunCalendar) {
    let CalendarTypeEnum;
    (function (CalendarTypeEnum) {
        CalendarTypeEnum[CalendarTypeEnum["Weekly"] = 'Weekly'] = "Weekly";
        CalendarTypeEnum[CalendarTypeEnum["Fortnightly"] = 'Fortnightly'] = "Fortnightly";
        CalendarTypeEnum[CalendarTypeEnum["FourWeekly"] = 'FourWeekly'] = "FourWeekly";
        CalendarTypeEnum[CalendarTypeEnum["Monthly"] = 'Monthly'] = "Monthly";
        CalendarTypeEnum[CalendarTypeEnum["Annual"] = 'Annual'] = "Annual";
        CalendarTypeEnum[CalendarTypeEnum["Quarterly"] = 'Quarterly'] = "Quarterly";
    })(CalendarTypeEnum = PayRunCalendar.CalendarTypeEnum || (PayRunCalendar.CalendarTypeEnum = {}));
})(PayRunCalendar = exports.PayRunCalendar || (exports.PayRunCalendar = {}));
//# sourceMappingURL=payRunCalendar.js.map