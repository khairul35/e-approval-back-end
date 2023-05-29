"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    static getAttributeTypeMap() {
        return BankAccount.attributeTypeMap;
    }
}
exports.BankAccount = BankAccount;
BankAccount.discriminator = undefined;
BankAccount.attributeTypeMap = [
    {
        "name": "accountName",
        "baseName": "accountName",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "accountNumber",
        "type": "string"
    },
    {
        "name": "sortCode",
        "baseName": "sortCode",
        "type": "string"
    }
];
//# sourceMappingURL=bankAccount.js.map