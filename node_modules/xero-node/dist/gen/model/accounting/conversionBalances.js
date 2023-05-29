"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionBalances = void 0;
/**
* Balance supplied for each account that has a value as at the conversion date.
*/
class ConversionBalances {
    static getAttributeTypeMap() {
        return ConversionBalances.attributeTypeMap;
    }
}
exports.ConversionBalances = ConversionBalances;
ConversionBalances.discriminator = undefined;
ConversionBalances.attributeTypeMap = [
    {
        "name": "accountCode",
        "baseName": "AccountCode",
        "type": "string"
    },
    {
        "name": "balance",
        "baseName": "Balance",
        "type": "number"
    },
    {
        "name": "balanceDetails",
        "baseName": "BalanceDetails",
        "type": "Array<BalanceDetails>"
    }
];
//# sourceMappingURL=conversionBalances.js.map