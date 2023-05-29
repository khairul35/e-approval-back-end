"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartBalance = void 0;
/**
* The starting balance of the statement
*/
class StartBalance {
    static getAttributeTypeMap() {
        return StartBalance.attributeTypeMap;
    }
}
exports.StartBalance = StartBalance;
StartBalance.discriminator = undefined;
StartBalance.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "creditDebitIndicator",
        "baseName": "creditDebitIndicator",
        "type": "CreditDebitIndicator"
    }
];
//# sourceMappingURL=startBalance.js.map