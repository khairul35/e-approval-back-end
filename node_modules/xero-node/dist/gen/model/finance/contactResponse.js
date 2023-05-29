"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactResponse = void 0;
class ContactResponse {
    static getAttributeTypeMap() {
        return ContactResponse.attributeTypeMap;
    }
}
exports.ContactResponse = ContactResponse;
ContactResponse.discriminator = undefined;
ContactResponse.attributeTypeMap = [
    {
        "name": "contactId",
        "baseName": "contactId",
        "type": "string"
    },
    {
        "name": "contactName",
        "baseName": "contactName",
        "type": "string"
    }
];
//# sourceMappingURL=contactResponse.js.map