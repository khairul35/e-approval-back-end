"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionDate = void 0;
/**
* The date when the organisation starts using Xero
*/
class ConversionDate {
    static getAttributeTypeMap() {
        return ConversionDate.attributeTypeMap;
    }
}
exports.ConversionDate = ConversionDate;
ConversionDate.discriminator = undefined;
ConversionDate.attributeTypeMap = [
    {
        "name": "month",
        "baseName": "Month",
        "type": "number"
    },
    {
        "name": "year",
        "baseName": "Year",
        "type": "number"
    }
];
//# sourceMappingURL=conversionDate.js.map