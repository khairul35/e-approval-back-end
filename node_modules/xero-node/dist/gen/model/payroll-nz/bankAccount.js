"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    static getAttributeTypeMap() {
        return BankAccount.attributeTypeMap;
    }
}
exports.BankAccount = BankAccount;
BankAccount.discriminator = undefined;
BankAccount.attributeTypeMap = [
    {
        "name": "accountName",
        "baseName": "accountName",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "accountNumber",
        "type": "string"
    },
    {
        "name": "sortCode",
        "baseName": "sortCode",
        "type": "string"
    },
    {
        "name": "particulars",
        "baseName": "particulars",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "dollarAmount",
        "baseName": "dollarAmount",
        "type": "number"
    },
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "calculationType",
        "baseName": "calculationType",
        "type": "BankAccount.CalculationTypeEnum"
    }
];
(function (BankAccount) {
    let CalculationTypeEnum;
    (function (CalculationTypeEnum) {
        CalculationTypeEnum[CalculationTypeEnum["FixedAmount"] = 'FixedAmount'] = "FixedAmount";
        CalculationTypeEnum[CalculationTypeEnum["Balance"] = 'Balance'] = "Balance";
    })(CalculationTypeEnum = BankAccount.CalculationTypeEnum || (BankAccount.CalculationTypeEnum = {}));
})(BankAccount = exports.BankAccount || (exports.BankAccount = {}));
//# sourceMappingURL=bankAccount.js.map