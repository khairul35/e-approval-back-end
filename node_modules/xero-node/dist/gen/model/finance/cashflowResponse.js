"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashflowResponse = void 0;
class CashflowResponse {
    static getAttributeTypeMap() {
        return CashflowResponse.attributeTypeMap;
    }
}
exports.CashflowResponse = CashflowResponse;
CashflowResponse.discriminator = undefined;
CashflowResponse.attributeTypeMap = [
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "cashBalance",
        "baseName": "cashBalance",
        "type": "CashBalance"
    },
    {
        "name": "cashflowActivities",
        "baseName": "cashflowActivities",
        "type": "Array<CashflowActivity>"
    }
];
//# sourceMappingURL=cashflowResponse.js.map