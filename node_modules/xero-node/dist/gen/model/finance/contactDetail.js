"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactDetail = void 0;
class ContactDetail {
    static getAttributeTypeMap() {
        return ContactDetail.attributeTypeMap;
    }
}
exports.ContactDetail = ContactDetail;
ContactDetail.discriminator = undefined;
ContactDetail.attributeTypeMap = [
    {
        "name": "contactId",
        "baseName": "contactId",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "totalDetail",
        "baseName": "totalDetail",
        "type": "ContactTotalDetail"
    },
    {
        "name": "totalOther",
        "baseName": "totalOther",
        "type": "ContactTotalOther"
    },
    {
        "name": "accountCodes",
        "baseName": "accountCodes",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=contactDetail.js.map