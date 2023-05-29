"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserActivitiesResponse = void 0;
class UserActivitiesResponse {
    static getAttributeTypeMap() {
        return UserActivitiesResponse.attributeTypeMap;
    }
}
exports.UserActivitiesResponse = UserActivitiesResponse;
UserActivitiesResponse.discriminator = undefined;
UserActivitiesResponse.attributeTypeMap = [
    {
        "name": "organisationId",
        "baseName": "organisationId",
        "type": "string"
    },
    {
        "name": "dataMonth",
        "baseName": "dataMonth",
        "type": "string"
    },
    {
        "name": "users",
        "baseName": "users",
        "type": "Array<UserResponse>"
    }
];
//# sourceMappingURL=userActivitiesResponse.js.map