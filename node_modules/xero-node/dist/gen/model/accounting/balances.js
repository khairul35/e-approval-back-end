"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balances = void 0;
/**
* The raw AccountsReceivable(sales invoices) and AccountsPayable(bills) outstanding and overdue amounts, not converted to base currency (read only)
*/
class Balances {
    static getAttributeTypeMap() {
        return Balances.attributeTypeMap;
    }
}
exports.Balances = Balances;
Balances.discriminator = undefined;
Balances.attributeTypeMap = [
    {
        "name": "accountsReceivable",
        "baseName": "AccountsReceivable",
        "type": "AccountsReceivable"
    },
    {
        "name": "accountsPayable",
        "baseName": "AccountsPayable",
        "type": "AccountsPayable"
    }
];
//# sourceMappingURL=balances.js.map