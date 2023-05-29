"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReimbursementType = void 0;
class ReimbursementType {
    static getAttributeTypeMap() {
        return ReimbursementType.attributeTypeMap;
    }
}
exports.ReimbursementType = ReimbursementType;
ReimbursementType.discriminator = undefined;
ReimbursementType.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "accountCode",
        "baseName": "AccountCode",
        "type": "string"
    },
    {
        "name": "reimbursementTypeID",
        "baseName": "ReimbursementTypeID",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "currentRecord",
        "baseName": "CurrentRecord",
        "type": "boolean"
    }
];
//# sourceMappingURL=reimbursementType.js.map