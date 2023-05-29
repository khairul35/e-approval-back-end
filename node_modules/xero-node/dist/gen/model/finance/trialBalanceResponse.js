"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialBalanceResponse = void 0;
class TrialBalanceResponse {
    static getAttributeTypeMap() {
        return TrialBalanceResponse.attributeTypeMap;
    }
}
exports.TrialBalanceResponse = TrialBalanceResponse;
TrialBalanceResponse.discriminator = undefined;
TrialBalanceResponse.attributeTypeMap = [
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
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<TrialBalanceAccount>"
    }
];
//# sourceMappingURL=trialBalanceResponse.js.map