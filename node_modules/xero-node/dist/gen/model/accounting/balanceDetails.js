"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceDetails = void 0;
/**
* An array to specify multiple currency balances of an account
*/
class BalanceDetails {
    static getAttributeTypeMap() {
        return BalanceDetails.attributeTypeMap;
    }
}
exports.BalanceDetails = BalanceDetails;
BalanceDetails.discriminator = undefined;
BalanceDetails.attributeTypeMap = [
    {
        "name": "balance",
        "baseName": "Balance",
        "type": "number"
    },
    {
        "name": "currencyCode",
        "baseName": "CurrencyCode",
        "type": "string"
    },
    {
        "name": "currencyRate",
        "baseName": "CurrencyRate",
        "type": "number"
    }
];
//# sourceMappingURL=balanceDetails.js.map