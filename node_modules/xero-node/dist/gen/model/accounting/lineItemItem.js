"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemItem = void 0;
class LineItemItem {
    static getAttributeTypeMap() {
        return LineItemItem.attributeTypeMap;
    }
}
exports.LineItemItem = LineItemItem;
LineItemItem.discriminator = undefined;
LineItemItem.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "Code",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "itemID",
        "baseName": "ItemID",
        "type": "string"
    }
];
//# sourceMappingURL=lineItemItem.js.map