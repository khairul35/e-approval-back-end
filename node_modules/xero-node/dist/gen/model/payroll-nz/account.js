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
        "baseName": "accountID",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "Account.TypeEnum"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
(function (Account) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["PAYELIABILITY"] = 'PAYELIABILITY'] = "PAYELIABILITY";
        TypeEnum[TypeEnum["WAGESPAYABLE"] = 'WAGESPAYABLE'] = "WAGESPAYABLE";
        TypeEnum[TypeEnum["WAGESEXPENSE"] = 'WAGESEXPENSE'] = "WAGESEXPENSE";
        TypeEnum[TypeEnum["BANK"] = 'BANK'] = "BANK";
    })(TypeEnum = Account.TypeEnum || (Account.TypeEnum = {}));
})(Account = exports.Account || (exports.Account = {}));
//# sourceMappingURL=account.js.map