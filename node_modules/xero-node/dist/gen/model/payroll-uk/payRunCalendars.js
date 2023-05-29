"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRunCalendars = void 0;
class PayRunCalendars {
    static getAttributeTypeMap() {
        return PayRunCalendars.attributeTypeMap;
    }
}
exports.PayRunCalendars = PayRunCalendars;
PayRunCalendars.discriminator = undefined;
PayRunCalendars.attributeTypeMap = [
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
        "name": "payRunCalendars",
        "baseName": "payRunCalendars",
        "type": "Array<PayRunCalendar>"
    }
];
//# sourceMappingURL=payRunCalendars.js.map