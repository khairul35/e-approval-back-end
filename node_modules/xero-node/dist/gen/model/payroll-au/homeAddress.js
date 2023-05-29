"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeAddress = void 0;
class HomeAddress {
    static getAttributeTypeMap() {
        return HomeAddress.attributeTypeMap;
    }
}
exports.HomeAddress = HomeAddress;
HomeAddress.discriminator = undefined;
HomeAddress.attributeTypeMap = [
    {
        "name": "addressLine1",
        "baseName": "AddressLine1",
        "type": "string"
    },
    {
        "name": "addressLine2",
        "baseName": "AddressLine2",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "City",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "Region",
        "type": "State"
    },
    {
        "name": "postalCode",
        "baseName": "PostalCode",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "Country",
        "type": "string"
    }
];
//# sourceMappingURL=homeAddress.js.map