"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileObject = void 0;
class FileObject {
    static getAttributeTypeMap() {
        return FileObject.attributeTypeMap;
    }
}
exports.FileObject = FileObject;
FileObject.discriminator = undefined;
FileObject.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "mimeType",
        "baseName": "MimeType",
        "type": "string"
    },
    {
        "name": "size",
        "baseName": "Size",
        "type": "number"
    },
    {
        "name": "createdDateUtc",
        "baseName": "CreatedDateUtc",
        "type": "string"
    },
    {
        "name": "updatedDateUtc",
        "baseName": "UpdatedDateUtc",
        "type": "string"
    },
    {
        "name": "user",
        "baseName": "User",
        "type": "User"
    },
    {
        "name": "id",
        "baseName": "Id",
        "type": "string"
    },
    {
        "name": "folderId",
        "baseName": "FolderId",
        "type": "string"
    }
];
//# sourceMappingURL=fileObject.js.map