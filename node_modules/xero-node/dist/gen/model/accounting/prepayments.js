"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prepayments = void 0;
class Prepayments {
    static getAttributeTypeMap() {
        return Prepayments.attributeTypeMap;
    }
}
exports.Prepayments = Prepayments;
Prepayments.discriminator = undefined;
Prepayments.attributeTypeMap = [
    {
        "name": "prepayments",
        "baseName": "Prepayments",
        "type": "Array<Prepayment>"
    }
];
//# sourceMappingURL=prepayments.js.map