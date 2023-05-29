"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementLineResponse = void 0;
class StatementLineResponse {
    static getAttributeTypeMap() {
        return StatementLineResponse.attributeTypeMap;
    }
}
exports.StatementLineResponse = StatementLineResponse;
StatementLineResponse.discriminator = undefined;
StatementLineResponse.attributeTypeMap = [
    {
        "name": "statementLineId",
        "baseName": "statementLineId",
        "type": "string"
    },
    {
        "name": "postedDate",
        "baseName": "postedDate",
        "type": "string"
    },
    {
        "name": "payee",
        "baseName": "payee",
        "type": "string"
    },
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "notes",
        "baseName": "notes",
        "type": "string"
    },
    {
        "name": "chequeNo",
        "baseName": "chequeNo",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "transactionDate",
        "baseName": "transactionDate",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "isReconciled",
        "baseName": "isReconciled",
        "type": "boolean"
    },
    {
        "name": "isDuplicate",
        "baseName": "isDuplicate",
        "type": "boolean"
    },
    {
        "name": "isDeleted",
        "baseName": "isDeleted",
        "type": "boolean"
    },
    {
        "name": "payments",
        "baseName": "payments",
        "type": "Array<PaymentResponse>"
    },
    {
        "name": "bankTransactions",
        "baseName": "bankTransactions",
        "type": "Array<BankTransactionResponse>"
    }
];
//# sourceMappingURL=statementLineResponse.js.map