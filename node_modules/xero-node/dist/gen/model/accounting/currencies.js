"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currencies = void 0;
class Currencies {
    static getAttributeTypeMap() {
        return Currencies.attributeTypeMap;
    }
}
exports.Currencies = Currencies;
Currencies.discriminator = undefined;
Currencies.attributeTypeMap = [
    {
        "name": "currencies",
        "baseName": "Currencies",
        "type": "Array<Currency>"
    }
];
//# sourceMappingURL=currencies.js.map