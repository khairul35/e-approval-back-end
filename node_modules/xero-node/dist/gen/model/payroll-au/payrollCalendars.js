"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayrollCalendars = void 0;
class PayrollCalendars {
    static getAttributeTypeMap() {
        return PayrollCalendars.attributeTypeMap;
    }
}
exports.PayrollCalendars = PayrollCalendars;
PayrollCalendars.discriminator = undefined;
PayrollCalendars.attributeTypeMap = [
    {
        "name": "payrollCalendars",
        "baseName": "PayrollCalendars",
        "type": "Array<PayrollCalendar>"
    }
];
//# sourceMappingURL=payrollCalendars.js.map