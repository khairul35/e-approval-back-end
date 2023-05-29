"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineObject = void 0;
class InlineObject {
    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }
}
exports.InlineObject = InlineObject;
InlineObject.discriminator = undefined;
InlineObject.attributeTypeMap = [
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "filename",
        "baseName": "filename",
        "type": "string"
    },
    {
        "name": "mimeType",
        "baseName": "mimeType",
        "type": "string"
    }
];
//# sourceMappingURL=inlineObject.js.map