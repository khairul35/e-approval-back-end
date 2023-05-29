"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementLine = void 0;
/**
* the lines details for a statement
*/
class StatementLine {
    static getAttributeTypeMap() {
        return StatementLine.attributeTypeMap;
    }
}
exports.StatementLine = StatementLine;
StatementLine.discriminator = undefined;
StatementLine.attributeTypeMap = [
    {
        "name": "postedDate",
        "baseName": "postedDate",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "creditDebitIndicator",
        "baseName": "creditDebitIndicator",
        "type": "CreditDebitIndicator"
    },
    {
        "name": "transactionId",
        "baseName": "transactionId",
        "type": "string"
    },
    {
        "name": "payeeName",
        "baseName": "payeeName",
        "type": "string"
    },
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "chequeNumber",
        "baseName": "chequeNumber",
        "type": "string"
    },
    {
        "name": "transactionType",
        "baseName": "transactionType",
        "type": "string"
    }
];
//# sourceMappingURL=statementLine.js.map