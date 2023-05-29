"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayTemplate = void 0;
class PayTemplate {
    static getAttributeTypeMap() {
        return PayTemplate.attributeTypeMap;
    }
}
exports.PayTemplate = PayTemplate;
PayTemplate.discriminator = undefined;
PayTemplate.attributeTypeMap = [
    {
        "name": "earningsLines",
        "baseName": "EarningsLines",
        "type": "Array<EarningsLine>"
    },
    {
        "name": "deductionLines",
        "baseName": "DeductionLines",
        "type": "Array<DeductionLine>"
    },
    {
        "name": "superLines",
        "baseName": "SuperLines",
        "type": "Array<SuperLine>"
    },
    {
        "name": "reimbursementLines",
        "baseName": "ReimbursementLines",
        "type": "Array<ReimbursementLine>"
    },
    {
        "name": "leaveLines",
        "baseName": "LeaveLines",
        "type": "Array<LeaveLine>"
    }
];
//# sourceMappingURL=payTemplate.js.map