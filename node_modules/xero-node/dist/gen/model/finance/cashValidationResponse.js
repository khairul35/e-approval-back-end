"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashValidationResponse = void 0;
class CashValidationResponse {
    static getAttributeTypeMap() {
        return CashValidationResponse.attributeTypeMap;
    }
}
exports.CashValidationResponse = CashValidationResponse;
CashValidationResponse.discriminator = undefined;
CashValidationResponse.attributeTypeMap = [
    {
        "name": "accountId",
        "baseName": "accountId",
        "type": "string"
    },
    {
        "name": "statementBalance",
        "baseName": "statementBalance",
        "type": "StatementBalanceResponse"
    },
    {
        "name": "statementBalanceDate",
        "baseName": "statementBalanceDate",
        "type": "string"
    },
    {
        "name": "bankStatement",
        "baseName": "bankStatement",
        "type": "BankStatementResponse"
    },
    {
        "name": "cashAccount",
        "baseName": "cashAccount",
        "type": "CashAccountResponse"
    }
];
//# sourceMappingURL=cashValidationResponse.js.map