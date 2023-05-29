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
        "name": "statementText",
        "baseName": "StatementText",
        "type": "string"
    },
    {
        "name": "accountName",
        "baseName": "AccountName",
        "type": "string"
    },
    {
        "name": "bSB",
        "baseName": "BSB",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "AccountNumber",
        "type": "string"
    },
    {
        "name": "remainder",
        "baseName": "Remainder",
        "type": "boolean"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    }
];
//# sourceMappingURL=bankAccount.js.map