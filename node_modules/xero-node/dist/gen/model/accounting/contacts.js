"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
class Contacts {
    static getAttributeTypeMap() {
        return Contacts.attributeTypeMap;
    }
}
exports.Contacts = Contacts;
Contacts.discriminator = undefined;
Contacts.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "Contacts",
        "type": "Array<Contact>"
    }
];
//# sourceMappingURL=contacts.js.map