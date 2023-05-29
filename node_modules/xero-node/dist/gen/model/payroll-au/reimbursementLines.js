"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReimbursementLines = void 0;
/**
* The reimbursement type lines
*/
class ReimbursementLines {
    static getAttributeTypeMap() {
        return ReimbursementLines.attributeTypeMap;
    }
}
exports.ReimbursementLines = ReimbursementLines;
ReimbursementLines.discriminator = undefined;
ReimbursementLines.attributeTypeMap = [
    {
        "name": "reimbursementLines",
        "baseName": "ReimbursementLines",
        "type": "Array<ReimbursementLine>"
    }
];
//# sourceMappingURL=reimbursementLines.js.map