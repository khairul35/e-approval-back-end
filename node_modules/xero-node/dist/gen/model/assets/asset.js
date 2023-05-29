"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asset = void 0;
class Asset {
    static getAttributeTypeMap() {
        return Asset.attributeTypeMap;
    }
}
exports.Asset = Asset;
Asset.discriminator = undefined;
Asset.attributeTypeMap = [
    {
        "name": "assetId",
        "baseName": "assetId",
        "type": "string"
    },
    {
        "name": "assetName",
        "baseName": "assetName",
        "type": "string"
    },
    {
        "name": "assetTypeId",
        "baseName": "assetTypeId",
        "type": "string"
    },
    {
        "name": "assetNumber",
        "baseName": "assetNumber",
        "type": "string"
    },
    {
        "name": "purchaseDate",
        "baseName": "purchaseDate",
        "type": "string"
    },
    {
        "name": "purchasePrice",
        "baseName": "purchasePrice",
        "type": "number"
    },
    {
        "name": "disposalDate",
        "baseName": "disposalDate",
        "type": "string"
    },
    {
        "name": "disposalPrice",
        "baseName": "disposalPrice",
        "type": "number"
    },
    {
        "name": "assetStatus",
        "baseName": "assetStatus",
        "type": "AssetStatus"
    },
    {
        "name": "warrantyExpiryDate",
        "baseName": "warrantyExpiryDate",
        "type": "string"
    },
    {
        "name": "serialNumber",
        "baseName": "serialNumber",
        "type": "string"
    },
    {
        "name": "bookDepreciationSetting",
        "baseName": "bookDepreciationSetting",
        "type": "BookDepreciationSetting"
    },
    {
        "name": "bookDepreciationDetail",
        "baseName": "bookDepreciationDetail",
        "type": "BookDepreciationDetail"
    },
    {
        "name": "canRollback",
        "baseName": "canRollback",
        "type": "boolean"
    },
    {
        "name": "accountingBookValue",
        "baseName": "accountingBookValue",
        "type": "number"
    },
    {
        "name": "isDeleteEnabledForDate",
        "baseName": "isDeleteEnabledForDate",
        "type": "boolean"
    }
];
//# sourceMappingURL=asset.js.map