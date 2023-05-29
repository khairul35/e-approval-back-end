"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
class Price {
    static getAttributeTypeMap() {
        return Price.attributeTypeMap;
    }
}
exports.Price = Price;
Price.discriminator = undefined;
Price.attributeTypeMap = [
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    }
];
//# sourceMappingURL=price.js.map