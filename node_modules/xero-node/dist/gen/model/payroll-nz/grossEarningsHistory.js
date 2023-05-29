"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrossEarningsHistory = void 0;
class GrossEarningsHistory {
    static getAttributeTypeMap() {
        return GrossEarningsHistory.attributeTypeMap;
    }
}
exports.GrossEarningsHistory = GrossEarningsHistory;
GrossEarningsHistory.discriminator = undefined;
GrossEarningsHistory.attributeTypeMap = [
    {
        "name": "daysPaid",
        "baseName": "daysPaid",
        "type": "number"
    },
    {
        "name": "unpaidWeeks",
        "baseName": "unpaidWeeks",
        "type": "number"
    }
];
//# sourceMappingURL=grossEarningsHistory.js.map