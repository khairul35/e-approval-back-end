"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reports = void 0;
class Reports {
    static getAttributeTypeMap() {
        return Reports.attributeTypeMap;
    }
}
exports.Reports = Reports;
Reports.discriminator = undefined;
Reports.attributeTypeMap = [
    {
        "name": "reports",
        "baseName": "Reports",
        "type": "Array<Report>"
    }
];
//# sourceMappingURL=reports.js.map