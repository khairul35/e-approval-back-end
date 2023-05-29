"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
class Files {
    static getAttributeTypeMap() {
        return Files.attributeTypeMap;
    }
}
exports.Files = Files;
Files.discriminator = undefined;
Files.attributeTypeMap = [
    {
        "name": "totalCount",
        "baseName": "TotalCount",
        "type": "number"
    },
    {
        "name": "page",
        "baseName": "Page",
        "type": "number"
    },
    {
        "name": "perPage",
        "baseName": "PerPage",
        "type": "number"
    },
    {
        "name": "items",
        "baseName": "Items",
        "type": "Array<FileObject>"
    }
];
//# sourceMappingURL=files.js.map