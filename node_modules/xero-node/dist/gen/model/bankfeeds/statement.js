"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
class Statement {
    static getAttributeTypeMap() {
        return Statement.attributeTypeMap;
    }
}
exports.Statement = Statement;
Statement.discriminator = undefined;
Statement.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "feedConnectionId",
        "baseName": "feedConnectionId",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Statement.StatusEnum"
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
        "name": "startBalance",
        "baseName": "startBalance",
        "type": "StartBalance"
    },
    {
        "name": "endBalance",
        "baseName": "endBalance",
        "type": "EndBalance"
    },
    {
        "name": "statementLines",
        "baseName": "statementLines",
        "type": "Array<StatementLine>"
    },
    {
        "name": "errors",
        "baseName": "errors",
        "type": "Array<Error>"
    },
    {
        "name": "statementLineCount",
        "baseName": "statementLineCount",
        "type": "number"
    }
];
(function (Statement) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["PENDING"] = 'PENDING'] = "PENDING";
        StatusEnum[StatusEnum["REJECTED"] = 'REJECTED'] = "REJECTED";
        StatusEnum[StatusEnum["DELIVERED"] = 'DELIVERED'] = "DELIVERED";
    })(StatusEnum = Statement.StatusEnum || (Statement.StatusEnum = {}));
})(Statement = exports.Statement || (exports.Statement = {}));
//# sourceMappingURL=statement.js.map