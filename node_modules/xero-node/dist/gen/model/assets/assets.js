"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assets = void 0;
class Assets {
    static getAttributeTypeMap() {
        return Assets.attributeTypeMap;
    }
}
exports.Assets = Assets;
Assets.discriminator = undefined;
Assets.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<Asset>"
    }
];
//# sourceMappingURL=assets.js.map