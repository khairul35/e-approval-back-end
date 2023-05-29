"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reimbursement = void 0;
class Reimbursement {
    static getAttributeTypeMap() {
        return Reimbursement.attributeTypeMap;
    }
}
exports.Reimbursement = Reimbursement;
Reimbursement.discriminator = undefined;
Reimbursement.attributeTypeMap = [
    {
        "name": "reimbursementID",
        "baseName": "reimbursementID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "accountID",
        "baseName": "accountID",
        "type": "string"
    },
    {
        "name": "currentRecord",
        "baseName": "currentRecord",
        "type": "boolean"
    }
];
//# sourceMappingURL=reimbursement.js.map