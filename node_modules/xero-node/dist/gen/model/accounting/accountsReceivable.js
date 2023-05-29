"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsReceivable = void 0;
class AccountsReceivable {
    static getAttributeTypeMap() {
        return AccountsReceivable.attributeTypeMap;
    }
}
exports.AccountsReceivable = AccountsReceivable;
AccountsReceivable.discriminator = undefined;
AccountsReceivable.attributeTypeMap = [
    {
        "name": "outstanding",
        "baseName": "Outstanding",
        "type": "number"
    },
    {
        "name": "overdue",
        "baseName": "Overdue",
        "type": "number"
    }
];
//# sourceMappingURL=accountsReceivable.js.map