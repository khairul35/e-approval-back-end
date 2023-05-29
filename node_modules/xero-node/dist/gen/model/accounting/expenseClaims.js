"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseClaims = void 0;
class ExpenseClaims {
    static getAttributeTypeMap() {
        return ExpenseClaims.attributeTypeMap;
    }
}
exports.ExpenseClaims = ExpenseClaims;
ExpenseClaims.discriminator = undefined;
ExpenseClaims.attributeTypeMap = [
    {
        "name": "expenseClaims",
        "baseName": "ExpenseClaims",
        "type": "Array<ExpenseClaim>"
    }
];
//# sourceMappingURL=expenseClaims.js.map