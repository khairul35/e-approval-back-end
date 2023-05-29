"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryRecordResponse = void 0;
class HistoryRecordResponse {
    static getAttributeTypeMap() {
        return HistoryRecordResponse.attributeTypeMap;
    }
}
exports.HistoryRecordResponse = HistoryRecordResponse;
HistoryRecordResponse.discriminator = undefined;
HistoryRecordResponse.attributeTypeMap = [
    {
        "name": "changes",
        "baseName": "changes",
        "type": "string"
    },
    {
        "name": "dateUTCString",
        "baseName": "dateUTCString",
        "type": "string"
    },
    {
        "name": "dateUTC",
        "baseName": "dateUTC",
        "type": "Date"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "string"
    },
    {
        "name": "details",
        "baseName": "details",
        "type": "string"
    }
];
//# sourceMappingURL=historyRecordResponse.js.map