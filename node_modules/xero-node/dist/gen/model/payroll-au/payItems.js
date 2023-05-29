"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayItems = void 0;
class PayItems {
    static getAttributeTypeMap() {
        return PayItems.attributeTypeMap;
    }
}
exports.PayItems = PayItems;
PayItems.discriminator = undefined;
PayItems.attributeTypeMap = [
    {
        "name": "payItems",
        "baseName": "PayItems",
        "type": "PayItem"
    }
];
//# sourceMappingURL=payItems.js.map