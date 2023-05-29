"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setting = void 0;
class Setting {
    static getAttributeTypeMap() {
        return Setting.attributeTypeMap;
    }
}
exports.Setting = Setting;
Setting.discriminator = undefined;
Setting.attributeTypeMap = [
    {
        "name": "assetNumberPrefix",
        "baseName": "assetNumberPrefix",
        "type": "string"
    },
    {
        "name": "assetNumberSequence",
        "baseName": "assetNumberSequence",
        "type": "string"
    },
    {
        "name": "assetStartDate",
        "baseName": "assetStartDate",
        "type": "string"
    },
    {
        "name": "lastDepreciationDate",
        "baseName": "lastDepreciationDate",
        "type": "string"
    },
    {
        "name": "defaultGainOnDisposalAccountId",
        "baseName": "defaultGainOnDisposalAccountId",
        "type": "string"
    },
    {
        "name": "defaultLossOnDisposalAccountId",
        "baseName": "defaultLossOnDisposalAccountId",
        "type": "string"
    },
    {
        "name": "defaultCapitalGainOnDisposalAccountId",
        "baseName": "defaultCapitalGainOnDisposalAccountId",
        "type": "string"
    },
    {
        "name": "optInForTax",
        "baseName": "optInForTax",
        "type": "boolean"
    }
];
//# sourceMappingURL=setting.js.map