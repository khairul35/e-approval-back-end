"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LockHistoryResponse = void 0;
class LockHistoryResponse {
    static getAttributeTypeMap() {
        return LockHistoryResponse.attributeTypeMap;
    }
}
exports.LockHistoryResponse = LockHistoryResponse;
LockHistoryResponse.discriminator = undefined;
LockHistoryResponse.attributeTypeMap = [
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
        "name": "lockDates",
        "baseName": "lockDates",
        "type": "Array<LockHistoryModel>"
    }
];
//# sourceMappingURL=lockHistoryResponse.js.map