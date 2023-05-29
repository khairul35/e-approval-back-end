"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
class Folder {
    static getAttributeTypeMap() {
        return Folder.attributeTypeMap;
    }
}
exports.Folder = Folder;
Folder.discriminator = undefined;
Folder.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "fileCount",
        "baseName": "FileCount",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "Email",
        "type": "string"
    },
    {
        "name": "isInbox",
        "baseName": "IsInbox",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "Id",
        "type": "string"
    }
];
//# sourceMappingURL=folder.js.map