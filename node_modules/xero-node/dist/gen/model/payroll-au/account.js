"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    static getAttributeTypeMap() {
        return Account.attributeTypeMap;
    }
}
exports.Account = Account;
Account.discriminator = undefined;
Account.attributeTypeMap = [
    {
        "name": "accountID",
        "baseName": "AccountID",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "Type",
        "type": "AccountType"
    },
    {
        "name": "code",
        "baseName": "Code",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    }
];
//# sourceMappingURL=account.js.map