"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperFundProduct = void 0;
class SuperFundProduct {
    static getAttributeTypeMap() {
        return SuperFundProduct.attributeTypeMap;
    }
}
exports.SuperFundProduct = SuperFundProduct;
SuperFundProduct.discriminator = undefined;
SuperFundProduct.attributeTypeMap = [
    {
        "name": "aBN",
        "baseName": "ABN",
        "type": "string"
    },
    {
        "name": "uSI",
        "baseName": "USI",
        "type": "string"
    },
    {
        "name": "sPIN",
        "baseName": "SPIN",
        "type": "string"
    },
    {
        "name": "productName",
        "baseName": "ProductName",
        "type": "string"
    }
];
//# sourceMappingURL=superFundProduct.js.map