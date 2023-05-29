"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employment = void 0;
class Employment {
    static getAttributeTypeMap() {
        return Employment.attributeTypeMap;
    }
}
exports.Employment = Employment;
Employment.discriminator = undefined;
Employment.attributeTypeMap = [
    {
        "name": "payrollCalendarID",
        "baseName": "payrollCalendarID",
        "type": "string"
    },
    {
        "name": "payRunCalendarID",
        "baseName": "payRunCalendarID",
        "type": "string"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    }
];
//# sourceMappingURL=employment.js.map