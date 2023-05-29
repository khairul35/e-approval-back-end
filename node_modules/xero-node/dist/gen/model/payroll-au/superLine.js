"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperLine = void 0;
class SuperLine {
    static getAttributeTypeMap() {
        return SuperLine.attributeTypeMap;
    }
}
exports.SuperLine = SuperLine;
SuperLine.discriminator = undefined;
SuperLine.attributeTypeMap = [
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
//# sourceMappingURL=superLine.js.map