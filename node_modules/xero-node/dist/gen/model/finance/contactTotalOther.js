"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactTotalOther = void 0;
class ContactTotalOther {
    static getAttributeTypeMap() {
        return ContactTotalOther.attributeTypeMap;
    }
}
exports.ContactTotalOther = ContactTotalOther;
ContactTotalOther.discriminator = undefined;
ContactTotalOther.attributeTypeMap = [
    {
        "name": "totalOutstandingAged",
        "baseName": "totalOutstandingAged",
        "type": "number"
    },
    {
        "name": "totalVoided",
        "baseName": "totalVoided",
        "type": "number"
    },
    {
        "name": "totalCredited",
        "baseName": "totalCredited",
        "type": "number"
    },
    {
        "name": "transactionCount",
        "baseName": "transactionCount",
        "type": "number"
    }
];
//# sourceMappingURL=contactTotalOther.js.map