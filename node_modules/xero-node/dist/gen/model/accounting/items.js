"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Items = void 0;
class Items {
    static getAttributeTypeMap() {
        return Items.attributeTypeMap;
    }
}
exports.Items = Items;
Items.discriminator = undefined;
Items.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "Items",
        "type": "Array<Item>"
    }
];
//# sourceMappingURL=items.js.map