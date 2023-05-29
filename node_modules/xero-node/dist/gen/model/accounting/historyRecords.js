"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryRecords = void 0;
class HistoryRecords {
    static getAttributeTypeMap() {
        return HistoryRecords.attributeTypeMap;
    }
}
exports.HistoryRecords = HistoryRecords;
HistoryRecords.discriminator = undefined;
HistoryRecords.attributeTypeMap = [
    {
        "name": "historyRecords",
        "baseName": "HistoryRecords",
        "type": "Array<HistoryRecord>"
    }
];
//# sourceMappingURL=historyRecords.js.map