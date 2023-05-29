"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankTransactions = void 0;
class BankTransactions {
    static getAttributeTypeMap() {
        return BankTransactions.attributeTypeMap;
    }
}
exports.BankTransactions = BankTransactions;
BankTransactions.discriminator = undefined;
BankTransactions.attributeTypeMap = [
    {
        "name": "bankTransactions",
        "baseName": "BankTransactions",
        "type": "Array<BankTransaction>"
    }
];
//# sourceMappingURL=bankTransactions.js.map