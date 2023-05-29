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
        "baseName": "ReimbursementTypeID",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "Description",
        "type": "string"
    },
    {
        "name": "expenseAccount",
        "baseName": "ExpenseAccount",
        "type": "string"
    }
];
//# sourceMappingURL=reimbursementLine.js.map