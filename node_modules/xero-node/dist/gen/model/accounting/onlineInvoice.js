"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineInvoice = void 0;
class OnlineInvoice {
    static getAttributeTypeMap() {
        return OnlineInvoice.attributeTypeMap;
    }
}
exports.OnlineInvoice = OnlineInvoice;
OnlineInvoice.discriminator = undefined;
OnlineInvoice.attributeTypeMap = [
    {
        "name": "onlineInvoiceUrl",
        "baseName": "OnlineInvoiceUrl",
        "type": "string"
    }
];
//# sourceMappingURL=onlineInvoice.js.map