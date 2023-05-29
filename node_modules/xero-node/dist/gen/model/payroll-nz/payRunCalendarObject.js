"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRunCalendarObject = void 0;
class PayRunCalendarObject {
    static getAttributeTypeMap() {
        return PayRunCalendarObject.attributeTypeMap;
    }
}
exports.PayRunCalendarObject = PayRunCalendarObject;
PayRunCalendarObject.discriminator = undefined;
PayRunCalendarObject.attributeTypeMap = [
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
        "name": "payRunCalendar",
        "baseName": "payRunCalendar",
        "type": "PayRunCalendar"
    }
];
//# sourceMappingURL=payRunCalendarObject.js.map