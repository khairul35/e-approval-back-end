"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}
exports.User = User;
User.discriminator = undefined;
User.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "Id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "FirstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "LastName",
        "type": "string"
    },
    {
        "name": "fullName",
        "baseName": "FullName",
        "type": "string"
    }
];
//# sourceMappingURL=user.js.map