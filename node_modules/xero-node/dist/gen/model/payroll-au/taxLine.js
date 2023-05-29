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
        "name": "payslipTaxLineID",
        "baseName": "PayslipTaxLineID",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "Amount",
        "type": "number"
    },
    {
        "name": "taxTypeName",
        "baseName": "TaxTypeName",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "Description",
        "type": "string"
    },
    {
        "name": "manualTaxType",
        "baseName": "ManualTaxType",
        "type": "ManualTaxType"
    },
    {
        "name": "liabilityAccount",
        "baseName": "LiabilityAccount",
        "type": "string"
    }
];
//# sourceMappingURL=taxLine.js.map