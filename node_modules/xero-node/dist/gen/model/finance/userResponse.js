"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
class UserResponse {
    static getAttributeTypeMap() {
        return UserResponse.attributeTypeMap;
    }
}
exports.UserResponse = UserResponse;
UserResponse.discriminator = undefined;
UserResponse.attributeTypeMap = [
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string"
    },
    {
        "name": "userCreatedDateUtc",
        "baseName": "userCreatedDateUtc",
        "type": "Date"
    },
    {
        "name": "lastLoginDateUtc",
        "baseName": "lastLoginDateUtc",
        "type": "Date"
    },
    {
        "name": "isExternalPartner",
        "baseName": "isExternalPartner",
        "type": "boolean"
    },
    {
        "name": "hasAccountantRole",
        "baseName": "hasAccountantRole",
        "type": "boolean"
    },
    {
        "name": "monthPeriod",
        "baseName": "monthPeriod",
        "type": "string"
    },
    {
        "name": "numberOfLogins",
        "baseName": "numberOfLogins",
        "type": "number"
    },
    {
        "name": "numberOfDocumentsCreated",
        "baseName": "numberOfDocumentsCreated",
        "type": "number"
    },
    {
        "name": "netValueDocumentsCreated",
        "baseName": "netValueDocumentsCreated",
        "type": "number"
    },
    {
        "name": "absoluteValueDocumentsCreated",
        "baseName": "absoluteValueDocumentsCreated",
        "type": "number"
    },
    {
        "name": "attachedPractices",
        "baseName": "attachedPractices",
        "type": "Array<PracticeResponse>"
    },
    {
        "name": "historyRecords",
        "baseName": "historyRecords",
        "type": "Array<HistoryRecordResponse>"
    }
];
//# sourceMappingURL=userResponse.js.map