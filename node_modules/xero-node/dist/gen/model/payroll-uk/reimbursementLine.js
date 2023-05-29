"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReimbursementLine = void 0;
class ReimbursementLine {
    static getAttributeTypeMap() {
        return ReimbursementLine.attributeTypeMap;
    }
}
exports.ReimbursementLine = ReimbursementLine;
ReimbursementLine.discriminator = undefined;
ReimbursementLine.attributeTypeMap = [
    {
        "name": "reimbursementTypeID",
        "baseName": "reimbursementTypeID",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    }
];
//# sourceMappingURL=reimbursementLine.js.map