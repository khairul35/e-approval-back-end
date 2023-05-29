"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = void 0;
class PaymentMethod {
    static getAttributeTypeMap() {
        return PaymentMethod.attributeTypeMap;
    }
}
exports.PaymentMethod = PaymentMethod;
PaymentMethod.discriminator = undefined;
PaymentMethod.attributeTypeMap = [
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "PaymentMethod.PaymentMethodEnum"
    },
    {
        "name": "bankAccounts",
        "baseName": "bankAccounts",
        "type": "Array<BankAccount>"
    }
];
(function (PaymentMethod) {
    let PaymentMethodEnum;
    (function (PaymentMethodEnum) {
        PaymentMethodEnum[PaymentMethodEnum["Cheque"] = 'Cheque'] = "Cheque";
        PaymentMethodEnum[PaymentMethodEnum["Electronically"] = 'Electronically'] = "Electronically";
        PaymentMethodEnum[PaymentMethodEnum["Manual"] = 'Manual'] = "Manual";
    })(PaymentMethodEnum = PaymentMethod.PaymentMethodEnum || (PaymentMethod.PaymentMethodEnum = {}));
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
//# sourceMappingURL=paymentMethod.js.map