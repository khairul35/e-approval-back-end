"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportHistoryResponse = void 0;
class ReportHistoryResponse {
    static getAttributeTypeMap() {
        return ReportHistoryResponse.attributeTypeMap;
    }
}
exports.ReportHistoryResponse = ReportHistoryResponse;
ReportHistoryResponse.discriminator = undefined;
ReportHistoryResponse.attributeTypeMap = [
    {
        "name": "organisationId",
        "baseName": "organisationId",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "reports",
        "baseName": "reports",
        "type": "Array<ReportHistoryModel>"
    }
];
//# sourceMappingURL=reportHistoryResponse.js.map