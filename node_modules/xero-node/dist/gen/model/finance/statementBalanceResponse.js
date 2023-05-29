"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementBalanceResponse = void 0;
class StatementBalanceResponse {
    static getAttributeTypeMap() {
        return StatementBalanceResponse.attributeTypeMap;
    }
}
exports.StatementBalanceResponse = StatementBalanceResponse;
StatementBalanceResponse.discriminator = undefined;
StatementBalanceResponse.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=statementBalanceResponse.js.map