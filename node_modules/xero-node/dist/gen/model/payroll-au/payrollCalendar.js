"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollCalendar = void 0;
class PayrollCalendar {
    static getAttributeTypeMap() {
        return PayrollCalendar.attributeTypeMap;
    }
}
exports.PayrollCalendar = PayrollCalendar;
PayrollCalendar.discriminator = undefined;
PayrollCalendar.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "calendarType",
        "baseName": "CalendarType",
        "type": "CalendarType"
    },
    {
        "name": "startDate",
        "baseName": "StartDate",
        "type": "string"
    },
    {
        "name": "paymentDate",
        "baseName": "PaymentDate",
        "type": "string"
    },
    {
        "name": "payrollCalendarID",
        "baseName": "PayrollCalendarID",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "referenceDate",
        "baseName": "ReferenceDate",
        "type": "string"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
//# sourceMappingURL=payrollCalendar.js.map