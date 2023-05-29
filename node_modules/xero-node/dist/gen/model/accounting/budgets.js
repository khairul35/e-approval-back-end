"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budgets = void 0;
class Budgets {
    static getAttributeTypeMap() {
        return Budgets.attributeTypeMap;
    }
}
exports.Budgets = Budgets;
Budgets.discriminator = undefined;
Budgets.attributeTypeMap = [
    {
        "name": "budgets",
        "baseName": "Budgets",
        "type": "Array<Budget>"
    }
];
//# sourceMappingURL=budgets.js.map