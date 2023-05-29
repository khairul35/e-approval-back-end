"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxLine = void 0;
class TaxLine {
    static getAttributeTypeMap() {
        return TaxLine.attributeTypeMap;
    }
}
exports.TaxLine = TaxLine;
TaxLine.discriminator = undefined;
TaxLine.attributeTypeMap = [
    {
        "name": "taxLineID",
        "baseName": "taxLineID",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "globalTaxTypeID",
        "baseName": "globalTaxTypeID",
        "type": "string"
    },
    {
        "name": "manualAdjustment",
        "baseName": "manualAdjustment",
        "type": "boolean"
    }
];
//# sourceMappingURL=taxLine.js.map