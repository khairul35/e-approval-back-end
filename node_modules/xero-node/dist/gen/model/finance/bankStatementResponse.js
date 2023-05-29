"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankStatementResponse = void 0;
class BankStatementResponse {
    static getAttributeTypeMap() {
        return BankStatementResponse.attributeTypeMap;
    }
}
exports.BankStatementResponse = BankStatementResponse;
BankStatementResponse.discriminator = undefined;
BankStatementResponse.attributeTypeMap = [
    {
        "name": "statementLines",
        "baseName": "statementLines",
        "type": "StatementLinesResponse"
    },
    {
        "name": "currentStatement",
        "baseName": "currentStatement",
        "type": "CurrentStatementResponse"
    }
];
//# sourceMappingURL=bankStatementResponse.js.map