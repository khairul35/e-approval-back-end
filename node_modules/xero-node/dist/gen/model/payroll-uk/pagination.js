"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
class Pagination {
    static getAttributeTypeMap() {
        return Pagination.attributeTypeMap;
    }
}
exports.Pagination = Pagination;
Pagination.discriminator = undefined;
Pagination.attributeTypeMap = [
    {
        "name": "page",
        "baseName": "page",
        "type": "number"
    },
    {
        "name": "pageSize",
        "baseName": "pageSize",
        "type": "number"
    },
    {
        "name": "pageCount",
        "baseName": "pageCount",
        "type": "number"
    },
    {
        "name": "itemCount",
        "baseName": "itemCount",
        "type": "number"
    }
];
//# sourceMappingURL=pagination.js.map