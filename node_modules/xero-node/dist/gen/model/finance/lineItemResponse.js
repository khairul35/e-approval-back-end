"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemResponse = void 0;
class LineItemResponse {
    static getAttributeTypeMap() {
        return LineItemResponse.attributeTypeMap;
    }
}
exports.LineItemResponse = LineItemResponse;
LineItemResponse.discriminator = undefined;
LineItemResponse.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "accountId",
        "type": "string"
    },
    {
        "name": "reportingCode",
        "baseName": "reportingCode",
        "type": "string"
    },
    {
        "name": "lineAmount",
        "baseName": "lineAmount",
        "type": "number"
    },
    {
        "name": "accountType",
        "baseName": "accountType",
        "type": "string"
    }
];
//# sourceMappingURL=lineItemResponse.js.map