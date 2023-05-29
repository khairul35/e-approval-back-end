"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetLine = void 0;
class BudgetLine {
    static getAttributeTypeMap() {
        return BudgetLine.attributeTypeMap;
    }
}
exports.BudgetLine = BudgetLine;
BudgetLine.discriminator = undefined;
BudgetLine.attributeTypeMap = [
    {
        "name": "accountID",
        "baseName": "AccountID",
        "type": "string"
    },
    {
        "name": "accountCode",
        "baseName": "AccountCode",
        "type": "string"
    },
    {
        "name": "budgetBalances",
        "baseName": "BudgetBalances",
        "type": "Array<BudgetBalance>"
    }
];
//# sourceMappingURL=budgetLine.js.map