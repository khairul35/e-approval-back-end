"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfitAndLossResponse = void 0;
class ProfitAndLossResponse {
    static getAttributeTypeMap() {
        return ProfitAndLossResponse.attributeTypeMap;
    }
}
exports.ProfitAndLossResponse = ProfitAndLossResponse;
ProfitAndLossResponse.discriminator = undefined;
ProfitAndLossResponse.attributeTypeMap = [
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
        "name": "netProfitLoss",
        "baseName": "netProfitLoss",
        "type": "number"
    },
    {
        "name": "revenue",
        "baseName": "revenue",
        "type": "PnlAccountClass"
    },
    {
        "name": "expense",
        "baseName": "expense",
        "type": "PnlAccountClass"
    }
];
//# sourceMappingURL=profitAndLossResponse.js.map