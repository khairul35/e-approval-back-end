"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Association = void 0;
class Association {
    static getAttributeTypeMap() {
        return Association.attributeTypeMap;
    }
}
exports.Association = Association;
Association.discriminator = undefined;
Association.attributeTypeMap = [
    {
        "name": "fileId",
        "baseName": "FileId",
        "type": "string"
    },
    {
        "name": "objectId",
        "baseName": "ObjectId",
        "type": "string"
    },
    {
        "name": "objectGroup",
        "baseName": "ObjectGroup",
        "type": "ObjectGroup"
    },
    {
        "name": "objectType",
        "baseName": "ObjectType",
        "type": "ObjectType"
    }
];
//# sourceMappingURL=association.js.map