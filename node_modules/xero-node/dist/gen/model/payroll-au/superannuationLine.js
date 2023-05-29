"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperannuationLine = void 0;
class SuperannuationLine {
    static getAttributeTypeMap() {
        return SuperannuationLine.attributeTypeMap;
    }
}
exports.SuperannuationLine = SuperannuationLine;
SuperannuationLine.discriminator = undefined;
SuperannuationLine.attributeTypeMap = [
    {
        "name": "superMembershipID",
        "baseName": "SuperMembershipID",
        "type": "string"
    },
    {
        "name": "contributionType",
        "baseName": "ContributionType",
        "type": "SuperannuationContributionType"
    },
    {
        "name": "calculationType",
        "baseName": "CalculationType",
        "type": "SuperannuationCalculationType"
    },
    {
        "name": "minimumMonthlyEarnings",
        "baseName": "MinimumMonthlyEarnings",
        "type": "number"
    },
    {
        "name": "expenseAccountCode",
        "baseName": "ExpenseAccountCode",
        "type": "string"
    },
    {
        "name": "liabilityAccountCode",
        "baseName": "LiabilityAccountCode",
        "type": "string"
    },
    {
        "name": "paymentDateForThisPeriod",
        "baseName": "PaymentDateForThisPeriod",
        "type": "string"
    },
    {
        "name": "percentage",
        "baseName": "Percentage",
        "type": "number"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    }
];
//# sourceMappingURL=superannuationLine.js.map