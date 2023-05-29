"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndBalance = void 0;
/**
* The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
*/
class EndBalance {
    static getAttributeTypeMap() {
        return EndBalance.attributeTypeMap;
    }
}
exports.EndBalance = EndBalance;
EndBalance.discriminator = undefined;
EndBalance.attributeTypeMap = [
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
//# sourceMappingURL=endBalance.js.map