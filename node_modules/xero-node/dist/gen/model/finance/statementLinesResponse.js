"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatementLinesResponse = void 0;
class StatementLinesResponse {
    static getAttributeTypeMap() {
        return StatementLinesResponse.attributeTypeMap;
    }
}
exports.StatementLinesResponse = StatementLinesResponse;
StatementLinesResponse.discriminator = undefined;
StatementLinesResponse.attributeTypeMap = [
    {
        "name": "unreconciledAmountPos",
        "baseName": "unreconciledAmountPos",
        "type": "number"
    },
    {
        "name": "unreconciledAmountNeg",
        "baseName": "unreconciledAmountNeg",
        "type": "number"
    },
    {
        "name": "unreconciledLines",
        "baseName": "unreconciledLines",
        "type": "number"
    },
    {
        "name": "avgDaysUnreconciledPos",
        "baseName": "avgDaysUnreconciledPos",
        "type": "number"
    },
    {
        "name": "avgDaysUnreconciledNeg",
        "baseName": "avgDaysUnreconciledNeg",
        "type": "number"
    },
    {
        "name": "earliestUnreconciledTransaction",
        "baseName": "earliestUnreconciledTransaction",
        "type": "string"
    },
    {
        "name": "latestUnreconciledTransaction",
        "baseName": "latestUnreconciledTransaction",
        "type": "string"
    },
    {
        "name": "deletedAmount",
        "baseName": "deletedAmount",
        "type": "number"
    },
    {
        "name": "totalAmount",
        "baseName": "totalAmount",
        "type": "number"
    },
    {
        "name": "dataSource",
        "baseName": "dataSource",
        "type": "DataSourceResponse"
    },
    {
        "name": "earliestReconciledTransaction",
        "baseName": "earliestReconciledTransaction",
        "type": "string"
    },
    {
        "name": "latestReconciledTransaction",
        "baseName": "latestReconciledTransaction",
        "type": "string"
    },
    {
        "name": "reconciledAmountPos",
        "baseName": "reconciledAmountPos",
        "type": "number"
    },
    {
        "name": "reconciledAmountNeg",
        "baseName": "reconciledAmountNeg",
        "type": "number"
    },
    {
        "name": "reconciledLines",
        "baseName": "reconciledLines",
        "type": "number"
    },
    {
        "name": "totalAmountPos",
        "baseName": "totalAmountPos",
        "type": "number"
    },
    {
        "name": "totalAmountNeg",
        "baseName": "totalAmountNeg",
        "type": "number"
    }
];
//# sourceMappingURL=statementLinesResponse.js.map