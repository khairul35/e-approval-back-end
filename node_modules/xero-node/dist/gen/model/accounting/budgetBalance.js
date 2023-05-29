"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetBalance = void 0;
class BudgetBalance {
    static getAttributeTypeMap() {
        return BudgetBalance.attributeTypeMap;
    }
}
exports.BudgetBalance = BudgetBalance;
BudgetBalance.discriminator = undefined;
BudgetBalance.attributeTypeMap = [
    {
        "name": "period",
        "baseName": "Period",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "unitAmount",
        "baseName": "UnitAmount",
        "type": "number"
    },
    {
        "name": "notes",
        "baseName": "Notes",
        "type": "string"
    }
];
//# sourceMappingURL=budgetBalance.js.map