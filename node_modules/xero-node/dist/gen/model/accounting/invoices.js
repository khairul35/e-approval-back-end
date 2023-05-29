"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoices = void 0;
class Invoices {
    static getAttributeTypeMap() {
        return Invoices.attributeTypeMap;
    }
}
exports.Invoices = Invoices;
Invoices.discriminator = undefined;
Invoices.attributeTypeMap = [
    {
        "name": "invoices",
        "baseName": "Invoices",
        "type": "Array<Invoice>"
    }
];
//# sourceMappingURL=invoices.js.map