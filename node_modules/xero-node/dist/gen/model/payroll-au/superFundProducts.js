"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperFundProducts = void 0;
class SuperFundProducts {
    static getAttributeTypeMap() {
        return SuperFundProducts.attributeTypeMap;
    }
}
exports.SuperFundProducts = SuperFundProducts;
SuperFundProducts.discriminator = undefined;
SuperFundProducts.attributeTypeMap = [
    {
        "name": "superFundProducts",
        "baseName": "SuperFundProducts",
        "type": "Array<SuperFundProduct>"
    }
];
//# sourceMappingURL=superFundProducts.js.map