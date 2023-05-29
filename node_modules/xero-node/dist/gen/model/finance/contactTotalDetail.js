"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactTotalDetail = void 0;
class ContactTotalDetail {
    static getAttributeTypeMap() {
        return ContactTotalDetail.attributeTypeMap;
    }
}
exports.ContactTotalDetail = ContactTotalDetail;
ContactTotalDetail.discriminator = undefined;
ContactTotalDetail.attributeTypeMap = [
    {
        "name": "totalPaid",
        "baseName": "totalPaid",
        "type": "number"
    },
    {
        "name": "totalOutstanding",
        "baseName": "totalOutstanding",
        "type": "number"
    },
    {
        "name": "totalCreditedUnApplied",
        "baseName": "totalCreditedUnApplied",
        "type": "number"
    }
];
//# sourceMappingURL=contactTotalDetail.js.map