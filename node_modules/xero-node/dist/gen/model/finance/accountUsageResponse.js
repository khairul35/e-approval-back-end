"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountUsageResponse = void 0;
class AccountUsageResponse {
    static getAttributeTypeMap() {
        return AccountUsageResponse.attributeTypeMap;
    }
}
exports.AccountUsageResponse = AccountUsageResponse;
AccountUsageResponse.discriminator = undefined;
AccountUsageResponse.attributeTypeMap = [
    {
        "name": "organisationId",
        "baseName": "organisationId",
        "type": "string"
    },
    {
        "name": "startMonth",
        "baseName": "startMonth",
        "type": "string"
    },
    {
        "name": "endMonth",
        "baseName": "endMonth",
        "type": "string"
    },
    {
        "name": "accountUsage",
        "baseName": "accountUsage",
        "type": "Array<AccountUsage>"
    }
];
//# sourceMappingURL=accountUsageResponse.js.map