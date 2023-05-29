"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetType = void 0;
class AssetType {
    static getAttributeTypeMap() {
        return AssetType.attributeTypeMap;
    }
}
exports.AssetType = AssetType;
AssetType.discriminator = undefined;
AssetType.attributeTypeMap = [
    {
        "name": "assetTypeId",
        "baseName": "assetTypeId",
        "type": "string"
    },
    {
        "name": "assetTypeName",
        "baseName": "assetTypeName",
        "type": "string"
    },
    {
        "name": "fixedAssetAccountId",
        "baseName": "fixedAssetAccountId",
        "type": "string"
    },
    {
        "name": "depreciationExpenseAccountId",
        "baseName": "depreciationExpenseAccountId",
        "type": "string"
    },
    {
        "name": "accumulatedDepreciationAccountId",
        "baseName": "accumulatedDepreciationAccountId",
        "type": "string"
    },
    {
        "name": "bookDepreciationSetting",
        "baseName": "bookDepreciationSetting",
        "type": "BookDepreciationSetting"
    },
    {
        "name": "locks",
        "baseName": "locks",
        "type": "number"
    }
];
//# sourceMappingURL=assetType.js.map