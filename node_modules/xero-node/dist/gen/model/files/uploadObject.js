"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadObject = void 0;
class UploadObject {
    static getAttributeTypeMap() {
        return UploadObject.attributeTypeMap;
    }
}
exports.UploadObject = UploadObject;
UploadObject.discriminator = undefined;
UploadObject.attributeTypeMap = [
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
//# sourceMappingURL=uploadObject.js.map