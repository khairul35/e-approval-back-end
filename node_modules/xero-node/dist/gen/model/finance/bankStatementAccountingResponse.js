"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankStatementAccountingResponse = void 0;
class BankStatementAccountingResponse {
    static getAttributeTypeMap() {
        return BankStatementAccountingResponse.attributeTypeMap;
    }
}
exports.BankStatementAccountingResponse = BankStatementAccountingResponse;
BankStatementAccountingResponse.discriminator = undefined;
BankStatementAccountingResponse.attributeTypeMap = [
    {
        "name": "bankAccountId",
        "baseName": "bankAccountId",
        "type": "string"
    },
    {
        "name": "bankAccountName",
        "baseName": "bankAccountName",
        "type": "string"
    },
    {
        "name": "bankAccountCurrencyCode",
        "baseName": "bankAccountCurrencyCode",
        "type": "string"
    },
    {
        "name": "statements",
        "baseName": "statements",
        "type": "Array<StatementResponse>"
    }
];
//# sourceMappingURL=bankStatementAccountingResponse.js.map