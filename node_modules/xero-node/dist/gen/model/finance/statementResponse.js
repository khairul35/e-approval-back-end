"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementResponse = void 0;
class StatementResponse {
    static getAttributeTypeMap() {
        return StatementResponse.attributeTypeMap;
    }
}
exports.StatementResponse = StatementResponse;
StatementResponse.discriminator = undefined;
StatementResponse.attributeTypeMap = [
    {
        "name": "statementId",
        "baseName": "statementId",
        "type": "string"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "importedDateTimeUtc",
        "baseName": "importedDateTimeUtc",
        "type": "Date"
    },
    {
        "name": "importSource",
        "baseName": "importSource",
        "type": "string"
    },
    {
        "name": "startBalance",
        "baseName": "startBalance",
        "type": "number"
    },
    {
        "name": "endBalance",
        "baseName": "endBalance",
        "type": "number"
    },
    {
        "name": "indicativeStartBalance",
        "baseName": "indicativeStartBalance",
        "type": "number"
    },
    {
        "name": "indicativeEndBalance",
        "baseName": "indicativeEndBalance",
        "type": "number"
    },
    {
        "name": "statementLines",
        "baseName": "statementLines",
        "type": "Array<StatementLineResponse>"
    }
];
//# sourceMappingURL=statementResponse.js.map