"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }
}
exports.Address = Address;
Address.discriminator = undefined;
Address.attributeTypeMap = [
    {
        "name": "addressLine1",
        "baseName": "addressLine1",
        "type": "string"
    },
    {
        "name": "addressLine2",
        "baseName": "addressLine2",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "postCode",
        "baseName": "postCode",
        "type": "string"
    },
    {
        "name": "countryName",
        "baseName": "countryName",
        "type": "string"
    }
];
//# sourceMappingURL=address.js.map