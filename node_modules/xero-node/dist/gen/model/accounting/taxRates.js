"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxRates = void 0;
class TaxRates {
    static getAttributeTypeMap() {
        return TaxRates.attributeTypeMap;
    }
}
exports.TaxRates = TaxRates;
TaxRates.discriminator = undefined;
TaxRates.attributeTypeMap = [
    {
        "name": "taxRates",
        "baseName": "TaxRates",
        "type": "Array<TaxRate>"
    }
];
//# sourceMappingURL=taxRates.js.map