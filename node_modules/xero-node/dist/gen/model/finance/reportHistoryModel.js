"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportHistoryModel = void 0;
class ReportHistoryModel {
    static getAttributeTypeMap() {
        return ReportHistoryModel.attributeTypeMap;
    }
}
exports.ReportHistoryModel = ReportHistoryModel;
ReportHistoryModel.discriminator = undefined;
ReportHistoryModel.attributeTypeMap = [
    {
        "name": "reportName",
        "baseName": "reportName",
        "type": "string"
    },
    {
        "name": "reportDateText",
        "baseName": "reportDateText",
        "type": "string"
    },
    {
        "name": "publishedDateUtc",
        "baseName": "publishedDateUtc",
        "type": "Date"
    }
];
//# sourceMappingURL=reportHistoryModel.js.map