"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentResponse = void 0;
class PaymentResponse {
    static getAttributeTypeMap() {
        return PaymentResponse.attributeTypeMap;
    }
}
exports.PaymentResponse = PaymentResponse;
PaymentResponse.discriminator = undefined;
PaymentResponse.attributeTypeMap = [
    {
        "name": "paymentId",
        "baseName": "paymentId",
        "type": "string"
    },
    {
        "name": "batchPaymentId",
        "baseName": "batchPaymentId",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "bankAmount",
        "baseName": "bankAmount",
        "type": "number"
    },
    {
        "name": "currencyRate",
        "baseName": "currencyRate",
        "type": "number"
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "InvoiceResponse"
    },
    {
        "name": "creditNote",
        "baseName": "creditNote",
        "type": "CreditNoteResponse"
    },
    {
        "name": "prepayment",
        "baseName": "prepayment",
        "type": "PrepaymentResponse"
    },
    {
        "name": "overpayment",
        "baseName": "overpayment",
        "type": "OverpaymentResponse"
    }
];
//# sourceMappingURL=paymentResponse.js.map